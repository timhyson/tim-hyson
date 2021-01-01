import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import BgImage from "../components/BgImage"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Liner from "../components/Liner"
import MastWrap from "../components/MastWrap"

export default function Home({ data }) {
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  const DetailHeading = styled.h2`
     {
      color: #121212;
      font-family: "Montserrat", sans-serif;
      font-size: 48px;
      line-height: 58px;
      letter-spacing: 8px;
      text-transform: uppercase;
      margin: 0.67em 0 10px;

      @media screen and (max-width: 480px) {
        font-size: 18px;
        line-height: 25px;
        padding: 10px 10px 10px 14px;
      }
    }
  `
  const DetailSubHeading = styled.h3`
     {
      color: #8e8e8e;
      font-family: Inconsolata, serif;
      margin-top: 20px;
      font-size: 24px;
      line-height: 40px;
      letter-spacing: 1px;
      font-weight: 200;
      margin-bottom: 0;
    }
  `

  return (
    <Layout>
      <MastWrap>
        <section>
          <div>
            <BgImage
              title="hero"
              fluid={sources}
              // imgStyle={{ objectFit: "contain" }}
              // height="100vh"
              mobileHeight="92vh"
              overlayColor="#04040454"
            />
          </div>
        </section>

        <section className="sub-wrap pad-top pad-bottom about white-bg">
          <div className="container">
            <div className="row">
              <article className="col-md-6 text-left caption">
                <DetailHeading>
                  Tim Hyson
                </DetailHeading>
                <Liner />
                <DetailSubHeading>
                  Photographer & Filmmaker. Web developer. Lover of coffee and
                  good stories. Currently residing in London, UK.
                </DetailSubHeading>
              </article>
            </div>
          </div>
        </section>
        <Footer />
      </MastWrap>
    </Layout>
  )
}

export const query = graphql`
  query About {
    mobileImage: file(relativePath: { eq: "bg/02.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    desktopImage: file(relativePath: { eq: "bg/02-desktop.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
  }
`
