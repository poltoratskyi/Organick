import "./Style.scss";

import Choose from "../../components/about-us/Choose";
import MiniTeam from "../../components/about-us/MiniTeam";
import MiniOffer from "../../components/about-us/MiniOffer";
import Newsletter from "../../components/footers/Newsletter";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="page-banner page-banner_about-us">
        <h1 className="page-banner__text">About Us</h1>
      </div>

      <section className="about-us">
        <div className="container">
          <div className="about-us__content">
            <div className="about-us__content-info">
              <div className="about-us__content-info-title">
                <span className="about-us__content-info-title-subheading">
                  About Us
                </span>

                <h2 className="about-us__content-info-title-heading">
                  We Do Creative Things for Success
                </h2>

                <p className="about-us__content-info-title-description">
                  Welcome to our creative space! At 'About Us,' we strive for
                  excellence by embracing innovation and creativity. Our
                  passionate team is dedicated to delivering outstanding results
                  and making a positive impact. Explore our story, mission, and
                  the creative journey that defines us.
                </p>
              </div>

              <div className="about-us__content-info-natural">
                <img
                  src="../icons/About/Tractor-min.jpg"
                  loading="lazy"
                  alt="Vegan Food"
                  id="about-us-img"
                />

                <div className="about-us__content-info-natural-description">
                  <h4 className="about-us__content-info-natural-description-title">
                    Modern Agriculture Equipment
                  </h4>

                  <p className="about-us__content-info-natural-description-text">
                    Discover the cutting-edge technology and modern agriculture
                    equipment that powers our commitment to efficiency and
                    sustainability.
                  </p>
                </div>
              </div>

              <div className="about-us__content-info-natural">
                <img
                  src="../icons/About/Plant-min.jpg"
                  loading="lazy"
                  alt="Mailbox Quality"
                  id="about-us-img"
                />

                <div className="about-us__content-info-natural-description">
                  <h4 className="about-us__content-info-natural-description-title">
                    No Growth Hormones Are Used
                  </h4>

                  <p className="about-us__content-info-natural-description-text">
                    We prioritize your health by ensuring that none of our
                    products are treated with growth hormones. Explore our range
                    and enjoy wholesome, natural goodness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Choose />

      <MiniTeam />

      <MiniOffer />

      <Newsletter />
    </>
  );
};

export default AboutUs;
