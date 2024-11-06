import { Link } from "react-router-dom";

export interface PostItem {
  id: string;
  parent_id: number;
  dataNumber: number;
  sortDate: string;
  year: number;
  imageUrl: string;
  fullDataName: string;
  dataName: string;
  authorFullName: string;
  authorFirstName: string;
  authorLastName: string;
  title: string;
  description: string;
  additionalText: string;
  introHeading: string;
  introContent: string;
  quote: string;
  subheadingOne: string;
  subheadingOneContent: string;
  conclusionListItems: [];
  introListItems: [];
}

const PostItems: React.FC<PostItem> = ({
  id,
  imageUrl,
  dataNumber,
  dataName,
  authorFullName,
  title,
  description,
  year,
  authorLastName,
}) => {
  return (
    <li className="news__content-posts-post">
      <img
        className="news__content-posts-post-img"
        loading="lazy"
        src={imageUrl}
        alt={title}
      />

      <div className="news__content-posts-post-info">
        <div className="news__content-posts-post-info-data">
          <div className="news__content-posts-post-info-data-value">
            {dataNumber}
            <span className="news__content-posts-post-info-data-value-name">
              {dataName}
            </span>
          </div>
        </div>

        <div className="news__content-posts-post-info-content">
          <div className="news__content-posts-post-info-content-authorFullName">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path
                d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z"
                fill="#EFD372"
              />
            </svg>

            <Link to={`/posts/${year}/${authorLastName.toLocaleLowerCase()}`}>
              <span
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="news__content-posts-post-info-content-author-name"
              >
                By {authorFullName}
              </span>
            </Link>
          </div>

          <div className="news__content-posts-post-info-content-description">
            <Link
              to={`/blog/${title
                .replace(/\s+/g, "-")
                .toLocaleLowerCase()}/${id}`}
            >
              <h4
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className="news__content-posts-post-info-content-description-title"
              >
                {title}
              </h4>
            </Link>

            <p className="news__content-posts-post-info-content-description-descr">
              {description}
            </p>
          </div>

          <button
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="button button_more-news"
          >
            <Link
              id="link"
              to={`/blog/${title
                .replace(/\s+/g, "-")
                .toLocaleLowerCase()}/${id}`}
            >
              Read More
              <svg
                id="arrow"
                width="22"
                height="22"
                viewBox="0 0 19 19"
                fill="none"
              >
                <circle cx="9.2" cy="9.2" r="9.2" fill="#335B6B" />
                <path
                  d="M9.47641 6.12891L12.871 9.19342L9.47641 12.2579M12.3995 9.19342H5.51611"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </li>
  );
};
export default PostItems;
