import socket from 'socket.io-client'



import Phaser from "phaser"
import * as THREE from "three"
import Graphics3d from "./Graphics3d"
import carImg from '../assets/car1.png';
import Car from "../objects/Car"
//import NPC from "../objects/NPC"
import Controller from "../helpers/Controller"
import Map from "../objects/Map"
//import Player from "../objects/Player";
import EventsCenter from "../helpers/EventsCenter"

//const show3d = true;

const lerp= (orig,target, amt) =>{
  try {                                         
        //if (amt > 1.0) {amt = 1.0};
        orig.x += (target.x - orig.x) * amt;
        orig.y += (target.y - orig.y) * amt;
        } catch (err) { console.log(err) }
        return orig;
    };
    
const rLerp = (A, B, w) =>{
    let CS = (1-w)*Math.cos(A) + w*Math.cos(B);
    let SN = (1-w)*Math.sin(A) + w*Math.sin(B);
    return Math.atan2(SN,CS);
}


function foot(A, B, P) {
  const AB = {
    x: B.x - A.x,
    y: B.y - A.y
  };
  const k = ((P.x - A.x) * AB.x + (P.y - A.y) * AB.y) / (AB.x * AB.x + AB.y * AB.y);
  return {
    x: A.x + k * AB.x,
    y: A.y + k * AB.y
  };
}


export default class Game extends Phaser.Scene {
  constructor () {
      super({key:"Game"});
  }

  preload () {
      this.load.image('car', carImg);
  }
    
  create (data) {
    try {
    
    this.demo = data.demo==undefined ? false: data.demo;
  const show3d= data.show3d==undefined ? true: data.show3d;
    
    this.loaded=false;

    //this.demo=true;
    
    


    //World stuff
    this.matter.world.disableGravity();

    
    this.startTime;
    this.lapStartTime;
    this.raceActive=false;
    this.raceStarted = false;

    this.countdown=5;
    this.cars=[]
    
    //Camera Settings
    
    
    //this.map = Map.defaultMap(this);
    //this.io = socket.io();
   
    this.game.io.on("raceData", data=>{
      if (this.loaded) {
        return false;
      }
      try {
        console.log("raceData")
        this.loaded=true;
        this.setMap(data.mapIndex);
        
        //this.addPlayer();
        
        
        this.addCars(data.cars);
        
        this.player=this.cars.find(car=>car.id===data.playerId);
        
        this.setupCamera(show3d);
        
        if (!this.demo) {
          this.controller= new Controller(this, this.player)
        }
        
    
        if (this.demo) {
          this.startRace()
        } else {
          this.proceedCountdown();
        }
        
        
        if (!this.demo) {
          this.ui = this.scene.launch("UI",{lapCount:this.map.lapCount});
          }
        
        if (show3d) {
          this.start3d();
        }
        
        this.handleScaling();
      } catch (err) {
        alert(err);
        console.log(err);
      }
    })
    //this.customZoom();
    
    this.serverUpdates=0;
    
    
    
    this.game.io.on("update", data=>{
      for (const cd of data.carData) {
        const car = this.cars.find(car=>car.id===cd.id)
        if (car) {
          car.setPosition(cd.x,cd.y);
          car.setRotation(cd.rot)
        }
      }
      /*
      this.player.setPosition(data.x,data.y);
      this.player.setRotation(data.rot);
      */
      this.serverUpdates++;
      /*
      this.player.updatedData=data;
      
      let lerpAmt =1//0.9;
      if (this.serverUpdates>0) {
        lerpAmt*=1//0.5;
      }
      const newPos=lerp({x:this.player.x,y:this.player.y},data,lerpAmt);
      //console.log(data)
      this.player.setPosition(newPos.x,newPos.y);
      const newRot = rLerp(this.player.rotation,data.rot,1);
      this.player.setRotation(newRot);
      this.serverUpdates++;
      
      //this.player.setVelocity(data.velocity.x+0,data.velocity.y)
      */
    })
    
    this.game.io.emit("raceLoaded");
    
    } catch (err) {
      alert(err)
      //console.log(JSON.stringify(err))
    }
  }
  
  setMap(index) {
    
    this.mapIndex=index;
    this.map=Map.mapWithIndex(this,index);
    
    this.road = this.map.road;
  }
  
