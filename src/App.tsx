import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePageTypeScript from "./HomePageTypeScript";
import AboutUsTypeScript from "./ AboutUsTypeScript";
import BestDealsTypeScript from "./BestDealsTypeScript";
import BusinessClassTypeScript from "./BusinessClassTypeScript";
import DestinationsTypeScript from "./DestinationsTypeScript";
import ContactUsTypeScript from "./ContactUsTypeScript";
import ViewDetailTypeScript from "./ViewDetailTypeScript";

// import BackendTest from "./types/BackendTest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageTypeScript />} />
        <Route path="/BestDealsTypeScript" element={<BestDealsTypeScript />} />
        {/* <Route path="/BackendTest" element={<BackendTest />} /> */}

        <Route path="/AboutUsTypeScript" element={<AboutUsTypeScript />} />

        <Route
          path="/BusinessClassTypeScript"
          element={<BusinessClassTypeScript />}
        />
        <Route
          path="/DestinationsTypeScript"
          element={<DestinationsTypeScript />}
        />
        <Route
          path="/ViewDetailTypeScript"
          element={<ViewDetailTypeScript />}
        />
        <Route path="/ContactUsTypeScript" element={<ContactUsTypeScript />} />
      </Routes>
    </Router>
  );
};

export default App;
