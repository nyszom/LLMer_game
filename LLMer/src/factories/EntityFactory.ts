import { GameEntity } from '../entities';
import type { EntityDefinition } from '../types';
import type { ComponentFactory } from './ComponentFactory';

export class EntityFactory {
  private readonly componentFactory: ComponentFactory;

  public constructor(componentFactory: ComponentFactory) {
    this.componentFactory = componentFactory;
  }

  public create(definition: EntityDefinition): GameEntity {
    const entity = new GameEntity(definition.id, definition.kind);

    for (const componentDefinition of definition.components) {
      entity.addComponent(this.componentFactory.create(componentDefinition));
    }

    return entity;
  }
}