  addPlayer() {
    const playerName = "Red";
    
    this.player = new Player(this, 0xff0000, 100,230,0,playerName);
    if (this.demo) {
      this.player.shouldAutoDrive=true;
    }
    
    this.map.addCar(this.player);
  }
  
  addCars(carData) {
    this.cars = [];
    //console.log(carData)
    for (const cd of carData) {
      //console.log(cd)
      const car = new Car(this, cd.color, cd.x,cd.y,cd.id,cd.name);
      this.cars.push(car);
    }
    /*
    const opponentColors=[0xffff00, 0x00ff00, 0x0000ff,0xff00ff,0x00ffff];
    const opponentNames=["Yellow","Green","Blue","Purple","Cyan"]
    for (let i=0; i<n;i++) {
      const car = new NPC(this, opponentColors[i], 0,0,i+1,opponentNames[i])
      this.map.addCar(car);
      this.player.addOpponent(car);
      car.setOpponents([this.player, ...this.opponents])
      for (const opp of this.opponents) {
        opp.addOpponent(car);
      }
      this.opponents.push(car);
    }
    */
  }
  
  setupCamera(show3d) {
    if (!show3d)
      this.cameras.main.setBackgroundColor("#337733")
    if (!show3d && !this.demo) {
      this.cameras.main.startFollow(this.player);
      this.cameras.main.setZoom(1)
    } else if (!show3d && this.demo) {
      
      const hRatio = this.cameras.main.height/this.map.bounds.h;
      const wRatio = this.cameras.main.width/this.map.bounds.w;
      const zoom = Math.min(hRatio,wRatio);
      this.cameras.main.setZoom(zoom)
      const h=this.map.bounds.h*zoom;
      const w = this.map.bounds.w*zoom;
      this.cameras.main.scrollX=this.map.bounds.x-w/2;
      this.cameras.main.scrollY=this.map.bounds.y-h/2;
      
    } else {
      let h=200;
    const w=300;
    const zoom=Math.max(
      w/this.map.bounds.w,
      0
    )
    this.cameras.main.setZoom(zoom)
    h=this.map.bounds.h*zoom;
    this.cameras.main.scrollX=this.map.bounds.x-156;
    this.cameras.main.scrollY=this.map.bounds.y-h/2;
    this.cameras.main.setViewport(0,0,300,h);
    }
  }
  
