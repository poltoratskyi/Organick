import "./Style.scss";

import Newsletter from "../../components/footers/Newsletter";

const QualityStandard: React.FC = () => {
  return (
    <>
      <div className="page-banner page-banner_quality-standard">
        <h1 className="page-banner__text">Quality Standard</h1>
      </div>

      <section className="quality">
        <div className="container">
          <img src="../img/Quality/Quality-main-min.jpg" alt="Quality-main" />

          <div className="quality__content">
            <div className="quality__content-info">
              <h2 className="quality__content-info-title">
                Organic Store Services
              </h2>

              <p className="quality__content-info-descr quality__content-info-descr_heading">
                In our listing, we have several collections of organic products.
                This is the place where you need to choose the product you want.
                The Product that you ordered will be verified that we have or
                not if have we will start to move on with the next step or else
                we will ask our farmers for the supply. Once your product is
                packed it will be delivered to your nearby locality you can
                directly visit the to buy the product you ordered.
              </p>

              <p className="quality__content-info-descr">
                We strive to ensure that every product meets the highest
                standards of quality and freshness. Our organic products are
                sourced directly from trusted farmers who practice sustainable
                agriculture. We believe in transparency, so you can trace each
                product back to its origin. If you have any special requirements
                or need further information, our customer service team is always
                ready to assist. Your satisfaction is our priority, and we are
                committed to providing you with the best organic products
                available.
              </p>
            </div>

            <div className="quality__content-cart">
              <div className="quality__content-cart-item quality__content-cart-item_first">
                <img
                  className="quality__content-cart-item-img"
                  src="../img/Quality/Organic-min.jpg"
                  loading="lazy"
                  alt="Organic"
                />

                <div className="quality__content-cart-item-info">
                  <h3 className="quality__content-cart-item-info-title">
                    Why Organic
                  </h3>

                  <p className="quality__content-cart-item-info-descr">
                    Organic products are free from harmful chemicals and
                    pesticides.
                  </p>
                </div>
              </div>

              <div className="quality__content-cart-item">
                <div className="quality__content-cart-item-info">
                  <h3 className="quality__content-cart-item-info-title">
                    Fresh Products
                  </h3>

                  <p className="quality__content-cart-item-info-descr">
                    Our fresh products are harvested at their peak to ensure
                    maximum flavor and nutritional value.
                  </p>
                </div>

                <img
                  className="quality__content-cart-item-img"
                  src="../img/Quality/Speciality-min.jpg"
                  loading="lazy"
                  alt="Organic"
                />
              </div>
            </div>

            <div className="quality__content-land">
              <h2 className="quality__content-land-title">
                We Farm At Your Land
              </h2>
              <p className="quality__content-land-descr">
                We make our products to reach a lot with marketing techniques.
                If you are not comfortable going to the nearby market place we
                also will deliver your product to your doorstep. The Product
                that you ordered will be verified that we have or not if have we
                will start to move on will ask our farmers for the supply.
              </p>

              <div className="quality__content-land-item">
                <div className="quality__content-land-item-inner">
                  <h3 className="quality__content-land-item-inner-number">
                    01
                  </h3>

                  <h3 className="quality__content-land-item-inner-title">
                    Best Quality Products
                  </h3>
                </div>

                <div className="quality__content-land-item-inner">
                  <h3 className="quality__content-land-item-inner-number">
                    02
                  </h3>

                  <h3 className="quality__content-land-item-inner-title">
                    Money Back Guarantee
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default QualityStandard;
