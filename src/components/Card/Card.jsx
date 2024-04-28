import React from "react";
import "./Style.scss";

const Card = ({ img, id }) => {
  return <img src={img} alt={`Card ${id}`} loading="lazy" />;
};

export default Card;
