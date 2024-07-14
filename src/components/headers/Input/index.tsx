import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import {
  setSearchProduct,
  setVisibleSearch,
  setVisibleInput,
  selectVisibleInput,
  selectSearchProduct,
} from "../../../redux/slices/inputSlice";
import { fetchInputProducts } from "../../../redux/slices/inputSlice";

import debounce from "lodash.debounce";

import "./Style.scss";

import SearchModal from "../SearchModal";

const Input: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Initial state selected -> inputSlice.js
  const searchProduct = useSelector(selectSearchProduct);
  const visibleInput = useSelector(selectVisibleInput);

  // Local initial state -> input value -> searchProduct state
  const [inputValue, setInputValue] = useState(searchProduct);

  // Debounced
  const debouncedSearch = useCallback(
    debounce((filterLetter: string) => {
      if (filterLetter !== "") {
        dispatch(fetchInputProducts({ filterLetter }));
      }
      dispatch(setSearchProduct(filterLetter));
    }, 500),
    []
  );

  // Input -> Getting data
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();

    // Update local state
    setInputValue(value);
    // Transfer data -> Debounced
    debouncedSearch(value);
  };

  const actionInputSearch = () => {
    dispatch(setVisibleInput(false));
    dispatch(setVisibleSearch(false));
  };

  // Close input search -> Escape
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      actionInputSearch();
    }
  };

  useEffect(() => {
    if (visibleInput) {
      dispatch(setSearchProduct(""));
      setInputValue("");
    }
  }, [visibleInput]);

  useEffect(() => {
    visibleInput
      ? document.addEventListener("keydown", handleEscape)
      : document.removeEventListener("keydown", handleEscape);

    // Clear event
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [visibleInput]);

  return (
    <div
      className={
        visibleInput ? "input-content" : "input-content input-content_hidden"
      }
    >
      <div className="input-wrapper">
        <input
          className="input"
          onChange={handleSearch}
          value={inputValue}
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
    </div>
  );
};

export default Input;
