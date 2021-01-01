import React from "react"
import { Gallery } from "gatsby-theme-gallery"

import Footer from "../components/Footer"
import Layout from "../components/Layout"
import MastWrap from "../components/MastWrap"

export default function Home() {
  return (
    <Layout>
      <MastWrap>
        <Gallery />
        <Footer />
      </MastWrap>
    </Layout>
  )
}
