import "./Style.scss";

const policyInfo = [
  {
    id: 1,
    img: "../icons/About/Policy-min.jpg",
    title: "Return Policy",
    descr:
      "Our hassle-free return policy ensures your satisfaction. If you're not happy with your purchase.",
  },

  {
    id: 2,
    img: "../icons/About/Fresh-min.jpg",
    title: "100% Fresh",
    descr:
      "Experience the delight of freshness with our products sourced directly from local farms and producers.",
  },

  {
    id: 3,
    img: "../icons/About/Support-min.jpg",
    title: "Support 24/7",
    descr:
      "Our dedicated support team is available around the clock to assist you with any queries or concerns.",
  },

  {
    id: 4,
    img: "../icons/About/Secured-min.jpg",
    title: "Secured Payment",
    descr:
      "Feel confident with our secure payment options. Your transactions are protected.",
  },
];

const Choose: React.FC = () => {
  return (
    <section className="choose">
      <div className="container">
        <div className="choose__wrapper">
          <div className="choose__content">
            <div className="choose__content-info">
              <div className="choose__content-info-title">
                <span className="choose__content-info-title-subheading">
                  Why Choose Us?
                </span>

                <h2 className="choose__content-info-title-heading">
                  We do not buy from the open market & traders.
                </h2>

                <p className="choose__content-info-title-description">
                  At our core, we believe in providing you with the best,
                  directly from nature.
                </p>
              </div>

              <div className="choose__content-info-organic">
                <img
                  src="../icons/About/Avocado.png"
                  loading="lazy"
                  alt="Vegan Food"
                  id="about-us-img"
                />

                <div className="choose__content-info-organic-description">
                  <h4 className="choose__content-info-organic-description-title">
                    100% Natural Product
                  </h4>

                  <p className="choose__content-info-organic-description-text">
                    Carefully sourced from organic farms, ensuring purity and
                    quality.
                  </p>
                </div>
              </div>

              <div className="choose__content-info-organic">
                <img
                  src="../icons/About/Coconut.png"
                  loading="lazy"
                  alt="Mailbox Quality"
                  id="about-us-img"
                />

                <div className="choose__content-info-organic-description">
                  <h4 className="choose__content-info-organic-description-title">
                    Increases resistance
                  </h4>

                  <p className="choose__content-info-organic-description-text">
                    Our products are formulated to enhance your body's natural
                    defense mechanisms.
                  </p>
                </div>
              </div>
            </div>

            <img src="../img/About/ChooseUs-min.jpg" alt="ChooseUs-min" />
          </div>

          <ul className="choose__feature">
            {policyInfo.map((item) => (
              <li key={item.id} className="choose__feature-item">
                <img src={item.img} alt={item.title} />

                <h3 className="choose__feature-item-title"> {item.title}</h3>

                <p className="choose__feature-item-description">{item.descr}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Choose;
