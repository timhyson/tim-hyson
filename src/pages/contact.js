import React from "react"
import { ErrorMessage, Formik, Form, Field } from "formik"
import { graphql, navigate } from "gatsby"
import styled from "styled-components"

import BgImage from "../components/BgImage"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Liner from "../components/Liner"
import MastWrap from "../components/MastWrap"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

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
      font-size: 28px;
      line-height: 35px;
      letter-spacing: 8px;
      text-transform: uppercase;
      margin-bottom: 0;

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
      font-size: 24px;
      line-height: 31px;
      margin-bottom: 30px;
    }
  `

  const SubmitButton = styled.button`
    border: 3px solid;
    border-color: #bf1920;
    color: #bf1920;
    background: transparent;
    transition: all 0.4s ease-in-out;
    border-radius: 0;
    text-decoration: none;
    padding: 10px 10px 10px 12px;
    font-size: 12px;
    line-height: 19px;
    text-transform: uppercase;
    letter-spacing: 4px;

    :hover {
      border-color: #bf1920;
      color: #fff;
      background: #bf1920;
      transition: all 0.4s ease-in-out;
    }
  `

  const ContactForm = () => (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      onSubmit={(values, actions) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...values }),
        })
          .then(() => {
            alert("Thanks! Your message has been sent.")
            actions.resetForm()
          })
          .catch(() => {
            alert("Error")
          })
          .finally(() => {
            actions.setSubmitting(false)
            navigate("/")
          })
      }}
      validate={values => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        const errors = {}
        if (!values.name) {
          errors.name = "Name Required"
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = "Valid Email Required"
        }
        if (!values.message) {
          errors.message = "Message Required"
        }
        return errors
      }}
    >
      {() => (
        <Form name="contact" data-netlify="true">
          <Field name="name" className="font2" placeholder="Your Name" />
          <ErrorMessage name="name" style={{ color: "red !important" }} />

          <Field
            name="email"
            className="border-form font2"
            placeholder="Valid email address"
          />
          <ErrorMessage name="email" />

          <Field
            name="message"
            className="border-form font2"
            component="textarea"
            placeholder="Your Message"
            cols="40"
            rows="8"
          />
          <ErrorMessage name="message" />

          <div className="add-top-quarter">
            <SubmitButton type="submit">Send Message</SubmitButton>
          </div>
        </Form>
      )}
    </Formik>
  )

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
              overlayColor="#04040454"
            />
          </div>
        </section>

        <section className="mastwrap spaced-left">
          <section className="sub-wrap add-top-half add-bottom-half">
            <div className="container">
              <div className="row">
                <article className="col-md-6 text-left contact-box add-top-half">
                  <DetailHeading>get in touch</DetailHeading>
                  <Liner />
                  <DetailSubHeading>
                    I aim to respond within 24 hours
                  </DetailSubHeading>

                  <div className="form-wrapper">
                    <div id="contact-form-wrap">
                      <div className="contact-item pad-common ">
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </MastWrap>
    </Layout>
  )
}

export const query = graphql`
  query Contact {
    mobileImage: file(relativePath: { eq: "bg/03.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
    desktopImage: file(relativePath: { eq: "bg/03-desktop.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
  }
`
