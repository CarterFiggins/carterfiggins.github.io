import "./styles/index.scss";
import Home from "./component/Home";
import Work from "./component/Work";
import DrawPage from "./component/DrawPage";
import Projects from "./component/Projects";
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
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/draw">
        <DrawPage />
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
