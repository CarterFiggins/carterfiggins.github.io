import StarWars from "./react-demos/StarWars";
import HarryPotter from "./react-demos/HarryPotter";
import { Route, Switch } from "react-router-dom";

export default function ReactDemos() {
  return (
    <div className="show-demo">
      <Switch>
        <Route path="/demos/star-wars">
          <StarWars />
        </Route>
        <Route path="/demos/harry">
          <HarryPotter />
        </Route>
      </Switch>
    </div>
  );
}
