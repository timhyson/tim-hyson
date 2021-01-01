import styled from "@emotion/styled"

const Grid = styled.div`
  display: grid;
  padding-top: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 60vh;
  grid-gap: 0.5rem;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
  }
`

export default Grid
