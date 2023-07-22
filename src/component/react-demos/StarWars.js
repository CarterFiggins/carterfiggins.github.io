import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Loader from "../common/Loader";

export default function StarWars() {
  const [pageNum, setPageNum] = useState(1);
  const [starWarsData, setStarWarsData] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageNum}`)
      .then((responce) => responce.json())
      .then((data) => {
        setStarWarsData(data);
      });
  }, [pageNum]);

  const changePage = (num) => {
    setStarWarsData(null);
    setPageNum(num);
  };

  const numberOfPages = Math.ceil((starWarsData?.count ?? 0) / 10);

  return (
    <div>
      <div className="content-column">
          <h1 className="content-title">Star Wars API</h1>
      </div>
      <div className="table-flex">
        <table className="table-demo">
          <thead>
            <tr>
              <th>Name</th>
              <th>Eye Color</th>
              <th>Gender</th>
              <th>Hair Color</th>
              <th>Height</th>
              <th>Mass</th>
              <th>Skin Color</th>
            </tr>
          </thead>
          {starWarsData && (
            <tbody>
              {starWarsData.results.map((data, key) => (
                <tr key={key}>
                  <td>{data.name}</td>
                  <td>{data.eye_color}</td>
                  <td>{data.gender}</td>
                  <td>{data.hair_color}</td>
                  <td>{data.height}</td>
                  <td>{data.mass}</td>
                  <td>{data.skin_color}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {!starWarsData && <Loader />}
        <Pagination
          pageNum={pageNum}
          numberOfPages={numberOfPages || 0}
          setPageNum={changePage}
        />
      </div>
    </div>
  );
}
