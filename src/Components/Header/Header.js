import React from 'react';
import './Header.scss';
import Logo from '../../assets/Images/logo.png';
import { NavLink } from 'react-router-dom';
// import Home from '../../Pages/Home/Home';

const links = {
    home: 'Home',
    events: 'Events',
}


const Header = () => {
    return (
<header className="Header">
        <div className="Header-Inner">
            <NavLink className="Header-LogoContainer" to="/">
                <img src={Logo} className="Header-Logo" alt="Logo"/>
                </NavLink>
        
            <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>
            <nav className="Header-Nav">
                <NavLink className="Header-NavItem " activeStyle={{color: "red"}} exact to="/" >{links.home}</NavLink>
                <NavLink className="Header-NavItem " activeStyle={{color: "red"}} exact to="/events" >{links.events}</NavLink>
            </nav>
        </div>
    </header>
    );
}

export default Header;
