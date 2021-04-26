import React from 'react';
import LogoImg from '../../assets/images/logo.png';
import {
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem,
    Hamburger,
    HamburgerLine
} from "./HeaderStyle";

const links = {
    home: 'Home',
    events: 'Events',
}


const Header = () => {
    return (
<HeaderWrapper>
        <Inner>
            <LogoContainer to="/">
                <Logo src={LogoImg} alt="Logo"/>
                </LogoContainer>
        
            <Hamburger>
                    <HamburgerLine/>
                    <HamburgerLine/>
                    <HamburgerLine/>
                </Hamburger>
            <Nav>
                <NavItem activeStyle={{color: "red"}} exact to="/" >{links.home}</NavItem>
                <NavItem activeStyle={{color: "red"}} exact to="/events" >{links.events}</NavItem>
            </Nav>
        </Inner>
        </HeaderWrapper>
    );
}

export default Header;
