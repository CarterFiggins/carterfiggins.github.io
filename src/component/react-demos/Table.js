import { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function Tabel() {
  const [pageNum, setPageNum] = useState(1);
  const [starWarsData, setStarWarsData] = useState(null);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageNum}`)
      .then((responce) => responce.json())
      .then((data) => {
        setStarWarsData(data);
      });
  }, [pageNum]);

  if (!starWarsData) {
    return "loading...";
  }

  if (starWarsData.detail) {
    return `error: ${starWarsData.detail}`;
  }

  const changePage = (num) => {
    setStarWarsData(null);
    setPageNum(num);
  };

  console.log(starWarsData);
  console.log(starWarsData.count / 10 > pageNum);

  const numberOfPages = Math.ceil(starWarsData.count / 10);
  console.log(numberOfPages);

  return (
    <div>
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
      </table>

      <Pagination
        pageNum={pageNum}
        numberOfPages={numberOfPages}
        setPageNum={changePage}
      />
    </div>
  );
}
