import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-4">
      <nav className="flex justify-center">
        <ul className="flex">
          <li>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 bg-stone-700 text-white rounded-l hover:bg-orange-300 hover:text-black border-r-1 hover:border-stone-700 duration-300"
            >
              Prev
            </button>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => onPageChange(pageNumber)}
                disabled={pageNumber === currentPage}
                className={`px-3 py-2  ${
                  pageNumber === currentPage
                    ? "bg-orange-300 text-black border-x border-stone-700 "
                    : "bg-stone-700 text-white hover:bg-orange-300 hover:text-black duration-300 border-x border-stone-700"
                }`}
              >
                {pageNumber}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-2 bg-stone-700 text-white rounded-r hover:bg-orange-300 hover:text-black border-l-1 hover:border-stone-700 duration-300"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
