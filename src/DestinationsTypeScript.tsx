import React from "react";
import { routes } from "./assets/constants/places";
import NavOneTypeScript from "./NavOneTypeScript";
import NavBarTypeScript from "./NavBarTypeScript";
import DestinationsScreenTypeScript from "./DestinationsScreenTypeScript";

const DestinationsTypeScript = () => {
  return (
    <div>
      <NavOneTypeScript />
      <NavBarTypeScript from={routes.Destinations} />
      <DestinationsScreenTypeScript />
    </div>
  );
};
export default DestinationsTypeScript;
