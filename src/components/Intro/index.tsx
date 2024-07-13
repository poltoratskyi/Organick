import "./Style.scss";

const Intro: React.FC = () => {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__content">
          <div className="intro__content-title">
            <span className="intro__content-title-subheading">
              Organic Only
            </span>

            <h2 className="intro__content-title-heading">
              Everyday Fresh & Clean
            </h2>

            <p className="intro__content-title-description">
              Prioritize your well-being with our health and wellness services,
              offering a range of products <br /> and resources to support a
              balanced and fulfilling lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
