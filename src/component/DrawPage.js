import Drawing from "./Drawing";
import Header from "./common/Header";

export default function DrawPage() {
  const triangleURL = "https://trinket.io/embed/python/411b16cb81";
  const treeURL = "https://trinket.io/embed/python/04dad69445";
  const spikeURL = "https://trinket.io/embed/python/998b5c1e8a";

  return (
    <div>
      <Header />
      <div className="content-column">
        <h1 className="content-title">Recursive Art</h1>
        <p className="content-subtitle">It is so beautiful</p>
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
