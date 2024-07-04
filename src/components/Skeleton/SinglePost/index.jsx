import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={685}
    height={700}
    viewBox="0 0 685 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="16" ry="16" width="680" height="525" />

    <rect x="30" y="200" rx="16" ry="16" width="625" height="435" />
  </ContentLoader>
);

export default MyLoader;
