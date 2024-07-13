import Feedback from "../../components/contact-us/Feedback";
import Location from "../../components/contact-us/Location";
import Newsletter from "../../components/footers/Newsletter";

const PasswordProtected: React.FC = () => {
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
