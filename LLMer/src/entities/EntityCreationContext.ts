import type { GameContext } from '../core';
import type { EntityDefinition } from '../types';

export interface EntityCreationContext {
  definition: EntityDefinition;
  gameContext: GameContext;
}
