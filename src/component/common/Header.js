import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <div className="nav-bar">
        <NavLink className="header-link" activeClassName="is-active" to="/home">
          Home
        </NavLink>
        <NavLink className="header-link" activeClassName="is-active" to="/work">
          React Work
        </NavLink>
        <NavLink
          className="header-link"
          activeClassName="is-active"
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink className="header-link" activeClassName="is-active" to="/draw">
          Recursive Art
        </NavLink>
        <NavLink
          className="header-link"
          activeClassName="is-active"
          to="/learn"
        >
          Code Learning
        </NavLink>
      </div>
    </div>
  );
}
