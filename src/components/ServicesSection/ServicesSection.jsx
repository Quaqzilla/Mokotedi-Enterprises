import './ServicesSection.css';
import iphone from './../../assets/images/IPhone.png';
import Spline from '@splinetool/react-spline';
import js from './../../assets/images/js.png';
import py from './../../assets/images/py.png';
import react from './../../assets/images/react.png';
import tech from './../../assets/images/tech.png';
import java from './../../assets/images/java.png';
import css from './../../assets/images/css.png';
import html from './../../assets/images/html.png';
import web from './../../assets/images/web.png';

const ServicesSection = () => {
    return(
        <div className="services-section">

            <div className="services-welcome">
                
            </div>

            <div className="our-websites">
                    <div className="heading">
                        <h1>What We Offer</h1>
                    </div>

                    <div className="websites-content">

                        <div className="websites">

                            <div className="title">
                                <h1>Websites</h1>
                            </div>
            
                            <div className="tools-slide">
                                <img src={py} alt="Python" />
                                <img src={java} alt="Java" />
                                <img src={js} alt="JavaScript" />
                                <img src={html} alt="HTML" />
                                <img src={css} alt="CSS" />
                                <img src={react} alt="React" />
                            </div>

                            <div className="description" data-aos = "zoom-in" data-aos-duration = "2200">
                                <p>Digital spaces built for trust, purpose, and possibility we design and 
                                develop websites that go beyond functionality—they make people feel seen, 
                                safe, and inspired. Whether it's a fintech tool rooted in accessibility 
                                or a personal brand that tells a story, we blend intuitive layouts, secure
                                architecture, and symbolic design to create online experiences that 
                                resonate deeply. Every site reflects a commitment to clarity, care, 
                                and innovation—crafted to connect real people with meaningful solutions.
                                </p>
                            </div>
                            
                        </div>

                    <div className="services-intro">
                        <div className="device-image">
                            <img src={iphone} alt="iphone-image" />
                        </div>

                        <div className="text-content">
                            <div className="text-big" data-aos='fade-right' data-aos-duration='2100'>
                                <h1>WE TURN <b>VISIONS</b> <br/> INTO <b>REALITY</b></h1>
                            </div>

                            <div className="text-small" data-aos='fade-right' data-aos-duration='2700'>
                                <p>Let Us Turn Your Dream Into <br/> Something You Can Share with Others</p>
                            </div>

                        </div>
                    </div>           

                    <div className="tech-support">

                        <div className="title">
                            <h1>Tech Support</h1>
                        </div>

                        <div className="description" data-aos = "zoom-in" data-aos-duration = "2200">
                            <p>Precision Tech Support with Enduring Results At Mokotedi Enterprises, 
                            we deliver high-end technical support across a broad spectrum—from 
                            personal devices to sophisticated home setups. Every solution is 
                            crafted with meticulous attention to detail, ensuring lasting performance
                            and zero repeat issues. Our service comes with transparent, comprehensive
                            pricing that reflects the value we place on your peace of mind.<br/>
                            <button>More Information</button>
                            </p>
                            
                        </div>


                    </div>

                    <div className="our-rates">

                        <div className="title">
                            <h1>Service Rates</h1>
                        </div>

                        <div className="rates-frames">

                            <div className="rate-frame" data-aos = "fade-right" data-aos-duration = "2200">
                                <div className="rate-image">
                                    <img src={web} alt="Website Icon" />
                                </div>

                                <div className="rate-text">
                                    <h2>Websites</h2>

                                    <div className="info">
                                        <h3>What our websites include:</h3>
                                        <ul>
                                            <li>AI Chat Bots</li>
                                            <li>Seemless User Navigation</li>
                                            <li>Effortless Site Management</li>
                                        </ul>
                                    </div>

                                    <div className="info">
                                        <h3>Types of websites we build:</h3>
                                        <ul>
                                            <li>E-Commerce Website</li>
                                            <li>Portfolio Website</li>
                                            <li>Information Website</li>
                                            <li>Blog/Personal Website</li>
                                        </ul>
                                    </div>   

                                    <h4>Starting Price: <b>R3000</b></h4>                                 

                                </div>
                            </div>

                            <div className="rate-frame" data-aos = "fade-right" data-aos-duration = "2500">
                                <div className="rate-image">
                                    <img src={tech} alt="Technical Support Icon" />
                                </div>

                                <div className="rate-text">
                                    <h2>Tech Support</h2>

                                    <div className="info">
                                        <h3>Expert Tech Services</h3>
                                        <ul>
                                            <li>Device Repairs & Troubleshooting</li>
                                            <li>Home Tech Setup & Support</li>
                                            <li>Smart Solutions for Everyday Needs</li>
                                            <li>Personalized Guidance You Can Trust</li>
                                        </ul>
                                    </div>
                                    <h4>Rate: <b>R300 per hour</b></h4>
                                    <p><em>*Transportation fee not included in hourly rate</em></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="ai-intro">
                <div className="ai-bot">
                    <Spline scene="https://prod.spline.design/eSDA79J1H37nk39a/scene.splinecode" />
                </div>
                <div className="ai-text">
                    <h1 data-aos = 'fade-right' data-aos-duration='2000'>Enhance Your Website With Our <b>AI Bots</b></h1>
                    <p data-aos='fade-right' data-aos-duration='2500'>Allow Us To Train Your Bot At A Comprehensive Fee</p>
                    <button data-aos='fade-right' data-aos-duration='3000'>Talk To Our AI</button>
                </div>
            </div>

            
        </div>
    )
}

export default ServicesSection;