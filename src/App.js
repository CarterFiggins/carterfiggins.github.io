import "./App.css";
import Home from "./component/Home";
import Draw from "./component/Draw";
import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/draw">
        <Draw />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
