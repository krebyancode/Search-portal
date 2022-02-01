import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { StorageContext } from "../context/StorageContext";

let count = 0;

const QueryResult = ({ search }) => {
  const { people } = useContext(StorageContext);
  const navigate = useNavigate();

  const filteredPeople = useMemo(
    () =>
      people["data"].filter((person) => {
        return person[0].toLowerCase().includes(search.toLowerCase());
      }),
    [people, search]
  );

  const loadMore = () => {
    let colNames = people["cols"];
    navigate(`/result`, { state: { filteredPeople, colNames } });
  };

  return (
    <>
      {search && (
        <div className="search-table">
          {filteredPeople.length == 0 ? (
            <div>
              <center>NO DATA HAS BEEN FOUND.</center>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  {people["cols"].map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredPeople.map((person, count) => {
                  if (count < 3) {
                    return (
                      <tr key={count}>
                        <td>{person[0]}</td>
                        <td>{person[1]}</td>
                        <td>{person[2]}</td>
                        <td>{person[3]}</td>
                        <td>{person[4]}</td>
                        <td>{person[5]}</td>
                      </tr>
                    );
                  }
                  count += 1;
                })}
              </tbody>
            </table>
          )}

          {filteredPeople.length > 3 && (
            <button className="btn-more" onClick={loadMore}>
              More...
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default QueryResult;
