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

// Form
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;

  @media screen and (${breakpoints.mobileLarge}) {
    width: 400px;
  }
`;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  ${(props) => props.gridSpan ? "grid-column: 1 / span 2;" : null};
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  ${(props) => !props.withoutMarginBottom && "margin-bottom: 4px;"}

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputText = styled.input`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  line-height: 40px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;

  &:focus {
    border-color: ${colors.yellow};
  }
  
  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  line-height: 150%;
  padding: 10px;
  outline: none;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  min-width: 100%;

  &:focus {
    border-color: ${colors.yellow};
  }
  
  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Select = styled.select`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  line-height: 40px;
  height: 40px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;

  &:focus {
    border-color: ${colors.yellow};
  }
  
  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputCheckbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
`;

export const InputError = styled.p`
  font-size: 14px;
  color: ${colors.red};
  padding-top: 8px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 32px;
  padding-top: 80px;

  @media screen and (${breakpoints.mobileLarge}) {
    font-size: 24px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 28px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    font-size: 32px;
    margin-bottom: 48px;
    padding-top: 100px;
  }
`;

// success message
export const SuccessMessage = styled.p`
    margin: 0 auto;
    padding: 15px;
    margin-bottom: 32px;
    border-radius: 6px;
    background: ${colors.successBackground};
    color: ${colors.success};
    ${props => props.isError && `
        background: ${colors.errorBackground};
        color: ${colors.error};
    `};
    @media screen and (${breakpoints.mobileLarge}){
        max-width: 400px;
    }
`;