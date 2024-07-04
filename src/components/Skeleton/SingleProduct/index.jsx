import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1400}
    height={650}
    viewBox="0 0 1400 650"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* product img */}
    <rect x="180" y="0" rx="16" ry="16" width="330" height="330" />
    {/* descr */}
    <rect x="700" y="0" rx="0" ry="0" width="400" height="50" />
    <rect x="700" y="65" rx="0" ry="0" width="200" height="25" />
    <rect x="700" y="110" rx="0" ry="0" width="650" height="65" />
    <rect x="700" y="195" rx="16" ry="16" width="230" height="85" />

    {/* additional btns */}
    <rect x="410" y="400" rx="16" ry="16" width="300" height="75" />
    <rect x="730" y="400" rx="16" ry="16" width="255" height="75" />
    {/* descr */}
    <rect x="400" y="500" rx="0" ry="0" width="600" height="35" />
  </ContentLoader>
);

export default MyLoader;
