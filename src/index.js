import Phaser from 'phaser';
import GameScene from "./client/scenes/GameScene"

import RaceOver from "./client/scenes/RaceOver"
import UI from "./client/scenes/UI"
import Menu from "./client/scenes/Menu"


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
    scene: [
      //Menu,
      GameScene,
      RaceOver,
      UI
    ]
};




const thisgsme = new Phaser.Game(config);





// Needed for Hot Module Replacement
if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}