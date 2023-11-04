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

export interface AbilityResponse {
  slot: number;
  ability: AbilityApi;
  is_hidden: boolean;
}

export interface StatApi {
  name: string;
  url: string;
}

export interface Bar {
  slot: number;
  isFilled: boolean;
}

export interface Stat {
  baseStat: number;
  effort: number;
  stat: StatApi;
  bars: Bar[];
}

export interface StatResponse {
  base_stat: number;
  effort: number;
  stat: StatApi;
}

export interface PokeDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: Sprites;
  abilities: Ability[];
  types: PokeType[];
  stats: Stat[];
}
