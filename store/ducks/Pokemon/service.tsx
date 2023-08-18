import { api } from "../../../services";

const getAllPokemons = async () => {
  const res = await api.get(`/pokemon`);
  return res;
};

export { getAllPokemons };
