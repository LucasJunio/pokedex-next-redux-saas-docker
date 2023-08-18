"use client";
import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./ducks/Pokemon";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispach;
