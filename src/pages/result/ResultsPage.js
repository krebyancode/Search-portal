import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import paginator from "../../functions/paginator";

const sortOptions = [
  "Default",
  "Descending by name",
  "Ascending by name",
  "Descending by year",
  "Ascending by year",
];

const ResultsPage = () => {
  const location = useLocation();
  const people = location.state.filteredPeople;
  const colNames = location.state.colNames;

  const [sortBy, setSortBy] = useState("");
  const [sortedPeople, setSortedPeople] = useState(people);

  const [page, setPage] = useState(0);
  const [totalPerPage, setTotalPerPage] = useState([]);
  const [paginatedPeople, setPaginatedPeople] = useState([]);

  const paginatePeople = () => {
    setPaginatedPeople(paginator(sortedPeople)[page]);
    setTotalPerPage(paginator(sortedPeople));
  };

  useEffect(() => {
    paginatePeople();
  }, [sortedPeople, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > totalPerPage.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = totalPerPage.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  const sortPeople = () => {
    const copyPeople = [...sortedPeople];
    if (sortBy === "Default") {
      setSortedPeople(people);
    }
    if (sortBy === "Ascending by name") {
      setSortedPeople(
        copyPeople.sort((a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
        })
      );
    }
    if (sortBy === "Descending by name") {
      setSortedPeople(
        copyPeople.sort((a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return 1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return -1;
          }
        })
      );
    }
    if (sortBy === "Ascending by year") {
      setSortedPeople(
        copyPeople.sort((a, b) => {
          if (
            a[3].split("/").reverse().join() < b[3].split("/").reverse().join()
          ) {
            return -1;
          }
          if (
            a[3].split("/").reverse().join() > b[3].split("/").reverse().join()
          ) {
            return 1;
          }
        })
      );
    }
    if (sortBy === "Descending by year") {
      setSortedPeople(
        copyPeople.sort((a, b) => {
          if (
            a[3].split("/").reverse().join() < b[3].split("/").reverse().join()
          ) {
            return 1;
          }
          if (
            a[3].split("/").reverse().join() > b[3].split("/").reverse().join()
          ) {
            return -1;
          }
        })
      );
    }
  };

  useEffect(() => {
    sortPeople();
  }, [sortBy]);

  return (
    <div className="results-container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {colNames.map((column, index) => (
                <th key={index}>{column}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedPeople.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{person[0]}</td>
                  <td>{person[1]}</td>
                  <td>{person[2]}</td>
                  <td>{person[3]}</td>
                  <td>{person[4]}</td>
                  <td>{person[5]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="select-box">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {sortOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {totalPerPage.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? "active-btn" : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="next-btn" onClick={nextPage}>
          next
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
