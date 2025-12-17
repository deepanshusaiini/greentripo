import React from "react";

import DetailColumnTypeScript from "./DetailColumnTypeScript";
import NavOneTypeScript from "./NavOneTypeScript";
import NavBarTypeScript from "./NavBarTypeScript";
import ContactLocationTypeScript from "./ContactLocationTypeScript";
import ContactDetailTypeScript from "./ContactDetailTypeScript";
import { routes } from "./assets/constants/places";
import ContactParaTypeScript from "./ContactParaTypeScript";
import ViewScreenTypeScript from "./ViewScreenTypeScript";

const ViewDetailTypeScript = () => {
  return (
    <div className="detail-conatiner">
      <div>
        <NavOneTypeScript />
      </div>

      <div>
        <NavBarTypeScript from="" />
      </div>

      <div className="viewdetail-screen">
        <ViewScreenTypeScript />
      </div>

      <div className="column-container">
        <DetailColumnTypeScript />
      </div>

      <div>
        <ContactLocationTypeScript />
      </div>

      <div>
        <ContactDetailTypeScript />
      </div>

      <div>
        <ContactParaTypeScript />
      </div>
    </div>
  );
};

export default ViewDetailTypeScript;
