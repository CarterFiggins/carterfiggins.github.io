export default function Drawing(props) {
  const { drawURL } = props;

  // creating urls from https://trinket.io/turtle to show art
  const url = `${drawURL}?outputOnly=true&runOption=run&start=result`;

  return (
    <div>
      <div className="drawing">
        <iframe
          src={url}
          className="drawing-iframe"
          width="100%"
          height="200"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
