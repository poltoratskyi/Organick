import { Link } from "react-router-dom";

import "./Style.scss";

import Newsletter from "../../components/footers/Newsletter";

const PasswordProtected: React.FC = () => {
  return (
    <>
      <div className="page-banner page-banner_protected-page">
        <h1 className="page-banner__text">Protected Page</h1>
      </div>

      <section className="protection">
        <div className="container">
          <div className="protection__content">
            <div className="protection__content-info">
              <img
                className="protection__content-info-img"
                src="/img/PasswordProtected/PasswordProtected-min.jpg"
                alt="PasswordProtected"
                loading="lazy"
              />

              <form className="protection__content-info-form">
                <div className="protection__content-info-form-area">
                  <span className="protection__content-info-form-area-title">
                    Password
                  </span>

                  <input
                    className="protection__content-info-form-area-input"
                    id="password"
                    type="password"
                    placeholder="Enter Your Password..."
                    required
                  />
                </div>

                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="button button_protection"
                >
                  <Link id="link" to="/error">
                    Send Now
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
              </form>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default PasswordProtected;
