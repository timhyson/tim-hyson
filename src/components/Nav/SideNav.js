import React from "react"

import NavbarLinks from "./NavbarLinks"
import SocialLinks from "./SocialLinks"
import Logo from "./Logo"

const SideNav = () => (
  <header className="masthead white-bg fullheight">
    <div className="valign">
      <div className="inner">
        <Logo maxHeight={60} maxWidth={60} />
        <nav className="mastnav font2">
          <NavbarLinks />
        </nav>
      </div>
    </div>
    <div className="inner">
      <nav className="mastnav font2" style={{ position: "absolute", bottom: "5%" }}>
        <SocialLinks />
      </nav>
    </div>
  </header>
)

export default SideNav
