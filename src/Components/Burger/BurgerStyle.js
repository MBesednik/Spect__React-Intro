import styled from 'styled-components';
import {
  colors,
  breakpoints,
  transitionLinear
} from '../../lib/style/theme';

export const Hamburger = styled.button`
    width: 25px;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    position: absolute;
    z-index: 10;

    @media screen and (${breakpoints.desktop}) {
        display: none;
    }
`;
  export const HamburgerLine = styled.div`  
    transition: ${transitionLinear};
    position: relative;
    transform-origin: 1px;
    width: 100%;
    height: 2.5px;
    border-radius: 100px;
    background-color: ${colors.darkGrey};
    margin-bottom: 6px;

`;