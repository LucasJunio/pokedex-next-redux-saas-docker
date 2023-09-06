"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonsArrayOfData } from "./service";
import PokemonEntity from "@/utils//entities/pokemon_entity/entity/PokemonEntity";

interface InitialState {
  arrayOfPokemons: PokemonEntity[];
  status: string;
}

export const findAllPokemonsArrayOfData = createAsyncThunk(
  "poke/findAllPokemonsArrayOfData ",
  async () => {
    const data: PokemonEntity[] = await getPokemonsArrayOfData();
    return data;
  }
);

const initialState: InitialState = {
  arrayOfPokemons: [],
  status: "idle",
};

const pokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllPokemonsArrayOfData.pending, (state: any) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(
        findAllPokemonsArrayOfData.fulfilled,
        (state: any, action: any) => {
          return (state = {
            ...state,
            status: "completed",
            arrayOfPokemons: action.payload,
          });
        }
      )
      .addCase(
        findAllPokemonsArrayOfData.rejected,
        (state: any, action: any) => {
          if (action.error?.code === "ECONNABORTED") {
            return (state = { ...state });
          }
          return (state = {
            ...state,
            status: "failed",
            message: action.payload?.message,
          });
        }
      );
  },
});

export default pokemon.reducer;
