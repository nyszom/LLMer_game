export type ComponentDefinition<TData extends Record<string, unknown> = Record<string, unknown>> = {
  kind: string;
} & Omit<TData, 'kind'>;
