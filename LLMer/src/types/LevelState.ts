import type { EntityState } from './EntityState';
import type { InventoryState } from './InventoryState';

export interface LevelState {
  levelId: string;
  entityStates: EntityState[];
  inventory: InventoryState[];
  runtimeFlags: Record<string, unknown>;
}
