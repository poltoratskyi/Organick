import { useSelector } from "react-redux";

import { selectSinglePortfolio } from "../../redux/slices/singlePortfolioSlice";

import "./Style.scss";

import Newsletter from "../../components/footers/Newsletter";
import { PortfolioItem } from "../../components/PortfolioItems";
import { selectIsSkeletonLoading } from "../../redux/slices/singlePortfolioSlice";

import Skeleton from "../../components/Skeleton/PostSingle";

const PortfolioSingle: React.FC = () => {
  // Initial state selected -> PortfolioSlice.js
  const viewedPortfolio = useSelector(selectSinglePortfolio);

  // Initial state selected -> singlePostSlice.js
  const isSkeletonLoading = useSelector(selectIsSkeletonLoading);

  return (
    <>
      <section className="portfolio-single">
        {isSkeletonLoading
          ? [...new Array(1)].map((_, index) => <Skeleton key={index} />)
          : viewedPortfolio.map((item: PortfolioItem) => (
              <div key={item.id}>
                <div
                  className="page-banner page-banner_portfolio-standard"
                  style={{
                    height: "750px",
                    position: "relative",
                    background: `url(${item.imageUrl}) center center/cover no-repeat`,
                  }}
                />

                <div className="portfolio-single__header">
                  <div className="portfolio-single__header-content">
                    <h1 className="portfolio-single__header-content-title">
                      {item.title}
                    </h1>

                    <p className="portfolio-single__header-content-subtitle">
                      {item.subtitle}
                    </p>
                  </div>

                  <ul className="portfolio-single__header-lists">
                    <li className="portfolio-single__header-lists-list">
                      <h3 className="portfolio-single__header-lists-list-text">
                        Date
                      </h3>
                      <b>:</b>
                      {item.fullDataName} {item.dataNumber}, {item.year}
                    </li>

                    <li className="portfolio-single__header-lists-list">
                      <h3 className="portfolio-single__header-lists-list-text">
                        Client
                      </h3>
                      <b>:</b>
                      {item.client}
                    </li>

                    <li className="portfolio-single__header-lists-list">
                      <h3 className="portfolio-single__header-lists-list-text">
                        Category
                      </h3>
                      <b>:</b>
                      {item.category}
                    </li>

                    <li className="portfolio-single__header-lists-list">
                      <h3 className="portfolio-single__header-lists-list-text">
                        Service
                      </h3>
                      <b>:</b>
                      {item.service}
                    </li>
                  </ul>
                </div>

                <div className="container">
                  <div className="portfolio-single__content">
                    <h4 className="portfolio-single__content-title">
                      About The Farm:
                    </h4>

                    <p className="portfolio-single__content-descr">
                      {item.aboutTheFarm}
                    </p>

                    <img
                      className="portfolio-single__content-img"
                      src={item.imageUrlContent}
                      alt="OrganicProducts"
                      loading="lazy"
                    />

                    <span className="portfolio-single__content-mark">
                      The {item.title}
                    </span>

                    <h4 className="portfolio-single__content-title">
                      How To Farm:
                    </h4>

                    <p className="portfolio-single__content-descr">
                      {item.aboutTheFarm}
                    </p>

                    <p className="portfolio-single__content-descr">
                      {item.aboutTheFarmSub}
                    </p>

                    <h4 className="portfolio-single__content-title">
                      Conclusion:
                    </h4>

                    <p className="portfolio-single__content-descr">
                      {item.conclusion}
                    </p>

                    <p className="portfolio-single__content-descr">
                      {item.conclusionSub}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </section>
      <Newsletter />
    </>
  );
};

export default PortfolioSingle;
