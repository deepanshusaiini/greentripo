import react from "react";
import { FaPhone } from "react-icons/fa";

interface popUpProps {
  onClose: () => void;
}

const PopUpTypeScript: React.FC<popUpProps> = ({ onClose }) => {
  return (
    <div className="containers">
      <div className="popup-overlay">
        <div className="popup-box">
          <h1>SPRING SALE</h1>
          <div className="short-line"></div>
          <h3>Upto</h3>
          <div className="big-percent">
            40<span className="percent">%</span>
          </div>
          <div className="off">OFF</div>
          <div className="short-line"></div>
        </div>
        <div className="popup-right">
          <h2>Looking For Cheaper Fare?</h2>
          <p>Call now to unlock your 40% Discount instantly!</p>
          <button>CALL NOW TO CLAIM UPTO 40% OFF</button>
          <FaPhone className="icons" />
          <h3 onClick={onClose}>NO THANKS</h3>
        </div>
      </div>
    </div>
  );
};
export default PopUpTypeScript;
