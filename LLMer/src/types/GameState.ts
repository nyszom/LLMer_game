import type { LevelState } from './LevelState';

export interface GameState {
  currentLevelId: string;
  cash: number;
  debt: number;
  timeRemainingMs: number;
  levelState: LevelState;
}
