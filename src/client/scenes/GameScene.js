import Phaser from "phaser"

export default class GameScene extends Phaser.Scene {
  
  create () {
    this.cameras.main.setBackgroundColor('#00ff00');
    this.marker = this.add.rectangle(50,50,10,10,0xff0000);
  }
  
}