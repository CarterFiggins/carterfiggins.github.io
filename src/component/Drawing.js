import { useState } from "react";

export default function Drawing(props) {
  const { drawURL } = props;

  // creating urls from https://trinket.io/turtle to show art
  const url = `${drawURL}?outputOnly=true&runOption=run&start=result`;

  return (
    <div>
      <div className="drawing">
        <iframe
          title="triangle"
          src={url}
          className="drawing-iframe"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
        ></iframe>
      </div>
    </div>
  );
}
