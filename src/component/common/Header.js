import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const inDemos = location.pathname.includes("demo");

  return (
    <div className="header">
      <NavLink activeClassName="is-active" to="/home">
        <Logo />
      </NavLink>
      <div className="nav-bar">
        <NavLink className="header-link" activeClassName="is-active" to="/home">
          Home
        </NavLink>
        <Menu
          buttonName="React Demos"
          menuClass={`header-link ${inDemos && "is-active"}`}
        >
          <li>
            <Link to="/demos">Star Wars API</Link>
          </li>
          <li>
            <Link to="/demos">Star Wars API</Link>
          </li>
        </Menu>
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