  handleScaling() {
    const scaleBox = scale => {
      let box = document.getElementById('c')
      if (box) {
        box.style.top = this.game.canvas.offsetTop+"px";
        box.style.left=this.game.canvas.offsetLeft+"px";
        box.style.height=this.scale.displaySize.height+"px";
        box.style.width=this.scale.displaySize.width+"px";
        
      }
    }

    const scaleInput = scale=>{
      
      //console.log(scale)
      
      const input = document.getElementById('textInput');
      input.style.top = (this.game.canvas.offsetTop+this.scale.displaySize.height/3)+"px";
        input.style.left=(this.game.canvas.offsetLeft+this.scale.displaySize.width/6)+"px";
        input.style.height=(scale*70)+"px";
        input.style.width=this.scale.displaySize.width*2/3+"px";
        input.style.fontSize=scale*40+"px";
        input.style.borderWidth=scale*5+"px";
    };
    // initial scale
    let scale = this.game.scale.displaySize.width / this.game.scale.gameSize.width
    scaleBox(scale);
    scaleInput(scale);

    // on resize listener
    this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => {
      let scale = displaySize.width / gameSize.width
      scaleBox(scale)
      scaleInput(scale);
    })
  }
  
  start3d() {
    
    
    const oppData=[];
      for (const opp of this.cars.filter(car=>car!==this.player)) {
        oppData.push({id:opp.id,color:opp.tintTopLeft})
      }
      try {
      this.graphics=new Graphics3d({
        roadData:this.map.road.roadData,
        player:{id:this.player.id,color:this.player.tintTopLeft},
        opponents:oppData,
        walls:this.map.walls,
        finishLine:this.map.finishLine,
        bounds:this.map.bounds
        });
        
      } catch(error) {
        alert(error)
      }
    
  }
  
  printText(text){
    if (this.testLabel)
      this.testLabel.text=text;
    else
      console.log(text)
  }
  
  proceedCountdown() {
    this.countdown-=1;
    const colors=[0x999999,0x00ff00,0xffff00,0xff0000,0x123568];
    if (this.countdown===3) {
      //this.countdownLight.fillAlpha=1.0
      EventsCenter.emit("showCountdown", true)
    } else if (this.countdown===1) {
      this.startRace()
      
    }
    
    //this.countdownLight.fillColor=colors[this.countdown];
    EventsCenter.emit("setCountdownColor",colors[this.countdown])
    
    if (this.countdown>0) {
      
      setTimeout(()=> {
        this.proceedCountdown()
      }, 1500);
      
    } else {
      //this.countdownLight.destroy()
      EventsCenter.emit("showCountdown",false)
    }
  }
  
  
  startRace() {
    this.raceActive=true;
    this.raceStarted=true;
    this.startTime=this.time.now;
    /*
    this.player.start(this.startTime);
    for (const opp of this.opponents) {
      opp.start(this.startTime)
    }
    */
  }
  
  displayLapTime(time) {
    
    EventsCenter.emit('setLapTimeLabel', this.msToString(time));
  }
  
  msToString(time) {
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

  finished() {
    if (!this.demo) {
      if (this.raceActive){
        
        const sortedCars=[this.player, ...this.opponents].sort((a,b)=>{
          
          return a.finishTime-b.finishTime;
        });
        const results=[];
        for (const car of sortedCars) {
          results.push({
            name:car.name,
            lapTimes:car.lapTimes,
            finishTime:car.finishTime,
            player:car===this.player
            });
        }
        
        this.controller.cleanUp();
        setTimeout(()=>{this.showRaceOver(results) },1500);
      }
      this.raceActive = false;
    }
  }
  
  showRaceOver(results) {
    //this.scene.stop("UI");
    //this.scene.launch("RaceOver",{results:results,mapIndex:this.mapIndex})
    
    
  }

  setLapLabel(lap, total) {
    //this.lapLabel.text = "Lap: "+lap+"/"+total;
    EventsCenter.emit("setLapLabel","Lap: "+lap+"/"+total);
  }
  
  customZoom() {
    this.cameras.main.setZoom(0.6)
    this.cameras.main.scrollX=-300
    this.cameras.main.scrollY=200
  }

  update(time,delta) {
    /*
    if (this.serverUpdates!=1) {
      EventsCenter.emit("setDebugLabel", this.serverUpdates)
    }
    else {
      EventsCenter.emit("setDebugLabel", "")
    }
    */
    
    
    if (this.graphics) {
      const oppData=[]
      for (const opp of this.cars.filter(car=>car!==this.player)) {
        
        oppData.push({
          id:opp.id,
          x:opp.x,
          y:opp.y,
          rot:opp.rotation,
          speed:opp.getSpeed(),
          turnAmount:opp.body.angularVelocity
        })
      }
      this.graphics.update(oppData,
        {
          x:this.player.x,
          y:this.player.y,
          rot:this.player.rotation,
          dir:this.player.getMovementDirection(),
          speed:this.player.getSpeed(),
          turnAmount:this.player.body.angularVelocity,
          },delta,this.serverUpdates)
          
    }
    
    /*
    let raceOver=true;
    for (const car of [this.player, ...this.opponents]) {
      if (!car.finished) {
        raceOver=false;
      }
    }
    if (raceOver) {
      this.finished();
    }
    */
    
    if (this.raceStarted) {
      if (this.controller && !this.player.finished) {
        this.controller.update(delta)
      }
      //this.player.update(time, delta);
      /*
      for (const opp of this.opponents) {
        opp.update(time,delta)
      }
      */
    
    //this.map.update(time, delta);
    }
    if (this.raceActive && !this.demo) {
      
      const totalElapsed = time-this.startTime;
      //this.totalTimeLabel.text=this.msToString(totalElapsed);
      
      EventsCenter.emit("setElapsedTimeLabel",this.msToString(totalElapsed))
      
      //console.log(this.io)
      this.game.io.emit("playerUpdate",{turn:this.player.turnAmount,throttle:this.player.throttle});
      
      //const lapElapsed = time-this.player.lapStartTime;
      //this.lapTimeLabel.text = this.msToString(lapElapsed);
    }
    this.serverUpdates=0
  }
}

