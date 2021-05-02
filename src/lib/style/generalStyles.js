import React, { useEffect } from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {
    colors,
    breakpoints,
    transitionEase
} from "../../lib/style/theme";

// Scroll to top
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Grid
export const Grid = styled.div`
  display: grid;
  row-gap: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
}
  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    ${props => props.columns === 3 &&
     'padding: 0 32px;'
     }
  }
  @media screen and (${breakpoints.desktopLarge}) {
      ${props => props.columns === 3 &&
       'padding: 0 84px;'
       }
}
`;

// Main
export const Main = (props) => {
  return (
      <main>
          {props.children}
      </main>
  );
}

// Button
export default function Button() {
  const history = useHistory();
  function handleClick() {
    history.push("/event");
  }
  return (
    <ButtonStyle onClick={handleClick}>
      Find out more
    </ButtonStyle>
  );
}

export const ButtonStyle = styled.button `
 display: block;
  text-decoration: none;
  width: 100%;
  line-height: 40px;
  text-align: center;
  border: 1px solid ${colors.red};
  border-radius: 6px;
  background: ${colors.red};
  color: ${colors.white};
  transition: ${transitionEase};
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  
  &:hover {
    cursor: pointer;
    border-color: ${colors.yellow};
    background: ${colors.yellow};
  }
  
  &:focus {
    outline: none;
  }
`;