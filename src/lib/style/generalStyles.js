import React, { useEffect } from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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

  ${props => props.columns === 4 && 'padding: 64px 15px; row-gap: 48px;'}

  @media screen and (${breakpoints.mobileLarge}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
    ${props =>
      props.columns === 4 &&
      'grid-template-columns: repeat(2, 1fr); gap: 32px; padding: 80px 32px;'}
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    ${props => props.columns === 3 && 'padding: 0 32px'}
    ${props =>
      props.columns === 4 &&
      'grid-template-columns: repeat(3, 1fr); padding: 80px 0 0 0; max-width: 930px; margin: 0 auto;'}
  }

  @media screen and (${breakpoints.desktopLarge}) {
    ${props => props.columns === 3 && 'padding: 0 84px;'}
    ${props =>
      props.columns === 4 &&
      'grid-template-columns: repeat(4, 1fr); margin: 0 auto; max-width: 1280px;'}
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

// button
export const Button = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

export const ButtonStyle = styled.button`
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
  font-family: 'Montserrat', sans-serif;

  &:hover {
    cursor: pointer;
    border-color: ${colors.yellow};
    background: ${colors.yellow};
  }

  &:focus {
    outline: none;
  }
`;