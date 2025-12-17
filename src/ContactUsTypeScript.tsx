import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import ContactScreenTypeScript from "./ContactScreenTypeScript";
import ContactForm from "./ContactForm";

import { useLocation } from "react-router-dom";
import NavOneTypeScript from "./NavOneTypeScript";
import NavBarTypeScript from "./NavBarTypeScript";
import ContactLocationTypeScript from "./ContactLocationTypeScript";
import ContactDetailTypeScript from "./ContactDetailTypeScript";
import ContactParaTypeScript from "./ContactParaTypeScript";
import MapTypeScript from "./MapTypeScript";
import ContactFormTypescript from "./ContactFormTypeScript";

const ContactUsTypeScript = () => {
  const location = useLocation();
  console.log("route name is ->", location.pathname);

  const onData = (data: any) => {
    console.log("NAME IS", data);
  };

  return (
    <div className="container">
      <div>
        <NavOneTypeScript />
      </div>

      <div>
        <NavBarTypeScript from={"contactUs"} />
      </div>

      <div>
        <ContactScreenTypeScript />
      </div>

      <div>
        <ContactFormTypescript call={onData} />
      </div>

      <div>
        <MapTypeScript />
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
export default ContactUsTypeScript;
