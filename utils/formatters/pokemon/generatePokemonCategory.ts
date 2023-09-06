import { EMPTY_STRING } from "@/constants/emptyStringConstant";
import { STANDARD_LANGUAGE } from "@/constants/standardLanguageConstant";
import { UnpatchedPokemonArrayOfGenera } from "@/types/pokemon/UnpatchedPokemonArrayOfGenera";

function generatePokemonCategory(
  pokemonsGeneraUnPatchedCameFromServer: UnpatchedPokemonArrayOfGenera
): string {
  const entry = pokemonsGeneraUnPatchedCameFromServer.find(
    (entry) => entry.language.name === STANDARD_LANGUAGE
  );

  const pokemonCategory = entry ? entry.genus : EMPTY_STRING;

  return pokemonCategory;
}

export default generatePokemonCategory;
