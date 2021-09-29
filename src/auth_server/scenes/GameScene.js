import Phaser from "phaser"


export default class GameScene extends Phaser.Scene {
  constructor () {
      super({key:"GameScene"});
  }

  preload () {
      
  }
    
  create () {
    console.log("Server game created")
  }
  
}