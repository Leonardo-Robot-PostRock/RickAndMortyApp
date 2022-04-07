import React from "react";
import "../css/Pagination.css";

const Pagination = ({ next, prev, onPrevius, onNext }) => {
  const handlePrevius = () => {
    onPrevius();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="page">
      <ul className="pagination">
        {prev ? (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => {
                handlePrevius();
              }}
            >
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => {
                handleNext();
              }}
            >
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Pagination;
