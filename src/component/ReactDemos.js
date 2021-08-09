import Header from "./common/Header";
import Table from "./react-demos/Table";

export default function ReactDemos() {
  return (
    <div>
      <Header />
      <div className="content-column">
        <h1 className="content-title">React Demos</h1>
        <p className="content-subtitle">subtitle</p>
      </div>
      <div className="show-demo">
        <Table />
      </div>
    </div>
  );
}
