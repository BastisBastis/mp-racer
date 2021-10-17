import socket from 'socket.io-client'

import Phaser from "phaser"


export default class Lobby extends Phaser.Scene {
  constructor () {
      super({key:"Lobby"});
  }
  
  create() {
    
    this.cameras.main.setBackgroundColor("#337733")
    const cam =this.cameras.main;
    this.add.text(cam.width/2,50, "RÄJS - Lobby", {font: "74px Monaco", fill:"#fff"}).setOrigin(0.5,0.5);
    
    this.add.text(cam.width/2,cam.height-75,"Starta", {font: "50px Monaco", fill:"#fff"}).setOrigin(0.5,0.5).setInteractive().on("pointerdown",()=>this.emitStart());
    
    
    
    this.carItems=[];
   
    this.game.io.on("lobbyAccept", data=>{
        //console.log(data)
        this.carIndex=data.carIndex;
        this.displayCars(data.cars);
      })
    this.game.io.on("launchRaceScene",()=> {
      this.scene.start("Game")
    })
  }
  
  displayCars(cars) {
    const startY = 120;
    const startX = 50;
    const dy=60;
    
    cars.forEach((car, i)=> {
      const fill = i===this.carIndex? "#f00" : car.player?"#fff":"aaa";
      this.carItems.push(this.add.text(startX, startY+dy*i, car.name, {fontSize:"36px", fill:fill}));
    })
    
  }
  
  emitStart() {
    this.game.io.emit("requestRaceScene");
  }
  
}