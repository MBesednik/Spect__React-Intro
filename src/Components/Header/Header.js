import React from 'react';
import './Header.scss';
import Logo from '../../assets/Images/logo.png';

const Header = () => {
    return (
<header class="header">
        <div class="header__inner">
            <a href="index.html" class="header__logo-cotainer">
                <img src={Logo} class="header__logo" alt=""/>
            </a>
            <nav class="header__nav">
                <a href="index.html" class="header__nav-item">Home</a>
                <a href="events.html" class="header__nav-item header__nav-item_active">Event</a>
            </nav>
        </div>
    </header>
    )
}

export default Header;