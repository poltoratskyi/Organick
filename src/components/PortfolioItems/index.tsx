import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./Style.scss";

import { setSinglePortfolio } from "../../redux/slices/singlePortfolioSlice";

export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  client: string;
  fullDataName: string;
  dataNumber: number;
  year: number;
  category: string;
  service: string;
  aboutTheFarm: string;
  aboutTheFarmSub: string;
  imageUrlContent: string;
  howToFarm: string;
  conclusion: string;
  conclusionSub: string;
}

const PortfoliItems: React.FC<PortfolioItem> = ({
  id,
  imageUrl,
  title,
  subtitle,
  client,
  fullDataName,
  dataNumber,
  year,
  category,
  service,
  aboutTheFarm,
  aboutTheFarmSub,
  imageUrlContent,
  howToFarm,
  conclusion,
  conclusionSub,
}) => {
  const dispatch = useDispatch();
  const toSinglePortfolio = () => {
    const portfolioItems = [
      {
        id,
        imageUrl,
        title,
        subtitle,
        client,
        fullDataName,
        dataNumber,
        year,
        category,
        service,
        aboutTheFarm,
        aboutTheFarmSub,
        imageUrlContent,
        howToFarm,
        conclusion,
        conclusionSub,
      },
    ];

    dispatch(setSinglePortfolio(portfolioItems));

    localStorage.setItem("viewedPortfolio", JSON.stringify(portfolioItems));
  };

  return (
    <>
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
          toSinglePortfolio();
        }}
        to={`/portfolio/${title
          .replace(/\s+/g, "-")
          .replace(/&/g, "and")
          .toLocaleLowerCase()}/${id}`}
      >
        <div className="portfolio__list-link">
          <img
            className="portfolio__list-link-img"
            loading="lazy"
            src={imageUrl}
            alt={title}
          />

          <div className="portfolio__list-link-wrap">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="23" r="23" fill="#7EB693" />
              <path
                d="M21 28L26.5 22.5L21 17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>

      <h3 className="portfolio__list-title">{title}</h3>

      <span className="portfolio__list-subtitle">{category}</span>
    </>
  );
};

export default PortfoliItems;
