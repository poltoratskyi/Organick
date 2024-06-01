import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./Style.scss";

import Context from "../../../context/Context";

const Banner = () => {
  const { OpenTheNewPageAndScrollToTop } = useContext(Context);

  return (
    <article className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__content-title">
            <span className="banner__content-title-subheading">
              100% Natural Food
            </span>

            <h2 className="banner__content-title-heading">
              Choose the best <br /> healthier way <br /> of life
            </h2>
          </div>

          <button
            onClick={() => OpenTheNewPageAndScrollToTop("Services")}
            className="button button_banner"
          >
            <Link id="link" to="/Services">
              Explore Now
              <svg
                id="arrow"
                width="22"
                height="22"
                viewBox="0 0 19 19"
                fill="none"
              >
                <circle cx="9.2" cy="9.2" r="9.2" fill="#335B6B" />
                <path
                  d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </article>
  );
};
export default Banner;
