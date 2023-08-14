export default function PageButtons(props) {
  const { setPage, nextPage, prevPage, disabled} = props;
  return (
    <div className="page-buttons">
      <button
        disabled={!prevPage || disabled}
        className="nav-btn"
        onClick={() => setPage(prevPage)}
      >
        Prev
      </button>
      <button
        disabled={!nextPage || disabled}
        className="nav-btn"
        onClick={() => setPage(nextPage)}
      >
        Next
      </button>
    </div>
  );
}
