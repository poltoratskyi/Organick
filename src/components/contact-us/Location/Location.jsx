import React from "react";

import "./Style.scss";

const Location = () => {
  return (
    <section className="location">
      <div className="container">
        <div className="location__content">
          <div className="location__content-info">
            <div className="location__content-info-title">
              <span className="location__content-info-title-heading">
                Location
              </span>

              <h2 className="location__content-info-title-subheading">
                Our Farms
              </h2>

              <p className="location__content-info-title-description">
                Organick product farms are located in <br /> main cities of the
                following places.
              </p>
            </div>

            <div className="location__content-info-items">
              <div className="location__content-info-items-item">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <rect width="50" height="50" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use href="#image0_199_185" transform="scale(0.01)" />
                    </pattern>
                    <image
                      id="image0_199_185"
                      width="100"
                      height="100"
                      href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>

                <p className="location__content-info-items-item-description">
                  <span>
                    <b>
                      New York, USA: <br />
                    </b>
                  </span>
                  299 Park Avenue New York,
                  <br /> New York 10171, USA.
                </p>
              </div>

              <div className="location__content-info-items-item">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <rect width="50" height="50" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use href="#image0_199_185" transform="scale(0.01)" />
                    </pattern>
                    <image
                      id="image0_199_185"
                      width="100"
                      height="100"
                      href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>

                <p className="location__content-info-items-item-description">
                  <span>
                    <b>
                      London, UK: <br />
                    </b>
                  </span>
                  30 Stamford Street, Base Way, <br /> London 5478, UK.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
