import { faInstagram,faFacebook,faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <section className="social_media_container">
      <div className="social_media_content">
        <div className="social_media_items">
        <div className="social_media_item">
        <FontAwesomeIcon icon={faInstagram} />
        <a href="https://www.instagram.com/modamia.style.yourway/">Instagram</a>
        </div>
        <div className="social_media_item">
        <FontAwesomeIcon icon={faFacebook} />
        <a href="https://www.facebook.com/modamia.style.yourway">Facebook</a>
        </div>
        <div className="social_media_item">
        <FontAwesomeIcon icon={faPinterest} />
        <a href="https://www.pinterest.com/ModamiaStyleYourWay/">Pinterest</a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
