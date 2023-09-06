"use client";
import { findAllPokemonsArrayOfData } from "@/store/ducks/Pokemon";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const TestContainer = () => {
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
    <div>
      TestContainer{" "}
      {arrayOfPokemons.map((p) => {
        return p.pokemonName;
      })}{" "}
    </div>
  );
};

export default TestContainer;
