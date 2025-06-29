import './NavBar.css';
import React, { useState } from 'react';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };

    return(
        <div className="navbar-component">
            <div className="nav-logo" data-aos = "fade-right" data-aos-duration = "1500">
                <img src="" alt="logo" />
            </div>

            <div className="hamburger" onClick={handleHamburgerClick} aria-label="Toggle navigation" tabIndex={0} role="button">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="nav-selection">
                <ul className={menuOpen ? 'open' : ''}>
                    <a href="" data-aos = "zoom-in" data-aos-duration = "2000">About Us</a>
                    <a href="" data-aos = "zoom-in" data-aos-duration = "2200">Services</a>
                    <a href="" data-aos = "zoom-in" data-aos-duration = "2400">FAQ</a>
                </ul>
            </div>

            <div className="nav-button" data-aos = "fade-left" data-aos-duration = "2500">
                <button>Contact Us</button>
            </div>
        </div>
    )
}

export default NavBar;