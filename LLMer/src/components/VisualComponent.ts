import type Phaser from 'phaser';
import type { RuntimeComponent } from './RuntimeComponent';

export class VisualComponent implements RuntimeComponent {
  public readonly kind = 'visual';
  public readonly assetId: string;
  public readonly layer?: string;

  private sprite?: Phaser.GameObjects.Sprite;

  public constructor(assetId: string, layer?: string) {
    this.assetId = assetId;
    this.layer = layer;
  }

  public getSprite(): Phaser.GameObjects.Sprite | undefined {
    return this.sprite;
  }

  public setSprite(sprite: Phaser.GameObjects.Sprite): void {
    this.sprite = sprite;
  }

  public clearSprite(): void {
    this.sprite = undefined;
  }
}
