import { useState } from "react";
import Drawing from "./Drawing";

export default function DrawPage() {
  const [drawIndex, setDrawIndex] = useState(0);
  const triangleURL = { link: "https://trinket.io/embed/python/411b16cb81", name: "Sierpinski's Triangle" };
  const treeURL = { link: "https://trinket.io/embed/python/04dad69445", name: "Cherry Tree" };
  const spikeURL = { link: "https://trinket.io/embed/python/998b5c1e8a", name: "Spikes" };

  const drawings = [treeURL, triangleURL, spikeURL];
  const isEndOfDrawings = drawIndex + 1 >= drawings.length;
  const isStartOfDrawings = drawIndex <= 0;

  return (
    <div>
      <div className="content-column">
        <h1 className="content-title">Recursive Art</h1>
        <p className="content-subtitle-sm">
          Using the <a
            className="link-in-text"
            href="https://docs.python.org/3/library/turtle.html"
            target="_blank"
            rel="noreferrer"
          >
            Python Turtle
          </a> library to draw the art below.
        </p>
        
        <div className="drawing-nav">
          <button
            disabled={isStartOfDrawings}
            className="nav-btn"
            onClick={() => setDrawIndex(drawIndex - 1)}
          >
            Prev
          </button>
          <h2>{drawings[drawIndex].name}</h2>
          <button
            disabled={isEndOfDrawings}
            className="nav-btn"
            onClick={() => setDrawIndex(drawIndex + 1)}
          >
            Next
          </button>
        </div>
        
        <div className="drawing-boxes">
          <Drawing drawURL={drawings[drawIndex].link} />
        </div>
      </div>
    </div>
  );
}
