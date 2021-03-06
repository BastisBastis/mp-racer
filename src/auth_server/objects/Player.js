import Phaser from "phaser";
import Car from "./Car";
import NPC from "./NPC"

export default class Player extends NPC {
    constructor(scene,color,x,y,socketId,name) {
        super(scene,color,x,y,0,name);
        this.shouldAutoDrive=false;
        this.airFric=0.05;
        this.socketId=socketId;
    }

    finishLap(time) {
      if (!this.finished) {
        super.finishLap(time);
        //this.scene.displayLapTime(this.lapTimes.slice(-1)[0]);
        if (this.lapCount === this.finishedLaps) {
            this.shouldAutoDrive=true;
        }
        else {
            //this.scene.setLapLabel(this.finishedLaps+1, this.lapCount);
        }
      }
    }
    
    update(time,delta) {
      //this.findClosestNavPoint(5);
      //console.log("1: "+this.x)
      super.update(time,delta);
      //console.log("2: "+this.x)
    }
}