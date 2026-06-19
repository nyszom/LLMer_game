import type { EntityDefinition } from './EntityDefinition';

export interface LevelMapDefinition {
  id: string;
  width: number;
  height: number;
  tileWidth?: number;
  tileHeight?: number;
  visualAssetId?: string;
}

export interface LevelPoint {
  x: number;
  y: number;
}

export interface LevelZone {
  id: string;
  name?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tags?: string[];
}

export interface LevelMarker {
  id: string;
  kind: string;
  x: number;
  y: number;
  tags?: string[];
}

export interface PlacementSlot {
  id: string;
  kind: string;
  x: number;
  y: number;
  tags?: string[];
  entityId?: string;
}

export interface CollisionArea {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tags?: string[];
}

export interface LevelDefinition {
  id: string;
  name: string;
  map: LevelMapDefinition;
  playerSpawn: LevelPoint;
  zones: LevelZone[];
  markers: LevelMarker[];
  placementSlots: PlacementSlot[];
  collisionAreas: CollisionArea[];
  entities: EntityDefinition[];
}
