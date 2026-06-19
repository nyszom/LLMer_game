import Phaser from 'phaser';
import { ASSET_CATALOG, getAsset } from '../catalog/AssetCatalog';

export class GameScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;

  private keys!: Record<
    'up' | 'down' | 'left' | 'right',
    Phaser.Input.Keyboard.Key
  >;

  private readonly mapWidth = 3000;
  private readonly mapHeight = 2000;

  constructor() {
    super('GameScene');
  }

  preload() {
    ASSET_CATALOG.forEach((asset) => {
      if (asset.type === 'image') {
        this.load.image(asset.id, asset.path);
      }
    });
  }

  create() {
    this.add.image(0, 0, 'map_tmp_1')
      .setOrigin(0);

    this.physics.world.setBounds(
      0,
      0,
      this.mapWidth,
      this.mapHeight
    );

    this.player = this.physics.add.sprite(
      this.mapWidth / 2,
      this.mapHeight / 2,
      'szarak_1'
    );

    this.player.setScale(getAsset('szarak_1').defaultScale);
    this.player.setCollideWorldBounds(true);

    this.cameras.main.setBounds(
      0,
      0,
      this.mapWidth,
      this.mapHeight
    );

    this.cameras.main.startFollow(this.player);

    this.keys = this.input.keyboard?.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D
    }) as Record<
      'up' | 'down' | 'left' | 'right',
      Phaser.Input.Keyboard.Key
    >;
  }

  update() {
    const speed = 300;

    this.player.setVelocity(0);

    if (this.keys.left.isDown) {
      this.player.setVelocityX(-speed);
    }

    if (this.keys.right.isDown) {
      this.player.setVelocityX(speed);
    }

    if (this.keys.up.isDown) {
      this.player.setVelocityY(-speed);
    }

    if (this.keys.down.isDown) {
      this.player.setVelocityY(speed);
    }
  }
}