import './NavBar.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import logo from './../../assets/images/pagelogo.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const homePage = async(e) => {
        e.preventDefault();
        try{
            navigate('/');
            closeMenu();
        }catch (error){
            console.error(error);
        }
    };

    const AboutUs = async(e) => {
        e.preventDefault();
        try{
            navigate("/About-Us");
            closeMenu();
        }catch (error){
            console.error(error);
        }
    };

    const Services = async (e) => {
        e.preventDefault();
        try{
            navigate('/Our-Services');
            closeMenu();
        }catch (error){
            console.error(error);
        }
    };

    const Work = async (e) => {
        e.preventDefault();
        try{
            navigate('/Our-Work');
            closeMenu();
        }catch (error){
            console.error(error);
        }
    };

    const Contact = async (e) => {
        e.preventDefault();
        try{
            navigate('/Contact-Us');
            closeMenu();
        }catch (error){
            console.error(error);
        }
    };

    return(
        <>
            <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
            
            <div className="navbar-component">
                <div className="nav-logo" data-aos="fade-right" data-aos-duration="1500">
                    <img src={logo} alt="logo" onClick={homePage}/>
                </div>

                <div 
                    className={`hamburger ${menuOpen ? 'active' : ''}`}
                    onClick={handleHamburgerClick} 
                    aria-label="Toggle navigation" 
                    tabIndex={0} 
                    role="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`nav-selection ${menuOpen ? 'open' : ''}`}>
                    <ul className={menuOpen ? 'open' : ''}>
                        <a href="#" data-aos="zoom-in" data-aos-duration="2000" onClick={AboutUs}>About Us</a>
                        <a href="#" data-aos="zoom-in" data-aos-duration="2200" onClick={Services}>Services</a>
                        <a href="#" data-aos="zoom-in" data-aos-duration="2400" onClick={Work}>Projects</a>
                        <a href="#" data-aos="zoom-in" data-aos-duration="2400" onClick={Contact}>Contact Us</a>
                    </ul>
                </div>

                <div className="nav-button" data-aos="fade-left" data-aos-duration="2500">
                    <button onClick={Contact}>Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;