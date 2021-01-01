import React from "react"
import styled from "styled-components"

const Wrapper = styled.article`
  font-family: "Montserrat", sans-serif;

  span {
    display: none;

    @media screen and (max-width: 480px) {
      display: inline;
      letter-spacing: 8px;
      line-height: 36px;
      text-transform: uppercase;
      padding: 20px;
      padding-left: 28px;
      position: relative;
      font-size: 18px;
      padding: 10px 10px 10px 14px;
      top: 20vh;
    }
  }
`

const PageHeading = ({ heading }) => (
  <Wrapper>
    <h1>
      <span>{heading}</span>
    </h1>
  </Wrapper>
)

export default PageHeading
