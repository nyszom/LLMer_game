// TODO: Replace this local interface with an imported RuntimeComponent type when it is added.
export interface RuntimeComponent {
  readonly kind: string;
}

export class GameEntity {
  public readonly id: string;
  public readonly kind: string;
  public readonly components: RuntimeComponent[];

  public constructor(id: string, kind: string) {
    this.id = id;
    this.kind = kind;
    this.components = [];
  }

  public addComponent(component: RuntimeComponent): void {
    this.components.push(component);
  }

  public getComponents(): RuntimeComponent[] {
    return this.components;
  }
}
