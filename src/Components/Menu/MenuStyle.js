import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  colors,
  breakpoints,
  transitionEase
} from '../../lib/style/theme';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.white};
  height: 100vh;
  width: 250px;
  text-align: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: ${transitionEase};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};

  @media screen and (${breakpoints.desktop}) {
        display: none;
    }

  @media screen and (max-width: 768px) {
      width:100%;
  }
`;



export const NavItem = styled(NavLink)`
    text-decoration: none;
    color: ${colors.black}; 
    font-weight: 600;
    line-height: 50px;
    font-size: 19px;
    transition: ${transitionEase};
    &:hover {
        color: ${colors.red};
    }
    &:last-child {
        margin-right: 0;
    }

    @media screen and (max-width: 768px) {
      font-size: 25px;
      line-height: 75px;
  }
`;