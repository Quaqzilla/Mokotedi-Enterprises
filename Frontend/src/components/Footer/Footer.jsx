import './Footer.css';


const Footer = () => {
    return(
        <div className="footer-component">

            <div className="footer-content">

                <div className="right-side">
                    <h1>Business Name</h1>
                    <div className="social-icons">
                        <img src="" alt="LinkedIn" />
                        <img src="" alt="Instagram" />
                        <img src="" alt="Whatsapp" />
                    </div>
                </div>

                <div className="left-side">
                    <div className="left-component">
                        <h1>Pages</h1>
                        <ul>
                            <a href="">Home</a>
                            <a href="">About Us</a>
                            <a href="">Services</a>
                            <a href="">Contact</a>
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