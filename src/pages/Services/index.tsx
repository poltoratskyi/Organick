import { Link } from "react-router-dom";

import Intro from "../../components/Intro";

import "./Style.scss";

const Services: React.FC = () => {
  return (
    <>
      <div className="page-banner page-banner_services">
        <h1 className="page-banner__text">Services</h1>
      </div>

      <section className="services">
        <div className="container">
          <div className="services__content">
            <div className="services__content-title">
              <span className="services__content-title-subheading">
                What we Grow
              </span>

              <h2 className="services__content-title-heading">
                Better Agriculture <br /> for Better Future
              </h2>
            </div>

            <div className="services__content-layout">
              <div className="services__content-layout-item">
                <div className="services__content-layout-item-info">
                  <img
                    className="services__content-layout-item-info-img"
                    loading="lazy"
                    src="img/Services/Milk-min.jpg"
                    alt="Milk"
                  />

                  <h3 className="services__content-layout-item-info-title">
                    Dairy Products
                  </h3>

                  <p className="services__content-layout-item-info-description">
                    Explore a wide range of fresh and nutritious dairy products
                    sourced from local farms.
                  </p>
                </div>

                <div className="services__content-layout-item-info">
                  <img
                    className="services__content-layout-item-info-img"
                    loading="lazy"
                    src="img/Services/Store-min.jpg"
                    alt="Store"
                  />

                  <h3 className="services__content-layout-item-info-title">
                    Store Services
                  </h3>

                  <p className="services__content-layout-item-info-description">
                    Discover convenient and reliable store services offering a
                    variety of essential goods for your everyday needs.
                  </p>
                </div>

                <div className="services__content-layout-item-info">
                  <img
                    className="services__content-layout-item-info-img"
                    loading="lazy"
                    src="img/Services/Delivery-min.jpg"
                    alt="Delivery"
                  />

                  <h3 className="services__content-layout-item-info-title">
                    Delivery Services
                  </h3>

                  <p className="services__content-layout-item-info-description">
                    Experience hassle-free delivery services bringing your
                    favorite products right to your doorstep
                  </p>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <img
                  width={600}
                  src="/img/Services/Package-min.jpg"
                  alt="Package-min.jpg"
                  loading="lazy"
                />

                <button
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="button button_quality"
                >
                  <Link to={`/services/${"quality-standard"}`} id="link">
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

              <div className="services__content-layout-item">
                <div className="services__content-layout-item-info">
                  <img
                    className="services__content-layout-item-info-img"
                    loading="lazy"
                    src="img/Services/Agricultura-min.jpg"
                    alt="Agricultura"
                  />

                  <h3 className="services__content-layout-item-info-title">
                    Agricultural Services
                  </h3>

                  <p className="services__content-layout-item-info-description">
                    Support local farmers and communities with our agricultural
                    services promoting sustainable farming practices.
                  </p>
                </div>

                <div className="services__content-layout-item-info">
                  <img
                    className="services__content-layout-item-info-img"
                    loading="lazy"
                    src="img/Services/Organic-min.jpg"
                    alt="Organic"
                  />

                  <h3 className="services__content-layout-item-info-title">
                    Organic Products
                  </h3>

                  <p className="services__content-layout-item-info-description">
                    Embrace a healthier lifestyle with our selection of premium
                    organic products cultivated with care for both you and the
                    environment.
                  </p>
                </div>

                <div className="services__content-layout-item-info">
                  <img
                    className="services__content-layout-item-info-img"
                    loading="lazy"
                    src="img/Services/Fresh-min.jpg"
                    alt="Fresh"
                  />

                  <h3 className="services__content-layout-item-info-title">
                    Fresh Vegetables
                  </h3>

                  <p className="services__content-layout-item-info-description">
                    Enjoy the freshness of locally grown vegetables, harvested
                    at their peak to ensure quality and taste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Intro />
    </>
  );
};

export default Services;
