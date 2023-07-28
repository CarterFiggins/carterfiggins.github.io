import "./styles/index.scss";
import Home from "./component/Home";
import ReactDemos from "./component/ReactDemos";
import DrawPage from "./component/DrawPage";
import Projects from "./component/Projects";
import Learn from "./component/Learn";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./component/common/Header";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/demos">
          <ReactDemos />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/draw">
          <DrawPage />
        </Route>
        <Route path="/">
          <Redirect to={"/projects"} />
        </Route>
      </Switch>
    </div>
  );
}
