import '../../utils/Geckos'

import Phaser from "phaser"

export default class Lobby extends Phaser.Scene {
  constructor() {
    super({key:"Lobby"});
  }
  
  create () {
    this.cars=[];
    const names= ["Röd","Gul","Grön","Blå","Lila","Turkos"];
    const colors= [0xff0000,0xffff00, 0x00ff00, 0x0000ff,0xff00ff,0x00ffff];
    names.forEach((name,i) =>{
      this.cars.push({
        name:name,
        player:false,
        socketId:false,
        color:colors[i]
      })
    })
    this.game.io.on("connection",socket=>{
      this.game.sockets.push(socket)
      const index = this.cars.findIndex(car=>!car.player);
      if (index !== null) {
        this.cars[index].player=true;
        this.cars[index].socketId=socket.id;
        
        socket.emit("lobbyAccept",{
          carIndex:index,
          cars:this.cars
          })
      }
      
      socket.on("disconnect", reason=> {
        console.log(socket.id+ "disconnected. reason: "+reason)
        this.game.sockets=this.game.sockets.filter(sock=>sock.id!==socket.id);
        if (index!==false) {
          this.cars[index].player=false;
          this.cars[index].socketId=false;
        }
        this.game.io.emit("rosterUpdate",{cars:this.cars})
      })
      console.log("new connection")
      
      socket.on("requestRaceScene",()=> {
        this.launchRaceScene()
      })
    })
    
    
    
    console.log("lobby is open")
  }
  
  launchRaceScene() {
    this.game.io.emit("launchRaceScene");
    this.scene.start("Game",{cars:this.cars})
  }
}