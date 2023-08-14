import { useState, useEffect, useMemo } from "react";
import _ from "lodash";
import Loader from "../common/Loader";
import PageButtons from "./PageButtons";

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [urlPage, setUrlPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=61")
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true)
    async function fetchPokemonData() {
      const { data, allData } = await fetchPoke(urlPage);
      setNextPage(data.next);
      setPrevPage(data.previous);
      setPokemonData(allData);
      setLoading(false);
    }

    fetchPokemonData();
  }, [urlPage]);

  useEffect(() => {
    if (!searchData) {
      async function fetchPokemonData() {
        const { allData } = await fetchPoke("https://pokeapi.co/api/v2/pokemon?limit=10000");
        setSearchData(allData)
      }
      fetchPokemonData();
    }
  },[])

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

  const searchPokemon = () => {
    return _.filter(searchData, (p) => p.name.includes(search.toLowerCase()))
  }

  const pokemonResults = search ? searchPokemon() : pokemonData

  return (
    <div>
      <div className="content-column">
          <h1 className="content-title">PokéAPI</h1>
      </div>
      <PageButtons setPage={setUrlPage} nextPage={nextPage} prevPage={prevPage} disabled={search} />
      <div className="pokemon-search">
        <input type="text" placeholder="Pokémon Search" onChange={debouncedResults} />
      </div>
      {loading && <Loader />}
      <div className="pokemon-container">
        {!loading && pokemonResults?.map((pokemon) => {
          return (
            <div key={pokemon.id} className="pokemon-item">
              <img src={pokemon.sprites.other["official-artwork"].front_default}></img>
              <div className="pokemon-info">
                <div className="title">{pokemon.name}</div>
                <div>ID: {pokemon.id}</div>
                <div>Weight: {pokemon.weight}</div>
                <div>Height: {pokemon.height}</div>
                <div>Base Experience: {pokemon.base_experience}</div>
                <div>Types:</div>
                {pokemon?.types.map((type) => (
                  <li key={`${pokemon.id}-${type.slot}`}>{type.type.name}</li>
                ))}
                <div>Abilities:</div>
                {pokemon?.abilities.map((ability) => (
                  <li key={`${pokemon.id}-${ability.slot}`}>{ability.ability.name}</li>
                ))}
              </div>
            </div>
          )
        })}
        {pokemonResults?.length === 0 && <div>No Pokémon found</div>}
      </div>
      {!loading && <PageButtons setPage={setUrlPage} nextPage={nextPage} prevPage={prevPage} disabled={search} />}
    </div>
  );
}

async function fetchPoke(url) {
  const response = await fetch(url);
  const data = await response.json();
  const allData = await Promise.all(data.results.map(async (pokemon) => {
    const pokemonResponse = await fetch(pokemon.url)
    const pokemonData = await pokemonResponse.json();
    return pokemonData
  }))

  return { data, allData }
}
