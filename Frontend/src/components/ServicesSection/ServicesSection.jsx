import './ServicesSection.css';
import iphone from './../../assets/images/IPhone.png';
import Spline from '@splinetool/react-spline';

const ServicesSection = () => {
    return(
        <div className="services-section">

            <div className="services-welcome">
                
            </div>

            <div className="our-websites">
                    <div className="websites-title">
                        <h1>What We Offer</h1>
                    </div>

                    <div className="websites-content">

                        <div className="websites">

                            <div className="title">
                                <h1>Websites</h1>
                            </div>
            
                            <div className="tools-slide">
                                <img src="" alt="JavaScript" />
                                <img src="" alt="Python" />
                                <img src="" alt="Java" />
                                <img src="" alt="HTML" />
                                <img src="" alt="CSS" />
                                <img src="" alt="React" />
                            </div>

                            <div className="description">
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
                            <h1>Technical Support</h1>
                        </div>

                        <div className="description">
                            <p>Description
                            </p>
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