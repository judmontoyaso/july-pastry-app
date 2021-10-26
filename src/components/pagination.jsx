import React from "react";
import { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={
              number == currentPage
                ? "w-10 h-10 bg-red-300 rounded-full text-white "
                : "w-10 h-10 text-red-300 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-red-100 m-3 focus:bg-red-300 focus:text-white"
            }
          >
            <li onClick={() => paginate(number)}>
              <span>{number}</span>
            </li>
          </button>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
