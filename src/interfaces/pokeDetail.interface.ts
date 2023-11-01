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

export interface AbilityApi {
  name: string;
  url: string;
}

export interface Ability {
  slot: number;
  ability: AbilityApi;
  isHidden: boolean;
}

export interface PokeDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
  abilities: Ability[];
  types: PokeType[];
}
