import React, { useState, useEffect } from 'react';
import { 
    Nav,
    NavItem
} from './MenuStyle';
import { bool, func } from 'prop-types';

const links = {
  home: 'Home',
  events: 'Events',
  login: 'Login',
  register: 'Register',
  admin: 'Admin'
}

const Menu = ( props ) => {
      
    return (
        <>
      <Nav  open={props.open} >
               <NavItem activeStyle={{color: "red"}} exact to="/" onClick={() => props.setOpen(!props.open)}  >
                    {links.home}
                </NavItem>
                <NavItem activeStyle={{color: "red"}} exact to="/events" onClick={() => props.setOpen(!props.open)} >
                    {links.events}
                </NavItem>
                {props.isLoggedIn
                ? <NavItem to='/login' onClick={() => {props.logout(); props.setOpen(!props.open);}}>Logout</NavItem>
                : 
                <NavItem activeStyle={{color: "red"}} exact to="/login" onClick={() => props.setOpen(!props.open)} >
                    {links.login}
                </NavItem>
                }
                {!props.isLoggedIn && <NavItem
                                            exact to="/register"
                                            activeStyle={{color: "red"}}
                                            onClick={() => props.setOpen(!props.open)} 
                                        >
                                            {links.register}
                                        </NavItem>
                                        }
                {props.isAdmin && <NavItem
                                        exact to="/admin"
                                        activeStyle={{color: "red"}}
                                        onClick={() => props.setOpen(!props.open)} 
                                    >
                                        Admin
                                    </NavItem>
                                    }
            </Nav>
            </>
    )
  }
    Menu.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
  }
export default Menu;