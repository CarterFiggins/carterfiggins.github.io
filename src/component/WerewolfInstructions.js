import StarWars from "./react-demos/StarWars";
import HarryPotter from "./react-demos/HarryPotter";
import Pokemon from "./react-demos/Pokemon";
import { Route, Switch } from "react-router-dom";

export default function WerewolfInstructions() {
  return (
    <div className="content-column">
      <div className="about-me-title">
        <h1 className="content-title">Discord Werewolf Instructions</h1>
      </div>
      <div className="content-body instructions-container">
        <div className="content-body__text instruction-text">
          The goal of Werewolf is to eliminate players on other teams, with a secondary goal to be alive at the end of the game. There are three possible teams in Werewolf: Werewolves, Vampires, and Villagers. This version of werewolf takes place in real time.  Night falls at 8 pm and dawn breaks at 8 am. During daytime hours, players that are alive may vote to hang another player. At nightfall, the player with the most votes is hanged. If there is a tie, the bot will randomly pick to hang one person from among those with the most votes.
        </div>
        <div className="content-body__text instruction-text">
          At night, the werewolves decide to target a player and try to kill and eat them. Additionally, each vampire chooses a player to target to suck blood from. Each villager takes two bites to be changed into a vampire, and the first strike of the vampire king counts as two bites. If a vampire tries to drink blood from a werewolf, they will die. Werewolves and vampires will succeed in their attacks unless blocked by the bodyguard. Vampires are unable to bite the bodyguard.
        </div>
        <div className="content-body__text instruction-text">
          Villagers win when all werewolves and vampires are dead. Werewolves and vampires win when they equal or outnumber the rest of the players. When someone dies, they will be given the dead role. They can no longer speak in channels with alive players, but they can spectate and chat with other dead people in the afterlife.
        </div>
      </div>
    </div>
  );
}
