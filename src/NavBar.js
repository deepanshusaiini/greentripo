import React from "react";
import { Link, data } from "react-router-dom";
import { routes } from "./assets/constants/places";

function NavBar({ from }) {


  const onHomePage = from == routes.Home;  //Home ===Home
  // const onAboutUsPage = from == routes.AboutUs;
  // const onContactUsPage = from == routes.ContactUs;
  // const onBestDealsPage = from == routes.BestDeals;
  // const onBusinessClassPage = from == routes.BusinessClass;
  // const onDestinationsPage = from == routes.Destinations;

  const linkColor = onHomePage ? "linkW" : "linkB";
  const backgroundColor = onHomePage ? "transparent" : "white"
  console.log("page check", onHomePage);

  return (
    <nav
      style={{ background: backgroundColor, }} className="navbar" >
      <h2>
        {" "}
        Green<span >Tripo </span>{" "}
      </h2>

      <ul className="nav-links">
        <li>
          <Link className={linkColor} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/AboutUs">
            AboutUs
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/BestDeals">
            BestDeals
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/BusinessClass">
            BusinessClass
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/Destinations">
            Destinations
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/ContactUs">
            ContactUs
          </Link>
        </li>

      </ul>
      <button className="call-btn">CALL NOW </button>
    </nav>
  );
}
export default NavBar;