import Phaser from "phaser"
import mapData from "../assets/maps.json"

const fontFamily = "Monaco";
const mapLabelSize = "46px"

const msToString=(time) => {
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

export default class Menu extends Phaser.Scene {
  
  
  constructor () {
      
      super({key:"Menu"});
  }

  preload () {
      
  }
  
  create (args) {
    
    
    
    const cam = this.cameras.main;
    
    this.add.rectangle(0,0,cam.width,cam.height,0xffffff,0.7).setOrigin(0,0);
    
    /*
    this.scene.launch("Game",{demo:true,show3d:false});
    this.scene.bringToTop()
    */
    this.setBackgroundMap();
    
    this.selectedMap=0;
    this.highscoreData=null;
    this.hsMap=0;
    
    this.objects = [];
    this.mapLabels=[];
    
    console.log(args)
    
    if (args && args.hsMap != undefined) {
      this.showHighscore(args.hsMap);
    } else {
      this.showTitle();
    }
    
    
    
  }
  
  
  
  showTitle() {
    const cam = this.cameras.main;
    const titleLetterWidth=190;
    const words = ["RÄJS","ÄR","JÄTTE","SKOJ!"]
    for (const [i,letter] of ["R","Ä","J","S"].entries()) {
      const x = cam.width/2 - titleLetterWidth*(1.5-i);
      
      this.objects.push(this.add.text(x,100,letter, {font: " 120px Monaco", fill:"#fff"}).setOrigin(0.5,0.5));
      this.objects.push(this.add.text(x,200,words[i], {font: " 64px Monaco", fill:"#000"}).setOrigin(0.5,0.5));
    }
    
    this.objects.push(this.add.text(cam.width/2,cam.height*0.55,"Spela", {font: " 50px Monaco", fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown", ()=> {
      this.clearObjects();
      this.showMapSelection();
    }));
    
    this.objects.push(this.add.text(cam.width/2,cam.height*0.75,"Topplista", {font: " 50px Monaco", fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown", ()=> {
      this.clearObjects();
      this.showHighscore();
    }));

  }
  
  showHighscore(map=0) {
    
    
    
    fetch("https://www.bastismusic.se/racer/highscoreManager.php?fetch=true").then(res=>res.json()).then(data=>{
      this.highscoreData=data;
      this.selectHSMap(map);
      }).catch(err=>alert("Fetch error: "+ err));
  }
  
  selectHSMap(mapIndex) {
    const cam = this.cameras.main;
    
    this.setBackgroundMap(mapIndex)
    
    this.objects.push(this.add.text(cam.width/2,cam.height*0.1,"TOPPLISTA", {font: " 60px Monaco", fill:"#000"}).setOrigin(0.5,0.5));
    
    this.objects.push(this.add.text(cam.width/2,cam.height*0.9,"Tillbaka", {font: " 50px Monaco", fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown", ()=> {
      this.clearObjects();
      this.showTitle();
    }));
    
    this.objects.push(this.add.text(50,cam.height*0.1,"<", {font: " 100px Monaco", fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown", ()=> {
      this.clearObjects();
      const newIndex = (mapIndex-1+this.highscoreData.length)%this.highscoreData.length;
      this.selectHSMap(newIndex);
    }));
    this.objects.push(this.add.text(cam.width-50,cam.height*0.1,">", {font: " 100px Monaco", fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown", ()=> {
      this.clearObjects();
      const newIndex = (mapIndex+1)%this.highscoreData.length;
      this.selectHSMap(newIndex);
    }));
    
    const labelX=[50,cam.width/2,cam.width-50];
      
      this.objects.push(this.add.text(labelX[0],cam.height*0.3,"Namn:", {font: "Bold 30px Monaco", fill:"#000"}).setOrigin(0.0,0.5));
      
      this.objects.push(this.add.text(labelX[1],cam.height*0.3,"Plats:", {font: "Bold 30px Monaco", fill:"#000"}).setOrigin(0.5,0.5));
      
      this.objects.push(this.add.text(labelX[2],cam.height*0.3,"Tid:", {font: "Bold 30px Monaco", fill:"#000"}).setOrigin(1,0.5));
    
    const mapData=this.highscoreData[mapIndex];
    this.objects.push(this.add.text(cam.width/2,cam.height*0.2,mapData.title, {font: " 40px Monaco", fill:"#000"}).setOrigin(0.5,0.5));
    const startY=cam.height*0.4;
    const dy=50;
    
    
    
    for (const i in mapData.scores) {
      const entry = mapData.scores[i]
      this.objects.push(this.add.text(labelX[0],startY+i*dy,entry.name, {font: "30px Monaco", fill:"#000"}).setOrigin(0.0,0.5));
    
      this.objects.push(this.add.text(labelX[1],startY+i*dy,entry.position, {font: "30px Monaco", fill:"#000"}).setOrigin(0.5,0.5));
      
      this.objects.push(this.add.text(labelX[2],startY+i*dy,msToString(entry.time), {font: "30px Monaco", fill:"#000"}).setOrigin(1,0.5));
    }
  }
  
  clearObjects() {
    for (const obj of this.objects) {
      obj.destroy();
    }
  }
  
  showNameSelection() {
    this.clearObjects();
    const cam = this.cameras.main;
    this.objects.push(this.add.text(cam.width/2,cam.height*0.1,"Välj namn:", {font: " 60px Monaco", fill:"#000"}).setOrigin(0.5,0.5));
    
    const textInput = document.getElementById('textInput');
    textInput.style.display="block";
    textInput.value="";
    
    const errorLabel = this.add.text(cam.width/2,cam.height*0.6,"", {font: " 40px Monaco", fill:"#000"}).setOrigin(0.5,0.5);
    
    this.objects.push(errorLabel);
    
    this.objects.push(this.add.text(cam.width/2,cam.height*0.8,"Starta!", {font: "60px "+fontFamily , fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown", () => {
        if (textInput.value.length<3) {
          errorLabel.text= "Namnet är för kort!";
        }
        else {
          try {
          textInput.style.display="none";
          textInput.blur();
          console.log('hupp: '+this.selectedMap+' '+textInput.value)
          this.scene.start("Game",{demo:false,show3d:true, mapIndex:this.selectedMap, name:textInput.value});
          }
          catch (err) {
            alert(err)
          }
        }
      }));
      
      
  }
  
  showMapSelection() {
    this.mapLabels=[];
    
    this.setBackgroundMap(0);
    
    const cam = this.cameras.main;
    this.objects.push(this.add.text(cam.width/2,cam.height*0.1,"Välj bana:", {font: " 60px Monaco", fill:"#000"}).setOrigin(0.5,0.5));
    
    const mapY=cam.height*0.3;
    const mapDeltaY=cam.height*0.15;
    for (const [i, map] of mapData.entries()) {
      const selectedStyle= i==this.selectedMap ? "Bold ": "";
      const label=
      this.add.text(cam.width/2,mapY+mapDeltaY*i,map.title, {font: selectedStyle+mapLabelSize+" "+fontFamily , fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown", () => {
        this.selectMap(i);
      });
      this.objects.push(label);
      this.mapLabels.push(label);
    }
    
    this.objects.push(this.add.text(cam.width/2,cam.height*0.8,"Nästa", {font: "60px "+fontFamily , fill:"#000"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown", () => {
      this.mapLabels=[];
        this.showNameSelection();
      }));
  }
  
  selectMap(i) {
    if (i!= this.selectedMap) {
      this.mapLabels[this.selectedMap].setStyle({
        fontStyle:"",
      });
      this.selectedMap=i;
      this.mapLabels[i].setStyle({
        fontStyle:"Bold",
      });
      this.setBackgroundMap(i);
    }
  }
  
  setBackgroundMap(mapIndex) {
    mapIndex= mapIndex==undefined ? Math.floor(Math.random()*mapData.length) : mapIndex;
    this.scene.stop("Game");
      this.scene.launch("Game",{demo:true,show3d:false,mapIndex:mapIndex});
      this.scene.bringToTop()
  }
  
  
  update() {
      
  }
  
}