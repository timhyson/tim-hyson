/* eslint react/jsx-no-comment-textnodes: "off" */

import React from "react"

const SideBar = () => (
  <>
    <section className="sticky-sidebar white-bg fullheight">
      <div className="valign-bottom">
        <ul>
          <li>//creator</li>
          <li>//developer</li>
          <li>//coffee addict</li>
        </ul>
      </div>
    </section>

    {/* dummy overlay for whole page when sidebar is active */}
    <section class="featured-mask-overlay"></section>
  </>
)

export default SideBar
