import React, { useState, useEffect } from "react";
import NavBarTypeScript from "./NavBarTypeScript";
import LeftContentTypeScript from "./LeftContentTypeScript";
import FormTypeScript from "./FormTypeScript";
import PopUpTypeScript from "./PopUpTypeScript";
import FormSectionTypeScript from "./FormSectionTypeScript";
import MapTypeScript from "./MapTypeScript";
import { routes } from "./assets/constants/places";

// interface States {
//   shoPopup: boolean
// }

const HomePageTypeScript = () => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      // setShowPopUp(true);
    }, 1000);
  }, []);

  const onSendData = (data: object) => {
    //callback method
    console.log("ONSENDDATA IS ", data);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <NavBarTypeScript from={routes.Home} />
        <div className="main-content">
          <LeftContentTypeScript />
          <FormTypeScript allData={onSendData} />
        </div>
      </div>

      {showPopUp && <PopUpTypeScript onClose={() => setShowPopUp(false)} />}

      <FormSectionTypeScript />

      <MapTypeScript />
    </div>
  );
};

export default HomePageTypeScript;
