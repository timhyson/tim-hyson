import styled from "styled-components"

const MastWrap = styled.section`
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -ms-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  margin-left: 240px;
  margin-right: 40vw;

  /* Larger than tablet */
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
`

export default MastWrap
