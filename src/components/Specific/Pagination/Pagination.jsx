import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const Pagination = ({pageCount,setPage}) => {

  const handlePageClick = (value) =>{
    setPage(value.selected+1)
  }

  return (
    <>
      
      <ReactPaginate
        className="pagination justify-content-end"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination