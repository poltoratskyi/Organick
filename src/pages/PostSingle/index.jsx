import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchSinglePost,
  selectSinglePost,
} from "../../redux/slices/singlePostSlice";
import { useParams } from "react-router-dom";

import Newsletter from "../../components/footers/Newsletter";

import "./Style.scss";

const NewsSingle = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();

  // Initial state selected -> singlePostSlice.js
  const singleNews = useSelector(selectSinglePost);

  useEffect(() => {
    if (postId) {
      dispatch(fetchSinglePost(postId));
    }
  }, [postId]);

  return (
    <>
      <section className="news-single">
        {singleNews.map((item) => (
          <div key={item.parent_id}>
            <div
              className="page-banner page-banner_news-single"
              style={{
                position: "relative",
                background: `url(${item.img}) center center/cover no-repeat`,
              }}
            />

            <div className="news-single__header">
              <div className="news-single__header-author">
                <p className="news-single__header-author-data">
                  Posted On:
                  <span className="news-single__header-author-data-value">
                    {item.fullDataName} {item.dataNumber} {item.year}
                  </span>
                </p>

                <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
                  <path
                    d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z"
                    fill="#274c5b"
                  />
                </svg>

                <Link to={`/posts/${item.year}/${item.author}`}>
                  <span className="news-single__header-author-name">
                    By {item.author}
                  </span>
                </Link>
              </div>

              <h1 className="news-single__header-title">{item.title}</h1>

              <p className="news-single__header-descr">{item.description}</p>
            </div>

            <ul className="container">
              <li className="news-single__content">
                <h2 className="news-single__content-title">
                  {item.paragraphFirst}
                </h2>
                <p className="news-single__content-descr">
                  {item.contentParagraphFirst}
                </p>

                <h2 className="news-single__content-title">
                  {item.paragraphSecond}
                </h2>
                <p className="news-single__content-descr">
                  {item.contentParagraphSecond}
                </p>

                <h2 className="news-single__content-title">
                  {item.conclusion}
                </h2>
                <p className="news-single__content-descr">
                  {item.contentConclusion}
                </p>
              </li>
            </ul>
          </div>
        ))}
      </section>

      <Newsletter />
    </>
  );
};

export default NewsSingle;
