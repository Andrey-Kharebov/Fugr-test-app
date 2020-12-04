import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ dataLength, maxPageSize, setCurrentPage }) {

  const handlePageClick = (page) => {
    setCurrentPage(page.selected);
  }

  return (
    <div>
      <ReactPaginate
        previousLabel={'chevron_left'}
        nextLabel={'chevron_right'}
        previousClassName={'material-icons'}
        nextClassName={'material-icons'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={dataLength / maxPageSize}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  )
  
  
}

export default Pagination;
