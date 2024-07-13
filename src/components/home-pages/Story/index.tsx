import "./Style.scss";

const Story: React.FC = () => {
  return (
    <section className="story">
      <div className="container">
        <div className="story__wrapper">
          <div className="story__content">
            <div className="story__content-title">
              <span className="story__content-title-subheading">
                Eco-Friendly
              </span>

              <h2 className="story__content-title-heading">
                Econis is a Friendly <br /> Organic Store
              </h2>
            </div>

            <div className="story__content-history">
              <div className="story__content-history-content">
                <h4 className="story__content-history-content-title">
                  Start with Our Company First
                </h4>

                <p className="story__content-history-content-description">
                  Discover the journey of Econis, an eco-friendly organic store
                  dedicated to providing you with the best in sustainable
                  products. We are committed to making a positive impact on the
                  planet and your well-being.
                </p>
              </div>

              <div className="story__content-history-content">
                <h4 className="story__content-history-content-title">
                  Learn How to Grow Yourself
                </h4>

                <p className="story__content-history-content-description">
                  Start with our company and embark on a path of growth and
                  self-improvement. We believe in nurturing personal development
                  and creating a better world for all.
                </p>
              </div>

              <div className="story__content-history-content">
                <h4 className="story__content-history-content-title">
                  Farming Strategies of Today
                </h4>

                <p className="story__content-history-content-description">
                  Learn about the innovative farming strategies that guide our
                  practices today. We are constantly striving to improve and
                  deliver high-quality, environmentally conscious products to
                  our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Story;
