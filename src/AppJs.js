import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import AboutUs from './AboutUs'
import BestDeals from './BestDeals'
import BusinessClass from './BusinessClass'
import Destinations from './Destinations'
import ContactUs from "./ContactUs";
import ViewDetail from "./ViewDetail";
import HomePage from "./HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ViewDetail' element={<ViewDetail />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/BestDeals' element={< BestDeals />} />
        <Route path='/BusinessClass' element={<BusinessClass />} />
        <Route path='/Destinations' element={< Destinations />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
