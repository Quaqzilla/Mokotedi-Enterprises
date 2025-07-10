import './ServicesSection.css';
import iphone from './../../assets/images/IPhone.png';
import Spline from '@splinetool/react-spline';

const ServicesSection = () => {
    return(
        <div className="services-section">

            <div className="services-welcome">
                
            </div>

            <div className="services-intro">
                <div className="device-image">
                    <img src={iphone} alt="iphone-image" />
                </div>

                <div className="text-content">
                    <div className="text-big">
                        <h1>WE TURN VISIONS <br/> INTO REALITY</h1>
                    </div>

                    <div className="text-small">
                        <p>Let Us Turn Your Dream Into <br/> Something You Share with Others</p>
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