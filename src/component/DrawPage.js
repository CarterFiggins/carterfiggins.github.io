import Drawing from "./Drawing";

export default function DrawPage() {
  const triangleURL = "https://trinket.io/embed/python/411b16cb81";
  const treeURL = "https://trinket.io/embed/python/04dad69445";
  const spikeURL = "https://trinket.io/embed/python/998b5c1e8a";

  return (
    <div>
      <div className="content-column">
        <h1 className="content-title">Recursive Art</h1>
        <p className="content-subtitle-sm">
          Using the{" "}
          <a
            className="link-in-text"
            href="https://docs.python.org/3/library/turtle.html"
            target="_blank"
            rel="noreferrer"
          >
            Python Turtle
          </a>{" "}
          library to draw the art below.
        </p>
        <a
          className="link-button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/CarterFiggins/drawings"
        >
          View Code
        </a>
        <div className="drawing-boxes">
          <Drawing drawURL={treeURL} />
          <Drawing drawURL={spikeURL} />
          <Drawing drawURL={triangleURL} />
        </div>
      </div>
    </div>
  );
}
