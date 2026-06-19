import type Phaser from 'phaser';
import type { GameState } from '../types';

export interface GameContext {
  scene: Phaser.Scene;
  gameState: GameState;

  // TODO: Add runtime entity manager when entity runtime is introduced.
  entityManager?: unknown;

  // TODO: Add event bus when runtime event flow is introduced.
  eventBus?: unknown;

  // TODO: Add asset catalog reference when runtime asset access is introduced.
  assetCatalog?: unknown;
}
