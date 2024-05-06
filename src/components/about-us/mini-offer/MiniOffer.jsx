import React from "react";
import "./Style.scss";

import offer from "../../../data/offer";

const MiniOffer = () => {
  return (
    <>
      {offer
        .filter((item) => item.id >= 5)
        .map((item) => (
          <div key={item.id} className="mini-offer__content-items-item">
            <img
              className="mini-offer__content-items-item-img"
              loading="lazy"
              src={item.img}
              alt={item.name}
            />

            <h3 className="mini-offer__content-items-item-text">{item.name}</h3>
          </div>
        ))}
    </>
  );
};

export default MiniOffer;
