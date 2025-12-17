import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";

const ContactLocationTypeScript = () => {
  return (
    <div className="blank-container">
      <div className="booking">
        <div className="divide">
          <FaLocationArrow className="call-phone" />
          <div>
            <div className="location-title">Location</div>
            <div style={{ fontSize: "14px", color: "rgb(211, 210, 210) " }}>
              Kowloon, Hong Kong
              <br />
              (Zip Code: 999077)
            </div>
          </div>
        </div>

        <div className="divide">
          <FaPhone className="call-phone" />
          <div>
            <div className="contacts-title">Contact Us</div>
            <div style={{ fontSize: "14px", color: "rgb(211, 210, 210)" }}>
              customercare@greentripo.com
              <br />
              +1-805-702-1258 (U.S.A.)
            </div>
          </div>
        </div>

        <div className="divide">
          {/* <div > */}
          <button className="btn-book">BOOK NOW</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactLocationTypeScript;
