import React from "react"
import { Link } from "gatsby"

// import twitter from "../images/social/01.svg"
// import twitter2 from "../images/social/02.svg"
// import facebook from "../images/social/03.svg"
// import facebook2 from "../images/social/04.svg"
// import linkedin from "../images/social/05.svg"

const Footer = () => (
  <footer className="mastfoot container-fluid white-bg">
    <div className="row">
      <article className="credits col-md-6">
        <p className="font4 dark">
          Copyright &copy; 2021{" "}
          <Link target="_blank" to="#">
            timecode.software
          </Link>
        </p>
      </article>
      {/* @TODO
        - check the links for the footer
        - update the icons
    */}
      {/* <ul className="foot-social col-md-6 text-right">
        <li>
          <Link to="#">
            <img alt="twitter" title="twitter" src={twitter} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img alt="twitter2" title="twitter2" src={twitter2} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img alt="facebook" title="facebook" src={facebook} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img alt="facebook2" title="facebook2" src={facebook2} />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img alt="linkedin" title="linkedin" src={linkedin} />
          </Link>
        </li>
      </ul> */}
    </div>
  </footer>
)

export default Footer
