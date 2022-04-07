import React from "react";
import "../css/Pagination.css";

const Pagination = () => {
  return (
    <nav className="page">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link">Previous</button>
        </li>
        <li className="page-item">
          <button className="page-link">Next</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
