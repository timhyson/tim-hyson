import styled from "styled-components"
import { Link } from "gatsby"

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #666;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw 0 0;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #bf1920;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #bf1920;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
