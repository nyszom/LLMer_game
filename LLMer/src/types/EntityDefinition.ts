import type { ComponentDefinition } from './ComponentDefinition';

export type EntityDefinitionSource = 'core' | 'gpt' | 'savegame' | 'debug';

export interface EntityDefinition {
  id: string;
  kind: string;
  components: ComponentDefinition[];
  source?: EntityDefinitionSource;
}
