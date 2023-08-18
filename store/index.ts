"use client";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispach;
