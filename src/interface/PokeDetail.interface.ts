interface Sprites {
  frontDefault: string;
}

interface TypeDetail {
  name: string;
  url: string;
}

interface PokeType {
  slot: number;
  type: TypeDetail;
}

interface PokeDetail {
  id: number;
  name: string;
  sprites: Sprites;
  types: PokeType[];
}

export type { PokeDetail, PokeType };
