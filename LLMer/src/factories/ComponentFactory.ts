import {
  PhysicsBodyComponent,
  TransformComponent,
  VisualComponent,
  type RuntimeComponent,
} from '../components';
import type { ComponentDefinition } from '../types';

export class ComponentFactory {
  public create(definition: ComponentDefinition): RuntimeComponent {
    switch (definition.kind) {
      case 'transform':
        return this.createTransform(definition);
      case 'visual':
        return this.createVisual(definition);
      case 'physicsBody':
        return this.createPhysicsBody(definition);
      default:
        throw new Error(`Unsupported component definition kind: ${definition.kind}`);
    }
  }

  private createTransform(definition: ComponentDefinition): TransformComponent {
    const { x, y } = definition;

    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new Error('Invalid transform component definition: numeric x and y are required.');
    }

    return new TransformComponent(x, y);
  }

  private createVisual(definition: ComponentDefinition): VisualComponent {
    const { assetId, layer } = definition;

    if (typeof assetId !== 'string') {
      throw new Error('Invalid visual component definition: string assetId is required.');
    }

    if (layer !== undefined && typeof layer !== 'string') {
      throw new Error('Invalid visual component definition: layer must be a string when provided.');
    }

    return new VisualComponent(assetId, layer);
  }

  private createPhysicsBody(definition: ComponentDefinition): PhysicsBodyComponent {
    const { width, height } = definition;

    if (width !== undefined && typeof width !== 'number') {
      throw new Error('Invalid physicsBody component definition: width must be a number when provided.');
    }

    if (height !== undefined && typeof height !== 'number') {
      throw new Error('Invalid physicsBody component definition: height must be a number when provided.');
    }

    return new PhysicsBodyComponent(width, height);
  }
}
