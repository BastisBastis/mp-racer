import '../../utils/Geckos'

import Phaser from "phaser"

import NPC from "../objects/NPC"
import Map from "../objects/Map"
import Player from "../objects/Player";


//tmp
import Car from "../objects/Car"

export default class Game extends Phaser.Scene {
  constructor () {
      super({key:"Game"});
  }

  preload () {
      
  }
    
  create (data) {
    
    try {
    
    this.demo = data.demo;
  
    
    //this.demo=true;

    //this.demo=true;
    
    //this.car= new Car(this,0xff0000,50,50,0,"Red")


    //World stuff
    this.matter.world.disableGravity();
    
    
    const mapIndex = data.mapIndex ||0;
    this.mapIndex=mapIndex;
    this.map=Map.mapWithIndex(this,mapIndex);
    
    this.road = this.map.road;
    
    
    
    
    const playerName = data.name || "Red";
    
    
    this.player = new Player(this, 0xff0000, 100,230,0,playerName);
    
    if (this.demo) {
      this.player.shouldAutoDrive=true;
    }
    
    this.map.addCar(this.player);
    
    this.opponents = [];
    
    const opponentColors=[0xffff00, 0x00ff00, 0x0000ff,0xff00ff,0x00ffff];
    const opponentNames=["Yellow","Green","Blue","Purple","Cyan"]
    for (let i=0; i<5;i++) {
      const car = new NPC(this, opponentColors[i], 0,0,i+1,opponentNames[i])
      this.map.addCar(car);
      this.player.addOpponent(car);
      car.setOpponents([this.player, ...this.opponents])
      for (const opp of this.opponents) {
        opp.addOpponent(car);
      }
      this.opponents.push(car);
    }
    
    
    this.startTime;
    this.lapStartTime;
    this.raceActive=false;
    this.raceStarted = false;

    this.countdown=5;
    
    const carData=[];
      for (const car of [this.player, ...this.opponents]) {
        carData.push({
          x:car.x,
          y:car.y,
          color:car.color,
          id:car.id,
          name:car.name
        })
      }

    this.game.sockets.forEach(socket=>{
      socket.emit("raceData",{
        mapIndex: this.mapIndex,
        cars:carData,
        playerId:0
        });
      
      socket.on("raceLoaded",()=> {
        console.log("race loded")
      socket.emit("raceData",{
        mapIndex: this.mapIndex,
        cars:carData,
        playerId:0
        });
      })
        socket.on("playerUpdate",data=>this.playerUpdate(data,this))
    })

    this.game.io.on("connection",socket=>{
      this.game.sockets.push(socket);
      console.log("New connection")
      
      socket.emit("launchRace",{
        mapIndex: this.mapIndex,
        cars:carData,
        playerId:0
        })
      
      //socket.on("playerUpdate",data=>this.playerUpdate(data,this))
      
    })
    
    
    
    if (this.demo) {
      this.startRace()
    } else {
      this.proceedCountdown();
    }
    
    this.debugCounterMax=1000;
    this.debugCounter=this.debugCounterMax+1;
    this.updates=0;
    this.playerUpdates=0
    
    
    } catch (err) {
      console.log(err)
    }
  }
  
  
    
  
  
  
  
  proceedCountdown() {
    this.countdown-=1;
    const colors=[0x999999,0x00ff00,0xffff00,0xff0000,0x123568];
      
    if (this.countdown===1) {
      this.startRace()
      
    }
    if (this.countdown>0) {
      
      setTimeout(()=> {
        this.proceedCountdown()
      }, 1500);
      
    } 
  }
  
  
  startRace() {
    this.raceActive=true;
    this.raceStarted=true;
    this.startTime=this.time.now;
    //this.player.start(this.startTime);
    for (const opp of this.opponents) {
      opp.start(this.startTime)
    }
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
        
        
        setTimeout(()=>{this.showRaceOver(results) },1500);
      }
      this.raceActive = false;
    }
  }
  
  showRaceOver(results) {
    console.log("Show race over")
    //this.scene.launch("RaceOver",{results:results,mapIndex:this.mapIndex})
    
    
  }

  
  playerUpdate(data,self) {
    self.playerUpdates++;
    try {
      //console.log(data);
      self.player.turn(Number(data.turn));
      self.player.throttle=Number(data.throttle);
    } catch (err) {
      console.log(err);
    }
  }

  update(time,delta) {
    try {
      this.updates++;
    //console.log(this)
    
    //this.player.accelerate(1)
    if (this.debugCounter>this.debugCounterMax) {
      //console.log("first update")
    }
    this.debugCounter-=delta;
    
    if (this.debugCounter<0) {
      //this.player.test()
      //console.log(this.updates,this.playerUpdates)
      this.updates=0;
      this.playerUpdates=0;
    }
    
    this.debugCounter=this.debugCounter<0?this.debugCounterMax:this.debugCounter;
    
    
    let raceOver=true;
    for (const car of [this.player, ...this.opponents]) {
      if (!car.finished) {
        raceOver=false;
      }
    }
    if (raceOver) {
      this.finished();
    }
    
    if (this.raceStarted) {
      
      this.player.update(time, delta);
      for (const opp of this.opponents) {
        opp.update(time,delta)
      }
    
    this.map.update(time, delta);
    }
    if (this.raceActive) {
      const totalElapsed = time-this.startTime;
      //this.totalTimeLabel.text=this.msToString(totalElapsed);
      
      
      
      
      //const lapElapsed = time-this.player.lapStartTime;
      //this.lapTimeLabel.text = this.msToString(lapElapsed);
    }
    
    //this.game.io.emit("update",JSON.stringify({x:this.player.x,y:this.player.y}));
    const carData=[];
    for (const car of [this.player, ...this.opponents]) {
      carData.push({
        x:car.x,
        y:car.y,
        rot:car.rotation,
        velocity:car.body.velocity,
        id:car.id
      })
    }
    
    this.game.io.emit("update",{
      /*x:this.player.x,
      y:this.player.y,
      rot:this.player.rotation,
      velocity:this.player.body.velocity*/
      carData:carData
      });
    
    }
    catch (err) {
      console.log(err)
    }
  }
}
