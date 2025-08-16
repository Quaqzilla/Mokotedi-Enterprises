import './Footer.css';
import linked from './../../assets/images/linkedIn.png';
import ig from './../../assets/images/ig.png';
import whatsapp from './../../assets/images/whatsapp.png';
import logo from './../../assets/images/pagelogo.png';

const Footer = () => {

    return(
        <div className="footer-component">

            <div className="footer-content">

                <div className="right-side">
                    <img src={logo} alt="" className='logo'/>
                    <div className="social-icons">
                        <img src={linked} alt="LinkedIn" />
                        <img src={ig} alt="Instagram" />
                        <img src={whatsapp} alt="Whatsapp" />
                    </div>
                </div>

                <div className="left-side">
                    <div className="left-component">
                        <h1>Pages</h1>
                        <ul>
                            <a href="/">Home</a>
                            <a href="About-Us">About Us</a>
                            <a href="Our-Services">Services</a>
                            <a href="Our-Work">Projects</a>
                            <a href="Contact-Us">Contact</a>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="footer-copyright">
                <div className="copyright-text">
                    <p>@2025 - All Rights Reserved by ...</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;