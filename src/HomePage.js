import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import NavBar from "./NavBar";
import LeftContent from "./LeftContent";
import Form from "./Form";
import PopUp from "./PopUp";
import FormSection from "./FormSection";
import Map from "./Map";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import { routes } from "./assets/constants/places";

function HomePage() {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopUp(true);
        }, 1000);
    }, []);

    const onSendData = (data) => {
        console.log("DATA IS ", data);
    };


    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <NavBar from={routes.Home} />
                <div className="main-content">
                    <LeftContent />
                    <Form items={onSendData} />
                </div>
            </div>

            {showPopUp && <PopUp onClose={() => setShowPopUp(false)} />}
            <FormSection />

            <Map />
        </div>
    );
}

export default HomePage;
