import "./utils/Geckos"
import Phaser from "phaser"
import GameScene from "./auth_server/scenes/GameScene"
import MockTextureManager from './auth_server/phaserFix/MockTextureManager'
import MockMatterImage from './auth_server/phaserFix/MockMatterImage'

const config = {
  type: Phaser.HEADLESS,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  autoFocus: false,
  physics: {
    default: 'matter',
    matter: {
      debug: false,
      //gravity: { y: 0 }
    }
  },
  scene: [
    GameScene
  ]
};

/*const config = {
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
*/


//const serverGame = new Phaser.Game(config);

/*
const config = {
  type: Phaser.HEADLESS,
  width: 1024,
  height: 640,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 980
      },
      debug: true
    }
  },
  // disable audio
  audio: {
    noAudio: true
  },
  scene: {
    preload: () => {
      console.log('server preload')
    },
    create: () => {
      console.log('server create')
    },
    update: () => {
      // console.log('server update')
    }
  },
  title: 'Phaser server app',
  backgroundColor: '#06C6F8',
  transparent: true,
  disableContextMenu: true
}
*/
export default class PhaserGame extends Phaser.Game {
  
  constructor(server) {
    console.log("game constructor")
    super(config)
    this.server = server
    //console.log(this.scene)
    this.textures= new MockTextureManager(this);
    //this.boot();
    //this.events.emit("boot");
  }
  
  boot() {
    super.boot();
    this.events.emit("ready");
    this.start();
  }
}