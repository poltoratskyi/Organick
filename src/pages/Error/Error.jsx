import React from "react";

import { Link } from "react-router-dom";

import "./Style.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="error__content">
          <div className="error__content-title">
            <h1 className="error__content-title-heading ">404</h1>
            <h2 className="error__content-title-subheading">Page not found</h2>
            <p className="error__content-title-descr">
              The page you are looking for doesn't exist or has been moved
            </p>

            <button className="button button_error">
              <Link id="link" to="/">
                Go to Home page
                <svg
                  id="arrow"
                  width="22"
                  height="22"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <circle cx="9.5" cy="9.5" r="9.5" fill="#335B6B" />
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
      </div>
    </div>
  );
};
export default Error;
