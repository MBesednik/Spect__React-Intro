import React, { useState } from 'react';
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
}


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
<HeaderWrapper>
        <Inner>
            <LogoContainer to="/">
                <Logo src={LogoImg} alt="Logo"/>
                </LogoContainer>
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
            <Nav>
                <NavItem activeStyle={{color: "red"}} exact to="/" >{links.home}</NavItem>
                <NavItem activeStyle={{color: "red"}} exact to="/events" >{links.events}</NavItem>
            </Nav>
        </Inner>
        </HeaderWrapper>
    );
}

export default Header;
