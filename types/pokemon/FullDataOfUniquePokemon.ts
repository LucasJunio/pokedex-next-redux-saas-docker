export type FullDataOfUniquePokemon = {
  id: number;
  forms: Array<{ name: string }>;
  types: Array<{ type: { name: string } }>;
  sprites: {
    versions: {
      "generation-v": {
        "black-white": { animated: { front_default: string } };
      };
    };
  };
};
