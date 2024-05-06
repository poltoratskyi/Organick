import React from "react";
import "./Style.scss";

const Newsletter = () => {
  return (
    <div className="container">
      <section className="newsletter">
        <div className="newsletter__content">
          <div className="newsletter__content-title">
            <h2 className="newsletter__content-title-heading">
              Subscribe to our Newsletter
            </h2>
          </div>

          <form className="newsletter__content-form">
            <input
              id="email"
              className="newsletter__content-form-input"
              type="email"
              placeholder="Your Email Address"
              required
            />

            <button id="link" className="button button_newsletter">
              Subscribe
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
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
export default Newsletter;