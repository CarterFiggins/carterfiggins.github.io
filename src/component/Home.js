import Header from "./common/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="content-column">
        <h1 className="content-title">Carter Figgins</h1>
        <p className="content-subtitle">The Computing Fig</p>
        <p className="content-body">Hello, welcome to my website!</p>
        {/* <img className="me" src="" alt="me"></img> */}
      </div>
    </div>
  );
}
