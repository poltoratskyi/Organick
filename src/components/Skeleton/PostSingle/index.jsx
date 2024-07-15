import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={750}
    viewBox="0 0 1400 750"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="16" ry="16" width="100%" height="600" />

    <rect x="200" y="300" rx="16" ry="16" width="1000" height="400" />
  </ContentLoader>
);

export default MyLoader;
