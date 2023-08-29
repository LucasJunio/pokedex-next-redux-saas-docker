"use client";
import axios, { AxiosResponse } from "axios";
import { ArrayOfGeneralsPokemons } from "@/types/pokemon/ArrayOfGeneralsPokemons";
import PokemonEntity from "@/utils//entities/pokemon_entity/entity/PokemonEntity";
import { FIRST_INDEX_OF_THE_ARRAY } from "@/constants/firstIndexOfTheArrayConstants";
import { FullDataOfUniquePokemon } from "@/types/pokemon/FullDataOfUniquePokemon";
import PokemonEntityFactory from "@/utils/entities/pokemon_entity/factory/PokemonEntityFactory";
import {
  GENERAL_POKEMON_ARRAY_URL,
  POKEMON_BASE_URL,
} from "@/constants/entities/pokemon/pokemonsUrlsConstants";

async function getArrayOfPokemonDataWithCompleteInformation(
  arrayOfAllPokemon: ArrayOfGeneralsPokemons
): Promise<Array<PokemonEntity>> {
  const arrayOfPokemonDataWithCompleteInformation: Array<PokemonEntity> = [];

  for (
    let i = FIRST_INDEX_OF_THE_ARRAY;
    i < arrayOfAllPokemon.results?.length;
    i++
  ) {
    const { forms, id, sprites, types } = (
      await axios.get<FullDataOfUniquePokemon>(
        POKEMON_BASE_URL + arrayOfAllPokemon.results[i].name
      )
    ).data;

    const { flavor_text_entries } = (
      await axios.get<FullDataOfUniquePokemon>(
        "https://pokeapi.co/api/v2/pokemon-species/" +
          arrayOfAllPokemon.results[i].name
      )
    ).data;

    console.log(flavor_text_entries[0].language.name === "en");

    arrayOfPokemonDataWithCompleteInformation.push(
      PokemonEntityFactory.getPokemonEntity(
        id,
        forms[FIRST_INDEX_OF_THE_ARRAY].name,
        sprites.versions["generation-v"]["black-white"].animated.front_default,
        types
      )
    );
  }

  return arrayOfPokemonDataWithCompleteInformation;
}

const getPokemonsArrayOfData = async () => {
  const generalArrayOfPokemons: AxiosResponse<ArrayOfGeneralsPokemons> =
    await axios.get(GENERAL_POKEMON_ARRAY_URL);

  const arrayOfPokemonsWithCompleteInformation: Array<PokemonEntity> =
    await getArrayOfPokemonDataWithCompleteInformation(
      generalArrayOfPokemons.data
    );

  return arrayOfPokemonsWithCompleteInformation;
};

export { getPokemonsArrayOfData };
