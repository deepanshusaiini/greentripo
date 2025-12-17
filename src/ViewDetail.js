import React from "react";
import NavOne from "./NavOne";
import NavBar from "./NavBar";
import BestDealsScreen from "./BestDealsScreen";
import DetailColumn from "./DetailColumn";
import ContactLocation from "./ContactLocation";
import ContactPara from "./ContactPara";
import ContactDetail from "./ContactDetail";
import ViewScreen from "./ViewScreen";

export default function ViewDetail() {
    return (
        <div className="detail-conatiner">
            <div>
                <NavOne />
            </div>

            <div>
                <NavBar />
            </div>

            <div className="viewdetail-screen">
                <ViewScreen />
            </div>

            <div className="column-container">
                <DetailColumn />
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
    );
}
