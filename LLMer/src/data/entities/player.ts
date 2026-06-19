import type { EntityDefinition } from '../../types';

export const PLAYER_ENTITY: EntityDefinition = {
  id: 'player',
  kind: 'player',
  source: 'core',
  components: [
    {
      kind: 'transform',
      x: 1500,
      y: 1000,
    },
    {
      kind: 'visual',
      assetId: 'szarak_1',
      layer: 'character',
    },
    {
      kind: 'physicsBody',
    },
  ],
};
