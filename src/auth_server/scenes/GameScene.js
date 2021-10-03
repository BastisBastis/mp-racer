
import '../../utils/Geckos'

import Phaser from "phaser"
import NPC from "../objects/NPC"
import Map from "../objects/Map"
import Player from "../objects/Player";

export default class Game extends Phaser.Scene {
  constructor () {
      super({key:"Game"});
  }

  preload () {
      
  }
    
  create (data) {
    try {
    
    this.demo = data.demo;
  
    
    const demo=true;

    //this.demo=true;
    
    


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

    if (this.demo) {
      this.startRace()
    } else {
      this.proceedCountdown();
    }
    
    } catch (err) {
      alert(err)
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
    this.player.start(this.startTime);
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

  
  

  update(time,delta) {
    
    
    
    
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
  }
}
