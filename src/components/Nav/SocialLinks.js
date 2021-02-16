import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { NavItem } from "./NavItem";

const SocialLinks = () => (
  <NavItem to="https://www.instagram.com/timcameras/">
    <FontAwesomeIcon icon={faInstagram} size="1x" /> Instagram
  </NavItem>
);

export default SocialLinks;
