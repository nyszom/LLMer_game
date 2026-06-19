import type { EntityState, GameState } from '../types';

export class GameStateStore {
  private readonly gameState: GameState;

  public constructor(gameState: GameState) {
    this.gameState = gameState;
  }

  public getGameState(): GameState {
    return this.gameState;
  }

  public getEntityState(entityId: string): EntityState | undefined {
    return this.gameState.levelState.entityStates.find((entityState) => entityState.id === entityId);
  }

  public ensureEntityState(entityId: string): EntityState {
    const existingEntityState = this.getEntityState(entityId);

    if (existingEntityState !== undefined) {
      return existingEntityState;
    }

    const entityState: EntityState = {
      id: entityId,
      values: {},
    };

    this.gameState.levelState.entityStates.push(entityState);

    return entityState;
  }

  public getEntityPosition(entityId: string): { x: number; y: number } | undefined {
    const entityState = this.getEntityState(entityId);

    return entityState?.position;
  }

  public setEntityPosition(entityId: string, x: number, y: number): void {
    const entityState = this.ensureEntityState(entityId);

    entityState.position = { x, y };
  }

  public getEntityValue<T = unknown>(entityId: string, key: string): T | undefined {
    const entityState = this.getEntityState(entityId);

    return entityState?.values[key] as T | undefined;
  }

  public setEntityValue(entityId: string, key: string, value: unknown): void {
    const entityState = this.ensureEntityState(entityId);

    entityState.values[key] = value;
  }
}
