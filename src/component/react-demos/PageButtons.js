export default function PageButtons(props) {
  const { setPage, nextPage, prevPage } = props;
  return (
    <div className="page-buttons">
      <button
        disabled={!prevPage}
        className="nav-btn"
        onClick={() => setPage(prevPage)}
      >
        Prev
      </button>
      <button
        disabled={!nextPage}
        className="nav-btn"
        onClick={() => setPage(nextPage)}
      >
        Next
      </button>
    </div>
  );
}
