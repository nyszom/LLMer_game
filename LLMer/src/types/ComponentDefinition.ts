export type ComponentDefinition = {
  kind: string;
  [key: string]: unknown;
};

export type TransformComponentDefinition = ComponentDefinition & {
  kind: 'transform';
  x: number;
  y: number;
};

export type VisualComponentDefinition = ComponentDefinition & {
  kind: 'visual';
  assetId: string;
  layer?: string;
};

export type PhysicsBodyComponentDefinition = ComponentDefinition & {
  kind: 'physicsBody';
  width?: number;
  height?: number;
};

export type KnownComponentDefinition =
  | TransformComponentDefinition
  | VisualComponentDefinition
  | PhysicsBodyComponentDefinition;
