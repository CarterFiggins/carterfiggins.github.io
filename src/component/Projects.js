import DisplayProject from "./DisplayProject";

export default function Projects() {
  const projects = [
    {
      title: "Baby Camera",
      imgSrc: "https://cdn-shop.adafruit.com/categories/105/image(1).png",
      description: "Keep track of baby with video",
      codeLink: "https://github.com/CarterFiggins/Baby_Monitor",
      // siteLink: "",
    },
    {
      title: "Bingo Caller",
      imgSrc: "/images/bingo.png",
      description: "Bingo number generator",
      codeLink: "https://github.com/CarterFiggins/bingo-caller",
      siteLink: "https://high-stakes-bingo.herokuapp.com/",
    },
    {
      title: "Spotify Silencer",
      imgSrc: "",
      description: "",
      codeLink: "",
      siteLink: "",
    },
    {
      title: "Spotify Silencer",
      imgSrc: "",
      description: "",
      codeLink: "",
      siteLink: "",
    },
  ];

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
