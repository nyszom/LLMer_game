export interface EntityStatePosition {
  x: number;
  y: number;
}

export interface EntityState {
  id: string;
  values: Record<string, unknown>;
  position?: EntityStatePosition;
}
