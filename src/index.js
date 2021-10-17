import Phaser from 'phaser';
import GameScene from "./client/scenes/GameScene"

import RaceOver from "./client/scenes/RaceOver"
import UI from "./client/scenes/UI"
import Lobby from "./client/scenes/Lobby"
import socket from 'socket.io-client'


const config = {
    type: Phaser.AUTO,
    parent: 'phaserContainer',
    //width: 800,
    //height: 600,
    transparent:true,
    
    scale: {
      parent: 'phaser-example',
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 800,
      height: 600
    }, 
    physics: {
      default: 'matter',
      matter: {
          debug:false
      }
    }, 
    fps: {
      target:60,
      //forceSetTimeOut:true
    },
    scene: [
      Lobby,
      GameScene,
      RaceOver,
      UI
    ]
};
const io = socket.io();

class RaceGame extends Phaser.Game {
  constructor(config) {
    super(config);
    this.io=io;
  }
}

const thisgsme = new RaceGame(config);





// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}