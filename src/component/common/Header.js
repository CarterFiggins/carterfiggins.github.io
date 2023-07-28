import { NavLink, Link } from "react-router-dom";
import Logo from "./Logo";
import Menu from "./Menu";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const inDemos = location.pathname.includes("demo");

  return (
    <div className="header">
      <NavLink activeClassName="is-active" to="/about-me">
        <Logo />
      </NavLink>
      <div className="nav-bar">
        <NavLink className="header-link" activeClassName="is-active" to="/about-me">
          About Me
        </NavLink>
        <Menu
          buttonName="API Demos"
          menuClass={`header-link ${inDemos && "is-active"}`}
        >
          <li>
            <Link to="/demos/table">Star Wars API</Link>
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
      </div>
    </div>
  );
}
