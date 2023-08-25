import capitalizeFirstLetterOfString from "./capitalizeFirstLetterOfTheString";

function generatePokemonTypeArray(
  pokemonsTypeArrayUnPatchedCameFromServer: Array<{ type: { name: string } }>
): Array<string> {
  const arrayOfPokemonTypes: Array<string> = [];

  pokemonsTypeArrayUnPatchedCameFromServer.forEach((typeItem) => {
    arrayOfPokemonTypes.push(capitalizeFirstLetterOfString(typeItem.type.name));
  });

  return arrayOfPokemonTypes;
}

export default generatePokemonTypeArray;
