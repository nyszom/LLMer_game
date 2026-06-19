import Phaser from 'phaser';
import { GameScene } from './scenes/GameScene';
import './style.css';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,

  width: 1280,
  height: 720,

  backgroundColor: '#222222',

  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },

  scene: [
    GameScene
  ]
};

new Phaser.Game(config);