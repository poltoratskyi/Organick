import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchProduct,
  setVisibleSearch,
  setVisibleInput,
} from "../../../redux/slices/inputSlice";

import "./Style.scss";

import SearchModal from "../SearchModal";

const Input = () => {
  const dispatch = useDispatch();

  // Initial state selected -> inputSlice.js
  const searchProduct = useSelector((state) => state.input.searchProduct);

  // Input -> Getting data
  const handleSearch = (e) => {
    const value = e.target.value.trim();
    dispatch(setSearchProduct(value));
  };

  const actionInputSearch = () => {
    dispatch(setSearchProduct(""));
    dispatch(setVisibleInput(false));
    dispatch(setVisibleSearch(false));
  };

  // Close shopping cart -> Escape
  const handleEscape = (e) => {
    if (e.key === "Escape") {
      actionInputSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <>
      <div className="input-wrapper">
        <input
          className="input"
          onChange={handleSearch}
          value={searchProduct}
          type="text"
          id="search"
          placeholder="Start your healthy eating journey here..."
        ></input>

        <button className="input-close-btn input-close-btn_active">
          <svg
            width="60"
            height="60"
            viewBox="0 0 32 32"
            onClick={() => {
              actionInputSearch();
            }}
          >
            <g>
              <circle
                cx="16"
                cy="16"
                fill="#a9d2ed"
                r="14"
                style={{ fill: " rgb(126, 182, 147)" }}
              ></circle>
              <path
                d="m17.41 16 6.016 6.006c.196.195.196.512 0 .707l-.712.712c-.195.195-.512.195-.707 0l-6.007-6.015-6.006 6.016c-.195.196-.512.196-.707 0l-.712-.712c-.195-.195-.195-.512 0-.707l6.015-6.007-6.016-6.006c-.196-.195-.196-.512 0-.707l.712-.712c.195-.195.512-.195.707 0l6.007 6.015 6.006-6.016c.195-.196.512-.196.707 0l.712.712c.195.195.195.512 0 .707z"
                fill="#36a0e8"
                style={{ fill: "#fff" }}
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <SearchModal />
    </>
  );
};

export default Input;
