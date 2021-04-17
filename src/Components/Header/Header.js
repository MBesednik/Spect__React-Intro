import React from 'react';
import './Header.scss';
import Logo from '../../assets/Images/logo.png';

const Header = () => {
    return (
<header className="Header">
        <div className="Header-Inner">
            <a href="index.html" className="Header-LogoContainer">
                <img src={Logo} className="Header-Logo" alt=""/>
            </a>
            <div className="Header-NavHamburger">
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                    <div className="Header-NavHamburgerLine"></div>
                </div>
            <nav className="Header-Nav">
                <a href="index.html" className="Header-NavItem">Home</a>
                <a href="events.html" className="Header-NavItem">Event</a>
            </nav>
        </div>
    </header>
    );
}

export default Header;