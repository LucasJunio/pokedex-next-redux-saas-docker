"use client";
import { findPokemonsArrayOfData } from "@/store/ducks/Pokemon";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const TestContainer = () => {
  const { arrayOfPokemons } = useSelector((state) => {
    return state.pokemon;
  });

  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(findPokemonsArrayOfData());
  }, []);

  return (
    <div>
      TestContainer{" "}
      {` result: ` + JSON.stringify(arrayOfPokemons[0]?.pokemonName)}
    </div>
  );
};

export default TestContainer;
