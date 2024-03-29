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
           {/* The Starwars API has been taken down. :( */}
          {/* <li>
            <Link to="/demos/star-wars">Star Wars</Link>
          </li> */}
          <li>
            <Link to="/demos/harry">Harry Potter</Link>
          </li>
          <li>
            <Link to="/demos/pokemon">Pokémon</Link>
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
        <a href="https://www.linkedin.com/in/carter-figgins-064642139/" target="_blank" className="header-logo-link">
          <img src="/images/In-White.png" className="sm-logo" />
        </a>
        <a href="https://discord.gg/NcZU9bQhJZ" target="_blank" className="header-logo-link discord-logo">
          <img src="/images/discord-mark-white.png" className="sm-logo" />
        </a>
        <a href="https://github.com/CarterFiggins" target="_blank" className="header-logo-link">
          <img src="/images/github-mark-white.png" className="sm-logo" />
        </a>
      </div>
    </div>
  );
}
