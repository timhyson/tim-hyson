import React from "react"
import { Link } from "gatsby"

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
    </div>
  </footer>
)

export default Footer
