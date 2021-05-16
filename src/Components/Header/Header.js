import React, { useState, useEffect } from 'react';
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


const links = {
    home: 'Home',
    events: 'Events',
    login: 'Login',
    register: 'Register',
    admin: 'Admin'
}

const Header = (props) => {
    const [ open, setOpen ] = useState(false);
    const [ visible, setVisible ] = useState(false);

    return (
<HeaderWrapper>
        <Inner>
            <LogoContainer to="/">
                <Logo src={LogoImg} alt="Logo"/>
                </LogoContainer>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen}  />
            <Nav visible={visible.toString()}>
                <NavItem activeStyle={{color: "red"}} exact to="/" >
                    {links.home}
                </NavItem>
                <NavItem activeStyle={{color: "red"}} exact to="/events" >
                    {links.events}
                </NavItem>
                {props.isLoggedIn
                ? <NavItem to='/login' onClick={() => props.logout()}>Logout</NavItem>
                : 
                <NavItem activeStyle={{color: "red"}} exact to="/login" >
                    {links.login}
                </NavItem>
                }
                {!props.isLoggedIn && <NavItem
                                            exact to="/register"
                                            activeStyle={{color: "red"}}
                                            onClick={() => setVisible(false)}
                                        >
                                            {links.register}
                                        </NavItem>
                                        }
                {props.isAdmin && <NavItem
                                        exact to="/admin"
                                        activeStyle={{color: "red"}}
                                        onClick={() => setVisible(false)}
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
