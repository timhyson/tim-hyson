import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "../styles/GlobalStyle"
import theme from "../styles/theme"
import Navbar from "./Nav/Navbar"
import SideNav from "./Nav/SideNav"
import SideBar from "./Nav/SideBar"

// CSS ––––––––––––––––––––––––––––––––––––––––––––––––––
import "../styles/bootstrap.css"
import "../styles/isotope.css"
import "../styles/main.css"
import "../styles/main-responsive.css"

// LESS ––––––––––––––––––––––––––––––––––––––––––––––––––
import "../less/fonts.less"

const Layout = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <Helmet>
        <html lang="en" />

        {/* Basic Page Info –––––––––––––––––––––––––––––––––––––––––––––––––– */}
        <meta charset="utf-8" />
        <title>Tim Hyson</title>
        <meta name="description" content="TIM HYSON" />
        <meta name="author" content="timecode.software" />

        {/* Mobile Specific Metas –––––––––––––––––––––––––––––––––––––––––––––––––– */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon –––––––––––––––––––––––––––––––––––––––––––––––––– */}
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />

        {/* FONT –––––––––––––––––––––––––––––––––––––––––––––––––– */}
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,300,600%7CMontserrat:400,700%7COpen+Sans:400,300,700,800"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata:400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <SideNav />
      <SideBar />
      <main>{children}</main>
    </ThemeProvider>
  </>
)

export default Layout
