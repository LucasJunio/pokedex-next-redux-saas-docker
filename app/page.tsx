import PokemonCard from "@/components/containers/PokemonCard";

export default function Home() {
  return (
    <main>
      Hello World!
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Pokemon Catalogue</h1>
          <p>Explore out pokemons you might like</p>
        </div>

        {true ? (
          <section>
            <div className="home__cars-wrapper">
              <PokemonCard />
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
