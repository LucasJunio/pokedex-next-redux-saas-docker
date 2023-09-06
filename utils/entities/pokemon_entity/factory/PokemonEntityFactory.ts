import { UnpatchedPokemonArrayOfTypes } from "@/types/pokemon/UnpatchedPokemonArrayOfTypes";
import PokemonEntity from "../entity/PokemonEntity";
import capitalizeFirstLetterOfTheString from "@/utils/formatters/pokemon/capitalizeFirstLetterOfTheString";
import generatePokemonTypeArray from "@/utils/formatters/pokemon/generatePokemonTypeArray";
import { UnpatchedPokemonArrayOfFlavorTextEntries } from "@/types/pokemon/UnpatchedPokemonArrayOfFlavorTextEntries";
import generatePokemonDescription from "@/utils/formatters/pokemon/generatePokemonDescription";
import generatePokemonCategory from "@/utils/formatters/pokemon/generatePokemonCategory";
import { UnpatchedPokemonArrayOfGenera } from "@/types/pokemon/UnpatchedPokemonArrayOfGenera";

class PokemonEntityFactory {
  constructor() {}

  public getPokemonEntity(
    pokemonId: number,
    pokemonName: string,
    pokemonImage: string,
    pokemonsTypeArrayUnPatchedCameFromServer: UnpatchedPokemonArrayOfTypes,
    pokemonsFlavorTextEntriesUnPatchedCameFromServer: UnpatchedPokemonArrayOfFlavorTextEntries,
    genderRatio: number,
    pokemonsGeneraUnPatchedCameFromServer: UnpatchedPokemonArrayOfGenera
  ): PokemonEntity {
    return new PokemonEntity(
      pokemonId,
      capitalizeFirstLetterOfTheString(pokemonName),
      pokemonImage,
      generatePokemonTypeArray(pokemonsTypeArrayUnPatchedCameFromServer),
      generatePokemonDescription(
        pokemonsFlavorTextEntriesUnPatchedCameFromServer
      ),
      genderRatio,
      generatePokemonCategory(pokemonsGeneraUnPatchedCameFromServer)
    );
  }
}

export default new PokemonEntityFactory();
