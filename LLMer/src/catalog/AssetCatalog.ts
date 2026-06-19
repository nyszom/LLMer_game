export type AssetType = 'image' | 'spritesheet' | 'audio';

export interface AssetDefinition {
  id: string;
  type: AssetType;
  path: string;
  tags: string[];
  defaultScale: number;
}

export const ASSET_CATALOG: AssetDefinition[] = [
  {
    id: 'map_tmp_1',
    type: 'image',
    path: 'assets/maps/map_tmp_1.png',
    tags: ['map', 'debug'],
    defaultScale: 1
  },
  {
    id: 'szarak_1',
    type: 'image',
    path: 'assets/characters/szarak_1.png',
    tags: ['character', 'player', 'alien'],
    defaultScale: 0.5
  }
];

export function getAsset(id: string): AssetDefinition {
  const asset = ASSET_CATALOG.find((definition) => definition.id === id);

  if (!asset) {
    throw new Error(`Unknown asset id: ${id}`);
  }

  return asset;
}
