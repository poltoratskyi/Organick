import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Context from "../../../context/Context";

import "./Style.scss";

const Gallery = ({ img, text }) => {
  const { handleMenuClickAndSave } = useContext(Context);

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
          onClick={() => handleMenuClickAndSave("Shop")}
          className="gallery__content-items-item-text"
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

export default Gallery;
