import { useState } from "react";

export default function Drawing(props) {
  const { drawURL } = props;

  const [showCode, setShowCode] = useState(false);

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
          width={showCode ? "100%" : "940"}
          height="950"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
