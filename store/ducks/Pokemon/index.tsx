import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPokemons } from "./service";

export const findAllPokemons = createAsyncThunk(
  "poke/findAllPokemons",
  async () => {
    const { data } = await getAllPokemons();
    return data;
  }
);

const initialState = {
  data: null,
  status: "idle",
};

const poke = createSlice({
  name: "poke",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findAllPokemons.pending, (state: any) => {
        return (state = { ...state, status: "loading" });
      })
      .addCase(findAllPokemons.fulfilled, (state: any, action: any) => {
        return (state = {
          ...state,
          status: "completed",
          data: action.payload?.data,
        });
      })
      .addCase(findAllPokemons.rejected, (state: any, action: any) => {
        if (action.error?.code === "ECONNABORTED") {
          return (state = { ...state });
        }
        return (state = {
          ...state,
          status: "failed",
          message: action.payload?.message,
        });
      });
  },
});

export default poke.reducer;
