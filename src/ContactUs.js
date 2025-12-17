import { useState } from "react";
import NavOne from "./NavOne";
import NavBar from "./NavBar";
import Map from "./Map";
import { FaPhone } from "react-icons/fa";
import ContactScreen from "./ContactScreen";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";
import ContactDetail from "./ContactDetail";
import ContactPara from "./ContactPara";
import { useLocation } from "react-router-dom";


function ContactUs() {
    const location = useLocation();
    console.log('route name is ->', location.pathname)

    const onData = (data) => {
        console.log('NAME IS', data)
    }

    return (
        <div className="container">
            <div >
                <NavOne />
            </div>

            <div>
                <NavBar from={'CONTACTUS'} />
            </div>

            <div>
                <ContactScreen />
            </div>

            <div>
                <ContactForm call={onData} />
            </div>

            <div>
                <Map />
            </div>

            <div>
                <ContactLocation />
            </div>

            <div>
                <ContactDetail />
            </div>

            <div>
                <ContactPara />
            </div>
        </div>
    )
}
export default ContactUs;