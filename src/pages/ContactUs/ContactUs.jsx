import React from "react";

import Feedback from "../../components/contact-us/feedback/Feedback";
import Location from "../../components/contact-us/location/Location";
import Newsletter from "../../components/footers/Newsletter/Newsletter";

const PasswordProtected = () => {
  return (
    <>
      <div className="page-banner page-banner_contact-us">
        <h1 className="page-banner__text">Contact Us</h1>
      </div>

      <Feedback />

      <Location />

      <Newsletter />
    </>
  );
};

export default PasswordProtected;
