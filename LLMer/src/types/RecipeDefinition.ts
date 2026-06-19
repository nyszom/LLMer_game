export interface RecipeItemAmount {
  itemId: string;
  amount: number;
}

export interface RecipeDefinition {
  id: string;
  name: string;
  workstationTags: string[];
  inputs: RecipeItemAmount[];
  outputs: RecipeItemAmount[];
  durationMs: number;
}
