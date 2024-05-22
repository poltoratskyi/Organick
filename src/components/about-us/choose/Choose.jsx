import React from "react";

import "./Style.scss";

const Choose = () => {
  return (
    <section className="choose">
      <div className="container">
        <div className="choose__wrapper">
          <div className="choose__content">
            <div className="choose__content-info">
              <div className="choose__content-info-title">
                <span className="choose__content-info-title-subheading">
                  Why Choose Us?
                </span>

                <h2 className="choose__content-info-title-heading">
                  We do not buy from the open market & traders.
                </h2>

                <p className="choose__content-info-title-description">
                  At our core, we believe in providing you with the best,
                  directly from nature.
                </p>
              </div>

              <div className="choose__content-info-organic">
                <img
                  src="../icons/About/Avocado.png"
                  loading="lazy"
                  alt="Vegan Food"
                  id="about-us-img"
                />

                <div className="choose__content-info-organic-description">
                  <h4 className="choose__content-info-organic-description-title">
                    100% Natural Product
                  </h4>

                  <p className="choose__content-info-organic-description-text">
                    Carefully sourced from organic farms, ensuring purity and
                    quality.
                  </p>
                </div>
              </div>

              <div className="choose__content-info-organic">
                <img
                  src="../icons/About/Coconut.png"
                  loading="lazy"
                  alt="Mailbox Quality"
                  id="about-us-img"
                />

                <div className="choose__content-info-organic-description">
                  <h4 className="choose__content-info-organic-description-title">
                    Increases resistance
                  </h4>

                  <p className="choose__content-info-organic-description-text">
                    Our products are formulated to enhance your body's natural
                    defense mechanisms.
                  </p>
                </div>
              </div>
            </div>

            <img src="../img/About/ChooseUs-min.jpg" alt="ChooseUs-min" />
          </div>

          <div className="choose__feature">
            <div className="choose__feature-item">
              <img
                src="../icons/About/Policy-min.jpg"
                loading="lazy"
                alt="Policy"
              />

              <h3 className="choose__feature-item-title">Return Policy</h3>

              <p className="choose__feature-item-description">
                "Our hassle-free return policy ensures your satisfaction. If
                you're not happy with your purchase.",
              </p>
            </div>

            <div className="choose__feature-item">
              <img
                src="../icons/About/Fresh-min.jpg"
                loading="lazy"
                alt="Fresh"
              />

              <h3 className="choose__feature-item-title">100% Fresh</h3>

              <p className="choose__feature-item-description">
                "Experience the delight of freshness with our products sourced
                directly from local farms and producers.",
              </p>
            </div>

            <div className="choose__feature-item">
              <img
                src="../icons/About/Support-min.jpg"
                loading="lazy"
                alt="Support"
              />

              <h3 className="choose__feature-item-title">Support 24/7</h3>

              <p className="choose__feature-item-description">
                "Our dedicated support team is available around the clock to
                assist you with any queries or concerns.",
              </p>
            </div>

            <div className="choose__feature-item">
              <img
                src="../icons/About/Secured-min.jpg"
                loading="lazy"
                alt="Secured"
              />

              <h3 className="choose__feature-item-title">Secured Payment</h3>

              <p className="choose__feature-item-description">
                "Feel confident with our secure payment options. Your
                transactions are protected.",
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
