import Drawing from "./Drawing";
import Header from "./common/Header";

export default function Draw() {
  const triangleURL = "https://trinket.io/embed/python/411b16cb81";
  const treeURL = "https://trinket.io/embed/python/04dad69445";
  const spikeURL = "https://trinket.io/embed/python/998b5c1e8a";

  return (
    <div>
      <Header />
      <div className="drawing-boxes">
        <Drawing drawURL={triangleURL} />
        <Drawing drawURL={treeURL} />
        <Drawing drawURL={spikeURL} />
      </div>
    </div>
  );
}
