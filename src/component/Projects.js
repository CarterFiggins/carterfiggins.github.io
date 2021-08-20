import DisplayProject from "./DisplayProject";
import { projects } from "../util/projectInfo";

export default function Projects() {
  return (
    <div>
      <div className="content-column">
        <h1 className="padding-bot content-title">Projects</h1>
        {/* <p className="content-subtitle">What I have done</p> */}
        {projects.map((project, num) => (
          <DisplayProject
            flipped={num % 2 === 0}
            title={project.title}
            imgSrc={project.imgSrc}
            description={project.description}
            codeLink={project.codeLink}
            siteLink={project.siteLink}
          />
        ))}
        <div className="planed-projects">
          <div className="planed-title">Project Ideas</div>
          <ul>
            <li>Make a simple discord bot.</li>
            <li>Wait list for a restaurant</li>
            <li>
              <a
                href="https://api.nasa.gov/index.html"
                className="link-in-list"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA api reporter
              </a>
            </li>
            <li>
              <a
                href="https://apidocs.cheapshark.com/"
                className="link-in-list"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cheap Shark deals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
