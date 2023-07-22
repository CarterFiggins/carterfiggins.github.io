import DisplayProject from "./DisplayProject";
import { projects } from "../util/projectInfo";

export default function Projects() {
  return (
    <>
      <div className="content-column">
        <h1 className="padding-bot content-title">Projects</h1>
        {/* <p className="content-subtitle">What I have done</p> */}
        {projects.map((project, num) => (
          <DisplayProject
            key={num}
            flipped={num % 2 === 0}
            title={project.title}
            imgSrc={project.imgSrc}
            description={project.description}
            codeLink={project.codeLink}
            siteLink={project.siteLink}
          />
        ))}
      </div>
    </>
  );
}
