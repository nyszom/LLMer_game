import type { LevelDefinition } from '../../types';

export const candle_factory_01: LevelDefinition = {
  id: 'candle_factory_01',
  name: 'Candle Factory 01',
  map: {
    id: 'candle_factory_01_map',
    width: 3000,
    height: 2000,
    visualAssetId: 'map_tmp_1',
  },
  playerSpawn: {
    x: 1500,
    y: 1000,
  },
  zones: [
    {
      id: 'production_area',
      name: 'Production Area',
      x: 900,
      y: 500,
      width: 1200,
      height: 800,
      tags: ['production'],
    },
    {
      id: 'storage_area',
      name: 'Storage Area',
      x: 250,
      y: 500,
      width: 500,
      height: 800,
      tags: ['storage', 'materials'],
    },
    {
      id: 'customer_area',
      name: 'Customer Area',
      x: 2250,
      y: 500,
      width: 500,
      height: 800,
      tags: ['customer', 'sales'],
    },
  ],
  markers: [
    {
      id: 'material_drop',
      kind: 'dropoff',
      x: 500,
      y: 1000,
      tags: ['materials', 'storage'],
    },
    {
      id: 'sales_counter',
      kind: 'counter',
      x: 2350,
      y: 1000,
      tags: ['sales', 'customer'],
    },
    {
      id: 'customer_spawn',
      kind: 'spawn',
      x: 2700,
      y: 1000,
      tags: ['customer'],
    },
  ],
  placementSlots: [
    {
      id: 'workstation_slot_01',
      kind: 'workstation',
      x: 1200,
      y: 850,
      tags: ['production', 'workstation'],
    },
    {
      id: 'workstation_slot_02',
      kind: 'workstation',
      x: 1800,
      y: 850,
      tags: ['production', 'workstation'],
    },
  ],
  collisionAreas: [],
  entities: [],
};
