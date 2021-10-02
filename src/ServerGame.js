import "./utils/Geckos"
import Phaser from "phaser"
import GameScene from "./auth_server/scenes/GameScene"

/*
const config = {
  type: Phaser.HEADLESS,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  autoFocus: false,
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
*/
const config = {
  type: Phaser.HEADLESS,
  parent: 'phaser-game',
  width: 896,
  height: 504,
  banner: false,
  audio: false,
  scene: [GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1200 }
    }
  }
}

export default class PhaserGame extends Phaser.Game {
  constructor(server) {
    super(config)
    this.server = server
  }
}


//const serverGame = new Phaser.Game(config);