import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={1150}
    viewBox="0 0 1400 1150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="16" ry="16" width="100%" height="600" />

    <rect x="200" y="300" rx="16" ry="16" width="1000" height="400" />

    <rect x="225" y="725" rx="16" ry="16" width="950" height="50" />

    <rect x="225" y="785" rx="16" ry="16" width="950" height="50" />

    <rect x="225" y="845" rx="16" ry="16" width="950" height="50" />
  </ContentLoader>
);

export default MyLoader;
