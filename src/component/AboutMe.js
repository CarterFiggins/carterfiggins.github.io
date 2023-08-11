import StarWarsIntro from "./introductions/StarWarsIntro";
import PokemonIntro from "./introductions/PokemonIntro";
import { useState } from "react";

export default function AboutMe() {

  const [world, setWorld] = useState(StarWarsIntro)

  const worldChange = (selectedWorld) => {
    if (selectedWorld.target.value === "star-wars") {
      setWorld(StarWarsIntro)
    } else if (selectedWorld.target.value === "pokemon") {
      setWorld(PokemonIntro)
    }
  }



  return (
    <div className="content-column">
      <div className="about-me-title">
        <h1 className="content-title">Carter Figgins</h1>
        <p className="content-subtitle">The Computing Fig</p>
        <p className="content-subtitle-sm">Hello, welcome to my website!</p>
      </div>
      <select className="world-select" name="worlds" id="worlds" onChange={worldChange}>
        <option value="star-wars">Star Wars</option>
        <option value="pokemon">Pokémon</option>
      </select>
      {world}
      <div className="content-body about-me-footer">
        <p className="fade-in">*Image and text enhanced by AI</p>
      </div>
    </div>
  );
}
