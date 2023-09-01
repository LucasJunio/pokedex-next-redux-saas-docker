"use client";
import { findPokemonsArrayOfData } from "@/store/ducks/Pokemon";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const pokemonDetails = () => {
  const { arrayOfPokemons } = useSelector((state) => {
    return state.pokemon;
  });

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(findPokemonsArrayOfData());
  }, []);

  return (
    <div>
      pokemon details
      {/* pokemonDetails {` result: ` + JSON.stringify(arrayOfPokemons[24])} */}
      {/* <div>
        <h1>Id: {JSON.stringify(arrayOfPokemons[24]?.pokemonId)}</h1>
      </div>
      <div>
        <h1>Name {JSON.stringify(arrayOfPokemons[24]?.pokemonName)}</h1>
      </div>
      <div>
        <h1>Minha Imagem</h1>
        <img
          src={arrayOfPokemons[24]?.pokemonImage || ""}
          alt="Descrição da imagem"
        />
      </div>
      <div>
        <h1>Descrição: {JSON.stringify(arrayOfPokemons[24]?.pokemonId)}</h1>
      </div> */}
    </div>
  );
};

export default pokemonDetails;
