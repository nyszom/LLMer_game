import type { ItemDefinition } from '../../types';

export const CANDLE_ITEMS: ItemDefinition[] = [
  {
    id: 'paraffin',
    name: 'Paraffin',
    description: 'Raw wax material ready to be melted into candle bodies.',
    tags: ['material', 'wax', 'candle'],
  },
  {
    id: 'wick',
    name: 'Wick',
    description: 'Cotton wick used as the candle burning core.',
    tags: ['material', 'candle'],
  },
  {
    id: 'plastic_insert',
    name: 'Plastic Insert',
    description: 'Small insert used to hold the wick in place during assembly.',
    tags: ['material', 'component', 'candle'],
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Retail packaging for a completed candle.',
    tags: ['material', 'packaging'],
  },
  {
    id: 'finished_candle',
    name: 'Finished Candle',
    description: 'A completed and packaged candle ready for sale.',
    tags: ['product', 'candle', 'sellable'],
  },
];
