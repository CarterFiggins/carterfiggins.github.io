import StarWarsIntro from "./introductions/StarWarsIntro";
import PokemonIntro from "./introductions/PokemonIntro";
import { useState } from "react";
import WizardIntro from "./introductions/WizardIntro";

export default function AboutMe() {
  const Worlds = {
    StarWars: 'starWars',
    HarryPotter: 'harryPotter',
    Pokemon: 'pokemon',
  }

  const [world, setWorld] = useState({ name: Worlds.StarWars, component: StarWarsIntro })

  return (
    <div className="content-column">
      <div className="about-me-title">
        <h1 className="content-title">Carter Figgins</h1>
        <p className="content-subtitle-sm">Hello, welcome to my website!</p>
      </div>
      <div className="world-buttons">
        <button
          className={world.name === Worlds.StarWars ? "selected" : ""}
          onClick={() => setWorld({ name: Worlds.StarWars, component: StarWarsIntro })}
        >
          Star Wars
        </button>
        <button
          className={world.name === Worlds.HarryPotter ? "selected" : ""}
          onClick={() => setWorld({ name: Worlds.HarryPotter, component: WizardIntro })}
        >
          Harry Potter
        </button>
        <button className={world.name === Worlds.Pokemon ? "selected" : ""}
          onClick={() => setWorld({ name: Worlds.Pokemon, component: PokemonIntro })}
        >
          Pokémon
        </button>
      </div>
      {world.component()}
      <p className="fade-in">*Image and text enhanced by AI</p>
    </div>
  );
}
