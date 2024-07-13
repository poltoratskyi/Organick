import "./Style.scss";

const sailsCartBanners = [
  {
    id: 1,
    img: "/img/Card/1-min.jpg",
    title: "Natural!!",
    descr: "Get Garden Fresh Fruits",
  },
  {
    id: 2,
    img: "/img/Card/2-min.jpg",
    title: "Offer!!",
    descr: "Get 10% off on Vegetables",
  },
];

const SailsCart: React.FC = () => {
  return (
    <div className="card">
      <div className="container">
        <ul className="card__content">
          {sailsCartBanners.map((item) => (
            <li
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              key={item.id}
              className="card__content-item"
            >
              <span
                style={{
                  color: item.id === 1 ? "white" : "#7eb693",
                }}
                className="card__content-item-subheading"
              >
                {item.title}
              </span>
              <h2
                style={{ color: item.id === 1 ? "white" : "#274c5b" }}
                className="card__content-item-heading"
              >
                {item.descr}
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SailsCart;
