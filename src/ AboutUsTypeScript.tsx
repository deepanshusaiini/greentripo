import React from "react";
import NavOneTypeScript from "./NavOneTypeScript";
import AboutScreenTypeScript from "./AboutScreenTypeScript";
import { useLocation } from "react-router-dom";
import NavBarTypeScript from "./NavBarTypeScript";

const AboutUsTypeScript = () => {
  // const location = useLocation();
  return (
    <div className="detail-conatiner">
      <div>
        <NavOneTypeScript />
      </div>

      <div>
        <NavBarTypeScript />
      </div>

      <div className="aboutdetail-screen">
        <AboutScreenTypeScript />
      </div>
    </div>
  );
};

export default AboutUsTypeScript;
