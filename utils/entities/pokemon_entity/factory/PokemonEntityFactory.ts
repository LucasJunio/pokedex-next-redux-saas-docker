import { UnpatchedPokemonArrayOfTypes } from "@/types/pokemon/UnpatchedPokemonArrayOfTypes";
import PokemonEntity from "../entity/PokemonEntity";
import capitalizeFirstLetterOfTheString from "@/utils/formatters/pokemon/capitalizeFirstLetterOfTheString";
import generatePokemonTypeArray from "@/utils/formatters/pokemon/generatePokemonTypeArray";

class PokemonEntityFactory {
  constructor() {}

  public getPokemonEntity(
    pokemonId: number,
    pokemonName: string,
    pokemonImage: string,
    pokemonsTypeArrayUnPatchedCameFromServer: UnpatchedPokemonArrayOfTypes
  ): PokemonEntity {
    return new PokemonEntity(
      pokemonId,
      capitalizeFirstLetterOfTheString(pokemonName),
      pokemonImage,
      generatePokemonTypeArray(pokemonsTypeArrayUnPatchedCameFromServer)
    );
  }
}

export default new PokemonEntityFactory();
