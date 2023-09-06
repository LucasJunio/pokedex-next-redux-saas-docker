class PokemonEntity {
  public pokemonId: number;

  public pokemonName: string;

  public pokemonImage: string;

  public pokemonTypes: Array<string>;

  public pokemonDescription: string;

  public pokemonGenderRatio: number;

  public pokemonCategory: string;

  public constructor(
    pokemonId: number,
    pokemonName: string,
    pokemonImage: string,
    pokemonTypes: Array<string>,
    description: string,
    genderRatio: number,
    category: string
  ) {
    this.pokemonId = pokemonId;
    this.pokemonName = pokemonName;
    this.pokemonImage = pokemonImage;
    this.pokemonTypes = pokemonTypes;

    this.pokemonDescription = description;
    this.pokemonGenderRatio = genderRatio;
    this.pokemonCategory = category;
  }
}

export default PokemonEntity;
