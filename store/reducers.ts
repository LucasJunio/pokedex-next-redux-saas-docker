"use client";
import { combineReducers } from "redux";

import pokemonReducer from "./ducks/Pokemon";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default rootReducer;
