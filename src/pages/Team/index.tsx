import { Link } from "react-router-dom";

import "./Style.scss";

import Newsletter from "../../components/footers/Newsletter";

const team = [
  {
    id: 1,
    img: "../img/Team/Giovani Bacardo-min.jpg",
    name: "Giovani Bacardo",
    role: "Farmer",
  },
  {
    id: 2,
    img: "../img/Team/Marianne Loreno-min.jpg",
    name: "Marianne Loreno",
    role: "Designer",
  },
  {
    id: 3,
    img: "../img/Team/Riga Pelore-min.jpg",
    name: "Riga Pelore",
    role: "Farmer",
  },
  {
    id: 4,
    img: "../img/Team/Keira Knightley-min.jpg",
    name: "Keira Knightley",
    role: "Farmer",
  },
  {
    id: 5,
    img: "../img/Team/Scott Lawrence-min.jpg",
    name: "Scott Lawrence",
    role: "Designer",
  },
  {
    id: 6,
    img: "../img/Team/Karen Allen-min.jpg",
    name: "Karen Allen",
    role: "Farmer",
  },
];

const Team: React.FC = () => {
  return (
    <>
      <div className="page-banner page-banner_team-us">
        <h1 className="page-banner__text">Our Team</h1>
      </div>

      <section className="team-us">
        <div className="container">
          <div className="team-us__content">
            <div className="team-us__content-title">
              <span className="team-us__content-title-subheading">
                The Team
              </span>

              <h2 className="team-us__content-title-heading">
                Our Organic Experts
              </h2>

              <p className="team-us__content-title-description">
                We have grown on the principles of health, ecology, and care. We
                aim to give our <br /> customers a healthy chemical-free meal
                for perfect nutrition.
              </p>
            </div>

            <ul className="team-us__content-items">
              {team.map((persone) => (
                <li className="team-us__content-items-item" key={persone.id}>
                  <img
                    className="team-us__content-items-item-img"
                    loading="lazy"
                    src={persone.img}
                    alt={persone.name}
                  />

                  <div className="team-us__content-items-item-info">
                    <div className="team-us__wrapper">
                      <h3 className="team-us__content-items-item-info-name">
                        {persone.name}
                      </h3>

                      <span className="team-us__content-items-item-info-role">
                        {persone.role}
                      </span>
                    </div>

                    <div className="team-us__content-items-item-info-links">
                      <Link to="https:/www.facebook.com" target="_blank">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 23 22"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.3305 11.3773C22.3305 5.43989 17.3311 0.62561 11.1653 0.62561C4.99944 0.62561 0 5.43989 0 11.3773C0 16.7436 4.08229 21.1916 9.42068 21.999V14.4862H6.58501V11.3773H9.42068V9.0086C9.42068 6.31442 11.088 4.82502 13.6381 4.82502C14.8598 4.82502 16.1378 5.03526 16.1378 5.03526V7.68143H14.7292C13.343 7.68143 12.9093 8.50989 12.9093 9.36139V11.3773H16.0057L15.5112 14.4862H12.9098V21.9999C18.2482 21.1931 22.3305 16.745 22.3305 11.3773Z"
                            fill="#274C5B"
                          />
                        </svg>
                      </Link>

                      <Link to="https:/twitter.com" target="_blank">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 25 20"
                          fill="none"
                        >
                          <path
                            d="M24.2556 3.0105C23.3581 3.40047 22.4086 3.65738 21.4369 3.77313C22.458 3.17518 23.226 2.22523 23.5967 1.10145C22.6312 1.66598 21.5767 2.06209 20.4784 2.2728C20.0159 1.78807 19.4596 1.40246 18.8434 1.1394C18.2272 0.876339 17.564 0.741324 16.894 0.742562C14.1815 0.742562 11.9863 2.90583 11.9863 5.57253C11.9844 5.94346 12.0269 6.31328 12.1129 6.6741C10.1678 6.58292 8.26315 6.08672 6.5208 5.21726C4.77845 4.34781 3.23677 3.12423 1.9944 1.62482C1.55854 2.35959 1.32804 3.19794 1.32698 4.05226C1.32698 5.72705 2.20076 7.20744 3.52015 8.07474C2.73845 8.05619 1.97276 7.84929 1.2881 7.47162V7.53143C1.2881 9.87414 2.98282 11.8231 5.22584 12.2667C4.80405 12.3791 4.36939 12.4361 3.93287 12.4362C3.62312 12.4367 3.31408 12.4067 3.01024 12.3464C3.6338 14.2655 5.44865 15.6611 7.59846 15.701C5.85158 17.0473 3.70688 17.7749 1.50143 17.7696C1.10996 17.769 0.718851 17.7457 0.330078 17.6998C2.57369 19.1324 5.1817 19.8902 7.8437 19.883C16.8836 19.883 21.8222 12.5209 21.8222 6.13578C21.8222 5.92643 21.8167 5.71708 21.8067 5.51272C22.7653 4.83087 23.5946 3.98353 24.2556 3.0105Z"
                            fill="#274C5B"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};
export default Team;
