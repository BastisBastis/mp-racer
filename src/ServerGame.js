import Phaser from "phaser"
import GameScene from "./auth_server/GameScene"

const config = {
  type: Phaser.HEADLESS,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  },
  scene: [
    GameScene
  ]
};

const serverGame = new Phaser.Game(config);