import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./assets/constants/places";

interface NavBarProps {
  from?: string;
}

const NavBarTypeScript: React.FC<NavBarProps> = ({ from }) => {
  const AtHomePage = from ? from == routes.Home : "";
  // const AtHomePage = from == routes.Home;
  // const forHomePage = "Home" == "Home";// always true

  // const forOtherPage = "" == "Home";// always false

  const linkColor = AtHomePage ? "linkW" : "linkB";
  const backgroundColor = AtHomePage ? "transparent" : "white";

  console.log("page check", AtHomePage);

  return (
    <nav style={{ background: backgroundColor }} className="navbar">
      <h2>
        Green<span>Tripo</span>
      </h2>

      <ul className="nav-links">
        <li>
          <Link className={linkColor} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/AboutUsTypeScript">
            AboutUs
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/BestDealsTypeScript">
            BestDeals
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/BusinessClassTypeScript">
            BusinessClass
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/DestinationsTypeScript">
            Destinations
          </Link>
        </li>

        <li>
          <Link className={linkColor} to="/ContactUsTypeScript">
            ContactUs
          </Link>
        </li>
      </ul>

      <button className="call-btn">CALL NOW</button>
    </nav>
  );
};

export default NavBarTypeScript;
