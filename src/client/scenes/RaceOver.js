import Phaser from "phaser"
import Map from "../objects/Map"

const msToString=(time)=> {
    const totalCents = Math.floor(time/10)
      let cents = totalCents%100;
      if (cents<10) {
        cents="0"+""+cents;
      }
      const totalSecs = Math.floor(totalCents/100);
       let secs= totalSecs%60;
       if (secs <10) {
         secs = ""+"0"+secs;
       }
       const mins = Math.floor(totalSecs/60)
      return mins+":"+secs+":"+cents;
  }

export default class RaceOver extends Phaser.Scene {
  
  
  constructor (data) {
      
      super({key:"RaceOver"});
  }

  preload () {
      
  }
  
  create (data) {
    
    
    
    
    
    const cam = this.cameras.main;
    
    this.add.rectangle(0,0,cam.width,cam.height,0xffffff,0.7).setOrigin(0,0)
    
    const hsLabel = this.add.text(cam.width/2,cam.height*0.2,"Ny topplistetid!", {fontSize:40, fill:"#000"}).setOrigin(0.5,0.5).setAlpha(0);
    
    
    
    this.newHS = false;
    
    const player = data.results.find(car=>car.player);
    
    
    const hsPostData={
      mapIndex:data.mapIndex,
      name:player.name,
      time:player.finishTime,
      position:data.results.findIndex(car=>player===car)
    }
    
    
    fetch('https://www.bastismusic.se/racer/highscoreManager.php', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(hsPostData)
    }).then(res => res.text())
      .then(res => 
      {
        
        if (res==1) {
          this.newHS=true;
          this.tweens.add({
            targets:hsLabel,
            alpha:1,
            ease:"Cubic.easeOut",
            duration:400,
            repeat:-1,
            yoyo:true
          });
          }
        }).catch(err=>{
          console.log("Fetch error:"+err)
          alert(err);
        });
    
    
    
    this.add.text(cam.width/2,cam.height*0.1,data.results[0].name+" vinner!", {fontSize:50, fill:"#000"}).setOrigin(0.5,0.5);
    for (const i in data.results) {
      const car=data.results[i];
      
      const color= car.player? "0000aa" : "#000";
      
      this.add.text(100,160+60*i, car.name, {fontSize:30,fill:color});
      this.add.text(cam.width-100,160+60*i, msToString(car.finishTime), {fontSize:30,fill:color}).setOrigin(1,0);
      
    }
    
    this.add.text(cam.width/2,cam.height-50, "Nästa", {fontSize:40,fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerup",()=>{
      try {
      const gameData = this.newHS ? {hsMap:data.mapIndex}:{};
      console.log(gameData);
      this.scene.start("Menu",gameData);
      } catch (err) {
        alert(err);
      }
    });
    
  }
  
  
  update() {
    
  }
  
}