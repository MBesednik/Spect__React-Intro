import React, { useState, useEffect } from 'react';
import { 
    Nav,
    NavItem
} from './MenuStyle';
import { bool } from 'prop-types';

const links = {
  home: 'Home',
  events: 'Events',
  login: 'Login',
  register: 'Register',
  admin: 'Admin'
}

const Menu = ({ open }) => {

      const [ isAdmin, setIsAdmin ] = useState(false);
      const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem('authToken') ? true : false);
        setIsAdmin(JSON.parse(localStorage.getItem('isAdmin')));
    }, []);

    function login(authToken, isAdmin) {
        localStorage.setItem('authToken', authToken);
        localStorage.setItem('isAdmin', isAdmin);
        setIsLoggedIn(true);
        setIsAdmin(isAdmin);
    }

    function logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('isAdmin');
        setIsLoggedIn(false);
        setIsAdmin(false);
    }
    return (
        <>
      <Nav  open={open} >
                <NavItem activeStyle={{color: "red"}} exact to="/" >
                    {links.home}
                </NavItem>
                <NavItem activeStyle={{color: "red"}} exact to="/events" >
                    {links.events}
                </NavItem>
                {isLoggedIn
                ? <NavItem to='/login' onClick={() => logout()}>Logout</NavItem>
                : 
                <NavItem activeStyle={{color: "red"}}  login={login} exact to="/login" >
                    {links.login}
                </NavItem>
                }
                {!isLoggedIn && <NavItem
                                            exact to="/register"
                                            activeStyle={{color: "red"}}
                                        >
                                            {links.register}
                                        </NavItem>
                                        }
                {isAdmin && <NavItem
                                        exact to="/admin"
                                        activeStyle={{color: "red"}}
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
  }
export default Menu;