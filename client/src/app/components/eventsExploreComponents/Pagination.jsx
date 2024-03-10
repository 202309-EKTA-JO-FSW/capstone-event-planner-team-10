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
              className="px-3 py-2 bg-gray-200 text-gray-500 rounded-l hover:bg-blue-500 hover:text-white border-r-1 hover:border-gray-200 duration-300"
            >
              Prev
            </button>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button
                onClick={() => onPageChange(pageNumber)}
                disabled={pageNumber === currentPage}
                className={`px-3 py-2 hover:bg-blue-500 hover:text-white border-x hover:border-gray-200 duration-300 ${
                  pageNumber === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-500"
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
              className="px-3 py-2 bg-gray-200 text-gray-500 rounded-r hover:bg-blue-500 hover:text-white border-l-1 hover:border-gray-200 duration-300"
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
