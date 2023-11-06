export interface Sprites {
  frontDefault: string;
}

export interface TypeDetail {
  name: string;
  url: string;
}

export interface PokeType {
  slot: number;
  type: TypeDetail;
}

export interface PokeDetail {
  id: number;
  name: string;
  sprites: Sprites;
  types: PokeType[];
}
