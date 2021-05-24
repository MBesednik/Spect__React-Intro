import React, { useState, useEffect, useContext } from 'react';
import { 
    Nav,
    NavItem
} from './MenuStyle';
import { bool, func } from 'prop-types';
import { AuthContext } from '../../context/AuthContext';

const links = {
  home: 'Home',
  events: 'Events',
  login: 'Login',
  register: 'Register',
  admin: 'Admin'
}

const Menu = ( props ) => {
      
    const { isLoggedIn, isAdmin, logout } = useContext(AuthContext);

    return (
        <>
      <Nav  open={props.open} >
               <NavItem activeStyle={{color: "red"}} exact to="/" onClick={() => props.setOpen(!props.open)}  >
                    {links.home}
                </NavItem>
                <NavItem activeStyle={{color: "red"}} exact to="/events" onClick={() => props.setOpen(!props.open)} >
                    {links.events}
                </NavItem>
                {isLoggedIn
                ? <NavItem to='/login' onClick={() => {logout(); props.setOpen(!props.open);}}>Logout</NavItem>
                : 
                <NavItem activeStyle={{color: "red"}} exact to="/login" onClick={() => props.setOpen(!props.open)} >
                    {links.login}
                </NavItem>
                }
                {!isLoggedIn && <NavItem
                                            exact to="/register"
                                            activeStyle={{color: "red"}}
                                            onClick={() => props.setOpen(!props.open)} 
                                        >
                                            {links.register}
                                        </NavItem>
                                        }
                {isAdmin && <NavItem
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