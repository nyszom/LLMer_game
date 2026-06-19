import type { GameContext } from '../core';
import type { GameEntity } from '../entities';

export interface RuntimeComponent {
  readonly kind: string;
  onAttach?(entity: GameEntity, ctx: GameContext): void;
  update?(entity: GameEntity, ctx: GameContext, delta: number): void;
  onDestroy?(entity: GameEntity, ctx: GameContext): void;
}
