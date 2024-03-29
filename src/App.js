import "./styles/index.scss";
import AboutMe from "./component/AboutMe";
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
        <Route path="/about-me">
          <AboutMe />
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
          <Redirect to={"/about-me"} />
        </Route>
      </Switch>
    </div>
  );
}
