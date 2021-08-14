export default function Pagination(props) {
  const { pageNum, numberOfPages, setPageNum } = props;

  const changePage = (num) => {
    if (num !== pageNum) {
      setPageNum(num);
    }
  };

  return (
    <div className="pagination">
      {[...Array(numberOfPages).keys()].map((i) => {
        return (
          <button
            key={i}
            className={`page-number-button ${i + 1 === pageNum && "selected"}`}
            onClick={() => changePage(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}
