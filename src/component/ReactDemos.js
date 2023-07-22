import StarWars from "./react-demos/StarWars";
import { Route, Switch } from "react-router-dom";

export default function ReactDemos() {
  return (
    <div className="show-demo">
      <Switch>
        <Route path="/demos/table">
          <StarWars />
        </Route>
      </Switch>
    </div>
  );
}
