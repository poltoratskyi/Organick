import { Link } from "react-router-dom";

import { useResetFilters } from "../../../hooks/useProductActions";

import "./Style.scss";

const gallery = [
  {
    id: 1,
    text: "Organic Juice",
    img: "../img/Gallery/Organic Juice-min.jpg",
  },
  {
    id: 2,
    text: "Organic Food",
    img: "../img/Gallery/Organic Food-min.jpg",
  },
  {
    id: 3,
    text: "Nuts Cookis",
    img: "../img/Gallery/Nuts Cookis-min.jpg",
  },
];

const Gallery: React.FC = () => {
  // Reset filters -> Shop
  const { resetFilters } = useResetFilters();

  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__content">
          <ul className="gallery__content-items">
            {gallery.map((item) => (
              <li className="gallery__content-items-item" key={item.id}>
                <img
                  className="gallery__content-items-item-img"
                  src={item.img}
                  alt={item.text}
                  loading="lazy"
                />
                <Link to="/shop">
                  <span
                    onClick={() => {
                      window.scrollTo(0, 0);
                      resetFilters();
                    }}
                    className="gallery__content-items-item-text"
                  >
                    {item.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
