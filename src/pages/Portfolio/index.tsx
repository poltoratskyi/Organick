import React from "react";

import "./Style.scss";

import PortfoliItems from "../../components/PortfolioItems";
import Newsletter from "../../components/footers/Newsletter";

import portfolio from "../../data/portfolio";

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="page-banner page-banner_portfolio-standard">
        <h1 className="page-banner__text">Portfolio Standard</h1>
      </div>

      <div className="container">
        <ul className="portfolio">
          {portfolio.map((item) => (
            <li className="portfolio__list" key={item.id}>
              <PortfoliItems {...item} />
            </li>
          ))}
        </ul>
      </div>

      <Newsletter />
    </>
  );
};

export default Portfolio;
