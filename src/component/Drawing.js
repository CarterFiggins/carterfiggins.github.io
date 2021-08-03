import { useState } from "react";

export default function Drawing(props) {
  const { drawURL } = props;

  const [showCode, setShowCode] = useState(false);

  // creating urls from https://trinket.io/turtle to show drawings
  const url = showCode
    ? `${drawURL}?runOption=run&start=result`
    : `${drawURL}?outputOnly=true&runOption=run&start=result`;

  return (
    <div>
      <button onClick={() => setShowCode(!showCode)}>
        {showCode ? "Hide Code" : "Show Code"}
      </button>
      <div className="drawing">
        <iframe
          title="triangle"
          src={url}
          width={showCode ? "100%" : "1010"}
          height="950"
          frameborder="0"
          marginWidth="0"
          marginHeight="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
