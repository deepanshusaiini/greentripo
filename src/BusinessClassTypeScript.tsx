import React from "react";
import NavBarTypeScript from "./NavBarTypeScript";
import { routes } from "./assets/constants/places";
import NavOneTypeScript from "./NavOneTypeScript";
import BusinessClassScreenTypeScript from "./BusinessClassScreenTypeScript";
export default function BusinessClass() {
  return (
    <div>
      <NavOneTypeScript />
      <NavBarTypeScript from={""} />
      <BusinessClassScreenTypeScript />
    </div>
  );
}
