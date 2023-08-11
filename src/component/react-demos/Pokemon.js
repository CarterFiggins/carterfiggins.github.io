import { useState, useEffect, useMemo } from "react";
import _ from "lodash";
import Loader from "../common/Loader";
import PageButtons from "./PageButtons";

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const [urlPage, setUrlPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=61")
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const url = search ? "https://pokeapi.co/api/v2/pokemon?limit=10000" : urlPage
    setLoading(true)
    async function fetchPokemonData() {
      const response = await fetch(url);
      const data = await response.json();
      setNextPage(data.next)
      setPrevPage(data.previous)
      const allData = await Promise.all(data.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url)
        const pokemonData = await pokemonResponse.json();
        return pokemonData
      }))

      if (search) {
        setPokemonData(_.filter(allData, (p) => p.name.includes(search.toLowerCase())))
      } else {
        setPokemonData(allData)
      }

      setLoading(false)
    }

    fetchPokemonData()
  }, [urlPage, search]);

  const filterPokemon = (e) => {
    setSearch(e.target.value)
  }

  const debouncedResults = useMemo(() => {
    return _.debounce(filterPokemon, 1000);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  console.log(pokemonData)

  return (
    <div>
      <div className="content-column">
          <h1 className="content-title">PokéAPI</h1>
      </div>
      <PageButtons setPage={setUrlPage} nextPage={nextPage} prevPage={prevPage} />
      <div className="pokemon-search">
        <input type="text" placeholder="Pokémon Search" onChange={debouncedResults} />
      </div>
      {loading && <Loader />}
      <div className="pokemon-container">
        {!loading && pokemonData?.map((pokemon) => {
          return (
            <div key={pokemon.id} className="pokemon-item">
              <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
              <div className="pokemon-info">
                <div className="title">{pokemon.name}</div>
                <div>Weight: {pokemon.weight}</div>
                <div>Height: {pokemon.height}</div>
                <div>Base Experience: {pokemon.base_experience}</div>
                <div>Types:</div>
                {pokemon.types.map((type) => (
                  <li>{type.type.name}</li>
                ))}
                <div>Abilities:</div>
                {pokemon.abilities.map((ability) => (
                  <li>{ability.ability.name}</li>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      {!loading && <PageButtons setPage={setUrlPage} nextPage={nextPage} prevPage={prevPage} />}
    </div>
  );
}
