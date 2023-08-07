import { useState, useEffect } from "react";
import Loader from "../common/Loader";

export default function StarWars() {
  const [harryPotterData, setHarryPotterData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => {
        setHarryPotterData(data);
        setLoading(false)
      });
  }, []);

  return (
    <div>
      <div className="content-column">
          <h1 className="content-title">Harry Potter API</h1>
      </div>
      {loading && <Loader />}
      <div className="harry-potter-list">
        {harryPotterData?.length && harryPotterData.map((character) => {
          const imageSrc = character.image ? character.image : character.gender === "male" ? "/images/wizard.png" : "/images/witch.png"
          return (
            <div className="harry-potter-item">
              <img src={imageSrc} className="harry-image" />
              <div className="item-info">
                <h2>{character.name}</h2>
                <div><b>Alive:</b> {character.alive ? "Yes" : "No"}</div>
                <div><b>House:</b> {character.house}</div>
                {character.wand.wood && <div><b>Wand:</b> {character.wand.wood} {character.wand.core} {character.wand.length}</div>}
                <div><b>Patronus:</b> {character.patronus}</div>
                {character.ancestry && <div><b>Ancestry:</b> {character.ancestry}</div>}
                <div><b>Gender:</b> {character.gender}</div>
                <div><b>Species:</b> {character.species}</div>
                <div><b>Eye Color:</b> {character.eyeColour}</div>
                <div><b>Hair Color:</b> {character.hairColour}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
