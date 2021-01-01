import React from "react"
import { graphql } from "gatsby"

import BgImage from "../components/BgImage"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import MastWrap from "../components/MastWrap"
import PageHeading from "../components/PageHeading"

export default function Home({ data }) {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  return (
    <Layout>
      <MastWrap>
        <section>
          <div>
            <BgImage
              title="hero"
              fluid={sources}
              imgStyle={{ objectFit: "contain" }}
              height="100vh"
              mobileHeight="92vh" // 100vh minus top navbar
              overlayColor="#04040454"
            >
              <PageHeading heading="//creator" />
              <PageHeading heading="//developer" />
              <PageHeading heading="//coffee addict" />
            </BgImage>
          </div>
        </section>
        <Footer />
      </MastWrap>
    </Layout>
  )
}

export const query = graphql`
  query Index {
    mobileImage: file(relativePath: { eq: "bg/01.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    desktopImage: file(relativePath: { eq: "bg/01-desktop.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
  }
`
