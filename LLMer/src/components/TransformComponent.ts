import type { GameContext } from '../core';
import type { GameEntity } from '../entities';
import type { RuntimeComponent } from './RuntimeComponent';

export class TransformComponent implements RuntimeComponent {
  public readonly kind = 'transform';

  private readonly initialX: number;
  private readonly initialY: number;

  public constructor(initialX: number, initialY: number) {
    this.initialX = initialX;
    this.initialY = initialY;
  }

  public onAttach(entity: GameEntity, ctx: GameContext): void {
    if (ctx.stateStore.getEntityPosition(entity.id) === undefined) {
      ctx.stateStore.setEntityPosition(entity.id, this.initialX, this.initialY);
    }
  }

  public getPosition(entity: GameEntity, ctx: GameContext): { x: number; y: number } {
    const position = ctx.stateStore.getEntityPosition(entity.id);

    if (position !== undefined) {
      return position;
    }

    ctx.stateStore.setEntityPosition(entity.id, this.initialX, this.initialY);

    return { x: this.initialX, y: this.initialY };
  }

  public setPosition(entity: GameEntity, ctx: GameContext, x: number, y: number): void {
    ctx.stateStore.setEntityPosition(entity.id, x, y);
  }
}
