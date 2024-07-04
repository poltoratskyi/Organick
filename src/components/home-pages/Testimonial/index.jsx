import React from "react";

import "./Style.scss";

const Testimonial = () => {
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

          <div className="testimonial__content-person">
            <img
              className="testimonial__content-person-img"
              src="../img/Testimonial/Woman-min.jpg"
              loading="lazy"
              alt="Woman"
            />

            <p className="testimonial__content-person-descr">
              I'm extremely satisfied with the quality of their products. Their
              commitment to <br /> excellence is evident in every bite. I can't
              recommend them enough!
            </p>

            <h4 className="testimonial__content-person-name">Sara Taylor</h4>

            <span className="testimonial__content-person-role">Consumer</span>
          </div>

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
