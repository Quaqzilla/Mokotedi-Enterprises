import './Footer.css';
import linked from './../../assets/images/linkedIn.png';
import ig from './../../assets/images/ig.png';
import whatsapp from './../../assets/images/whatsapp.png';
import logo from './../../assets/images/pagelogo.png';
import { useNavigate } from 'react-router';

const Footer = () => {

    const navigate = useNavigate();

    const contact = async(e) => {
        e.preventDefault();

        try{
            navigate('/Contact-Us');
        }catch (error){
            console.error(error);
        }
    };

    const homePage = async(e) => {
        e.preventDefault();

        try{
            navigate('/');
        }catch (error){
            console.erroe(error);
        }
    };

    const AboutUs = async(e) => {
        e.preventDefault();

        try{
            navigate("/About-Us");
        }catch (error){
            console.error(error);
        }

    };

    const Services = async (e) => {
        e.preventDefault();

        try{
            navigate('/Our-Services');
        }catch (error){
            console.error(error);
        }
    };

    const Work = async (e) => {
        e.preventDefault();

        try{
            navigate('/Our-Work');
        }catch (error){
            console.error(error);
        }
    };

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
                            <a href="" onClick={homePage}>Home</a>
                            <a href="" onClick={AboutUs}>About Us</a>
                            <a href="" olocallonClick={Services}>Services</a>
                            <a href="" onClick={Work}>Projects</a>
                            <a href="" onClick={contact}>Contact</a>
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