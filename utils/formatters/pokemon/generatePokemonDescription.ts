import { EMPTY_STRING } from "@/constants/emptyStringConstant";
import { STANDARD_LANGUAGE } from "@/constants/standardLanguageConstant";
import { UnpatchedPokemonArrayOfFlavorTextEntries } from "@/types/pokemon/UnpatchedPokemonArrayOfFlavorTextEntries";

function generatePokemonDescription(
  pokemonsFlavorTextEntriesArrayUnPatchedCameFromServer: UnpatchedPokemonArrayOfFlavorTextEntries
): string {
  const entry = pokemonsFlavorTextEntriesArrayUnPatchedCameFromServer.find(
    (entry) => entry.language.name === STANDARD_LANGUAGE
  );

  const pokemonDescription = entry ? entry.flavor_text : EMPTY_STRING;

  return pokemonDescription;
}

export default generatePokemonDescription;
