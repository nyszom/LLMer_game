import type { GameEntity, RuntimeComponent } from '../entities';
import type { GameContext } from './GameContext';

type RuntimeUpdatableComponent = RuntimeComponent & {
  update?: (ctx: GameContext, delta: number) => void;
};

type RuntimeDestroyableComponent = RuntimeComponent & {
  onDestroy?: (ctx: GameContext) => void;
};

export class EntityManager {
  private readonly entities: Map<string, GameEntity>;

  public constructor() {
    this.entities = new Map<string, GameEntity>();
  }

  public add(entity: GameEntity): void {
    if (this.entities.has(entity.id)) {
      throw new Error(`Entity with id "${entity.id}" already exists.`);
    }

    this.entities.set(entity.id, entity);
  }

  public get(id: string): GameEntity | undefined {
    return this.entities.get(id);
  }

  public remove(id: string, ctx: GameContext): void {
    const entity = this.entities.get(id);

    if (entity === undefined) {
      return;
    }

    for (const component of entity.getComponents() as RuntimeDestroyableComponent[]) {
      component.onDestroy?.(ctx);
    }

    this.entities.delete(id);
  }

  public getAll(): GameEntity[] {
    return Array.from(this.entities.values());
  }

  public update(ctx: GameContext, delta: number): void {
    for (const entity of this.entities.values()) {
      for (const component of entity.getComponents() as RuntimeUpdatableComponent[]) {
        component.update?.(ctx, delta);
      }
    }
  }
}
