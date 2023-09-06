"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findAllPokemonsArrayOfData } from "@/store/ducks/Pokemon";

const pokemonDetails = ({ params }: { params: { pokemonId: string } }) => {
  const { arrayOfPokemons } = useSelector((state) => {
    return state.pokemon;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(findAllPokemonsArrayOfData());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Pokemon Details</h1>
        {arrayOfPokemons.map((p) => {
          if (p.pokemonId === parseInt(params.pokemonId)) {
            return (
              <div key={p.pokemonId}>
                <img src={p.pokemonImage} alt={p.pokemonName} />
                <p>Pokemon ID: {p.pokemonId}</p>
                <p>Pokemon Name: {p.pokemonName}</p>
                <p>Types: {p.pokemonTypes.join(", ")}</p>
                <p>Pokemon Description: {p.pokemonDescription}</p>
                <p>Pokemon Category: {p.pokemonCategory}</p>
                <p>Pokemon Gender: {p.pokemonGenderRatio}</p>
                <p>Pokemon Height: </p>
                <p>Pokemon Weight: </p>
                <p>Pokemon Abilities: </p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
};

export default pokemonDetails;
