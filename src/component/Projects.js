import DisplayProject from "./DisplayProject";
import { projects } from "../util/projectInfo";

export default function Projects() {
  return (
    <>
      <div className="content-column">
        <h1 className="padding-bot content-title">Projects</h1>
        <div className="flip">
          {projects.map((project) => (
            <DisplayProject
              key={project.title}
              title={project.title}
              imgSrc={project.imgSrc}
              description={project.description}
              codeLink={project.codeLink}
              siteLink={project.siteLink}
              needsZoom={project.needsZoom}
            />
          ))}
        </div>
      </div>
    </>
  );
}
