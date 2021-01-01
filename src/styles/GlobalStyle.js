import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "Roboto";
    font-weight: normal;
    src: local("Roboto"), url('https://fonts.google.com/...') format("truetype");
}

body {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    color: black;
}

h1 {
    font-size: 16px;
}

a {
    text-decoration: none;
    color: inherit;
}

`
