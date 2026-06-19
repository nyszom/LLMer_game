import type { RecipeDefinition } from '../../types';

export const CANDLE_RECIPES: RecipeDefinition[] = [
  {
    id: 'melt_paraffin',
    name: 'Melt Paraffin',
    workstationTags: ['melter', 'production'],
    inputs: [{ itemId: 'paraffin', amount: 1 }],
    outputs: [{ itemId: 'melted_paraffin', amount: 1 }],
    durationMs: 2000,
  },
  {
    id: 'assemble_candle',
    name: 'Assemble Candle',
    workstationTags: ['assembly', 'production'],
    inputs: [
      { itemId: 'melted_paraffin', amount: 1 },
      { itemId: 'wick', amount: 1 },
      { itemId: 'plastic_insert', amount: 1 },
    ],
    outputs: [{ itemId: 'assembled_candle', amount: 1 }],
    durationMs: 3000,
  },
  {
    id: 'package_candle',
    name: 'Package Candle',
    workstationTags: ['packaging', 'production'],
    inputs: [
      { itemId: 'assembled_candle', amount: 1 },
      { itemId: 'packaging', amount: 1 },
    ],
    outputs: [{ itemId: 'finished_candle', amount: 1 }],
    durationMs: 1500,
  },
];
