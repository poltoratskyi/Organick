import React from "react";
import { Link } from "react-router-dom";

import "./Style.scss";

const Gallery = ({ img, text, handleClickPage }) => {
  return (
    <li className="gallery__content-items-item">
      <img
        className="gallery__content-items-item-img"
        src={img}
        alt={text}
        loading="lazy"
      />
      <Link to="/Shop">
        <span
          onClick={() => handleClickPage("Shop")}
          className="gallery__content-items-item-text"
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

export default Gallery;
