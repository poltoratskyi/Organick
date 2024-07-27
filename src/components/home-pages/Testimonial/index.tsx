import { useState } from "react";

import "./Style.scss";

const Testimonial: React.FC = () => {
  const [activePerson, setActivePerson] = useState(true);

  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial__content">
          <div className="testimonial__content-title">
            <span className="testimonial__content-title-subheading">
              Testimonials
            </span>
            <h2 className="testimonial__content-title-heading">
              What Our Customers Are Saying
            </h2>
          </div>

          {activePerson ? (
            <div className="testimonial__content-person">
              <img
                className="testimonial__content-person-img"
                src="../img/Testimonial/Sara-min.jpg"
                loading="lazy"
                alt="Sara Taylor"
              />
              <p className="testimonial__content-person-descr">
                I'm extremely satisfied with the quality of their products.
                Their commitment to excellence is evident in every bite. I can't
                recommend them enough!
              </p>
              <h4 className="testimonial__content-person-name">Sara Taylor</h4>
              <span className="testimonial__content-person-role">Consumer</span>
              <div className="testimonial__content-person-btn">
                <button
                  onClick={() => setActivePerson(true)}
                  className={
                    activePerson
                      ? "testimonial__content-person-btn-round testimonial__content-person-btn-round_active"
                      : "testimonial__content-person-btn-round"
                  }
                ></button>
                <button
                  onClick={() => setActivePerson(false)}
                  className={
                    !activePerson
                      ? "testimonial__content-person-btn-round testimonial__content-person-btn-round_active"
                      : "testimonial__content-person-btn-round"
                  }
                ></button>
              </div>
            </div>
          ) : (
            <div className="testimonial__content-person">
              <img
                className="testimonial__content-person-img"
                src="../img/Testimonial/Chris-min.jpg"
                loading="lazy"
                alt="Chris Jordan"
              />
              <p className="testimonial__content-person-descr">
                I have been using the Organick Grocer for over a year now and I
                find the staff friendly and helpful with a good knowledge of the
                products they sell.
              </p>
              <h4 className="testimonial__content-person-name">Chris Jordan</h4>
              <span className="testimonial__content-person-role">
                Store Owner
              </span>
              <div className="testimonial__content-person-btn">
                <button
                  onClick={() => setActivePerson(true)}
                  className={
                    !activePerson
                      ? "testimonial__content-person-btn-round"
                      : "testimonial__content-person-btn-round testimonial__content-person-btn-round_active"
                  }
                ></button>
                <button
                  onClick={() => setActivePerson(false)}
                  className={
                    activePerson
                      ? "testimonial__content-person-btn-round"
                      : "testimonial__content-person-btn-round testimonial__content-person-btn-round_active"
                  }
                ></button>
              </div>
            </div>
          )}

          <span className="testimonial__content-line"></span>

          <div className="testimonial__content-progress">
            <ul className="testimonial__content-progress-stats">
              <li className="testimonial__content-progress-stats-stat">
                <h2 className="testimonial__content-progress-stats-stat-title">
                  100%
                </h2>
                <p className="testimonial__content-progress-stats-stat-subtitle">
                  Organic
                </p>
              </li>
              <li className="testimonial__content-progress-stats-stat">
                <h2 className="testimonial__content-progress-stats-stat-title">
                  285
                </h2>
                <p className="testimonial__content-progress-stats-stat-subtitle">
                  Active Products
                </p>
              </li>
              <li className="testimonial__content-progress-stats-stat">
                <h2 className="testimonial__content-progress-stats-stat-title">
                  350+
                </h2>
                <p className="testimonial__content-progress-stats-stat-subtitle">
                  Organic Orchards
                </p>
              </li>
              <li className="testimonial__content-progress-stats-stat">
                <h2 className="testimonial__content-progress-stats-stat-title">
                  25+
                </h2>
                <p className="testimonial__content-progress-stats-stat-subtitle">
                  Years of Farming
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
