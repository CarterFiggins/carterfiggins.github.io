export default function DisplayProject(props) {
  const { flipped, imgSrc, title, description, codeLink, siteLink } = props;

  const picture = () => {
    return (
      imgSrc && (
        <div className="project-center">
          <img className="project-img" alt={title} src={imgSrc} />
        </div>
      )
    );
  };

  const info = () => {
    return (
      <div className={`project-info ${flipped && "project-right"}`}>
        <div className="project-title">{title}</div>
        <div className="project-description">{description}</div>
        <div>
          {siteLink && (
            <a href={siteLink} target="_blank" rel="noopener noreferrer">
              View App{" "}
            </a>
          )}
        </div>
        <div>
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="project">
      {flipped ? picture() : info()}
      {flipped ? info() : picture()}
    </div>
  );
}
