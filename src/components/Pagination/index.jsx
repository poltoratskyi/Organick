import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentPage } from "../../redux/slices/shopSlice";

import "./Style.scss";

const Pagination = () => {
  const dispatch = useDispatch();

  // Initial state selected -> shopSlice.js
  const currentPage = useSelector((state) => state.shop.currentPage);

  return (
    <ReactPaginate
      className="paginate"
      breakLabel="..."
      nextLabel="&rarr;"
      onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
      pageRangeDisplayed={6}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="&larr;"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;