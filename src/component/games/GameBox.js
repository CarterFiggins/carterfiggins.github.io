import { Link } from "react-router-dom";

export default function GameBox(props) {
  const { title, discription, imgSrc, gameLink, codeLink } = props;
  return (
    <div className="game-box">
      <img alt="gamePhoto" src={imgSrc} className="image" />
      <div className="info">
        <Link to={gameLink} className="title">
          {title}
        </Link>
        <div className="discription">{discription}</div>
        <div className="discription">
          <a href={codeLink}>View Code</a>
        </div>
      </div>
    </div>
  );
}
