import type Phaser from 'phaser';
import type { RuntimeComponent } from './RuntimeComponent';

export class PhysicsBodyComponent implements RuntimeComponent {
  public readonly kind = 'physicsBody';
  public readonly width?: number;
  public readonly height?: number;

  private body?: Phaser.Physics.Arcade.Body;

  public constructor(width?: number, height?: number) {
    this.width = width;
    this.height = height;
  }

  public getBody(): Phaser.Physics.Arcade.Body | undefined {
    return this.body;
  }

  public setBody(body: Phaser.Physics.Arcade.Body): void {
    this.body = body;
  }

  public clearBody(): void {
    this.body = undefined;
  }
}
