export default function DisplayProject(props) {
  const { imgSrc, title, description, codeLink, siteLink, needsZoom } = props;

  const viewApp = (e) => {
    e.preventDefault();
    if (siteLink) {
      window.open(siteLink);
    } else if (codeLink) {
      window.open(codeLink);
    }
  };

  const picture = () => {
    return (
      imgSrc && (
        <div className="project-center" onClick={viewApp}>
          <img className={`project-img ${needsZoom ? "zoom" : ""}`} alt={title} src={imgSrc} />
        </div>
      )
    );
  };

  const info = () => {
    return (
      <div className="project-info">
        <div className="project-title">{title}</div>
        <div className="project-description">{description}</div>
        <div>
          {siteLink && (
            <div className="project-link">
              <a href={siteLink} target="_blank" rel="noopener noreferrer">
                View {title}
              </a>
            </div>
          )}
          {codeLink && (
            <div className="project-link">
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                View Source Code
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="project">
      {picture()}
      {info()}
    </div>
  );
}
