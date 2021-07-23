import { Link } from "react-router-dom";
import Drawing from "./Drawing";

export default function Draw() {
  const triangleURL = "https://trinket.io/embed/python/411b16cb81";
  const treeURL = "https://trinket.io/embed/python/04dad69445";
  const spikeURL = "";

  return (
    <div>
      Draw
      <Link to="/">TO HOME</Link>
      <div className="drawing-flex">
        <Drawing drawURL={triangleURL} />
        <Drawing drawURL={treeURL} />
      </div>
    </div>
  );
}
