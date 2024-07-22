import { Link } from "react-router-dom";

import "./Style.scss";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__content-info">
            <div className="about__content-info-title">
              <span className="about__content-info-title-subheading">
                About Us
              </span>

              <h2 className="about__content-info-title-heading">
                We Believe in Working with Accredited Farmer
              </h2>

              <p className="about__content-info-title-description">
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, and care. We aim to give our customers a healthy
                chemical-free meal for perfect nutrition.
              </p>
            </div>

            <div className="about__content-info-quality">
              <img
                id="about-img"
                src="../icons/About/Vegan Food-min.jpg"
                loading="lazy"
                alt="Vegan Food"
              />

              <div className="about__content-info-quality-description">
                <h4 className="about__content-info-quality-description-title">
                  Organic Foods Only
                </h4>

                <p className="about__content-info-quality-description-text">
                  The Product that you ordered will be verified that we have or
                  not if have we will start to move on with the next step.
                </p>
              </div>
            </div>

            <div className="about__content-info-quality ">
              <img
                id="about-img"
                src="../icons/About/Mailbox Quality-min.jpg"
                loading="lazy"
                alt="Mailbox Quality"
              />

              <div className="about__content-info-quality-description">
                <h4 className="about__content-info-quality-description-title">
                  Quality Standards
                </h4>

                <p className="about__content-info-quality-description-text">
                  Once your product is packed it will be delivered to your
                  nearby locality you can directly visit the to buy the product.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="button button_about"
            >
              <Link id="link" to="/about-us">
                Read More
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
      </div>
    </section>
  );
};
export default About;
