import React from 'react';
import { 
    Nav,
    NavItem
} from './MenuStyle';
import { bool } from 'prop-types';

const links = {
  home: 'Home',
  events: 'Events',
}

const Menu = ({ open }) => {
    return (
        <>
      <Nav open={open}>
                <NavItem activeStyle={{color: "red"}} exact to="/" >{links.home}</NavItem>
                <NavItem activeStyle={{color: "red"}} exact to="/events" >{links.events}</NavItem>
      </Nav>
            </>
    )
  }
  Menu.propTypes = {
    open: bool.isRequired,
  }
export default Menu;