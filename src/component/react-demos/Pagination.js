export default function Pagination(props) {
  const { pageNum, numberOfPages, setPageNum } = props;

  return (
    <div>
      {pageNum > 1 && (
        <button
          onClick={() => {
            setPageNum(pageNum - 1);
          }}
        >
          Prev Page
        </button>
      )}
      {numberOfPages > pageNum && (
        <button
          onClick={() => {
            setPageNum(pageNum + 1);
          }}
        >
          Next Page
        </button>
      )}
    </div>
  );
}
