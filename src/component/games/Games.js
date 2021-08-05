import Header from "../common/Header";
import GameBox from "./GameBox";

export default function Games() {
  return (
    <div>
      <Header />
      <div className="games">
        <GameBox
          title="Frogger"
          discription="An arcade action Frogger game. Guide frogger across the road and over the river to his home."
          gameLink="/games/frogger"
          codeLink=""
          imgSrc="images/frogger.png"
        />
        <GameBox
          title="Frogger"
          discription="An arcade action Frogger game. Guide frogger across the road and over the river to his home."
          gameLink="/games/frogger"
          codeLink=""
          imgSrc="images/frogger.png"
        />
      </div>
    </div>
  );
}
