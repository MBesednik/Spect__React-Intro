import React, { useState, useEffect, useContext } from 'react';
import LogoImg from '../../assets/images/logo.png';
import {
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem
} from "./HeaderStyle";
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import { AuthContext } from '../../context/AuthContext';


const links = {
    home: 'Home',
    events: 'Events',
    login: 'Login',
    register: 'Register',
    admin: 'Admin'
}

const Header = ( props ) => {
    const [ open, setOpen ] = useState(false);
    const { isLoggedIn, isAdmin, logout } = useContext(AuthContext);

    return (
<HeaderWrapper>
        <Inner>
            <LogoContainer to="/">
                <Logo src={LogoImg} alt="Logo"/>
                </LogoContainer>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
            <Nav>
                <NavItem activeStyle={{color: "red"}} exact to="/" > 
                    {links.home}
                </NavItem>
                <NavItem activeStyle={{color: "red"}} exact to="/events" >
                    {links.events}
                </NavItem>
                {isLoggedIn
                ? <NavItem to='/login' onClick={() => logout()}>Logout</NavItem>
                : 
                <NavItem activeStyle={{color: "red"}} exact to="/login" >
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
        </Inner>
        </HeaderWrapper>
    );
}

export default Header;
