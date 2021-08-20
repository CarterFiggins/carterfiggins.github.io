export default function Projects() {
  return (
    <div>
      <div className="content-column">
        <h1 className="content-title">Projects</h1>
        {/* <p className="content-subtitle">What I have done</p> */}
        <div className="completed-projects">
          <ul>
            <li>Baby Camera</li>
            <li>Bingo Caller</li>
            <li>Appliance Stock</li>
          </ul>
        </div>
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
