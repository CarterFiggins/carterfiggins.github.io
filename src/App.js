import "./styles/index.scss";
import Home from "./component/Home";
import Work from "./component/Work";
import Draw from "./component/Draw";
import Games from "./component/games/Games";
import Frogger from "./component/games/Games";
import Learn from "./component/Learn";
import { Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/draw">
        <Draw />
      </Route>
      <Route path="/games">
        <Games />
      </Route>
      <Route path="/games/frogger">
        <Frogger />
      </Route>
      <Route path="/learn">
        <Learn />
      </Route>
      <Route path="/">
        <Redirect to={"/home"} />
      </Route>
    </Switch>
  );
}
