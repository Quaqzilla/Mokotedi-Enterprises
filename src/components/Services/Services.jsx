import './Services.css'
import service from './../../assets/images/6.webp';
import about from './../../assets/images/7.webp';
import work from './../../assets/images/5.webp';

const Services = () => {
    return(
        <div className="services-component">

            <div className="services-heading">
                <p data-aos = "fade-down" data-aos-duration = "2000">ABOUT US</p>
                <h1 data-aos = "fade-down" data-aos-duration = "2200">FIND MORE ABOUT US</h1>
            </div>

            <div className="services-categories">

                <div className="services-panel" data-aos = "fade-right" data-aos-duration = "2000">
                    <div className="panel-heading">
                        <h1>Services</h1>
                    </div>
                    <div className="panel-icon">
                        <img src={service} alt="services" />
                    </div>
                    <div className="panel-description">
                        <p>We build modern websites <br/>and 
                        provide expert tech <br/>consulting 
                        to help your <br/>business grow and 
                        succeed <br/>in the digital world.</p>
                    </div>
                    <div className="panel-learnmore">
                        <a href="">Learn More</a>
                    </div>
                </div>

                <div className="services-panel" data-aos = "fade-right" data-aos-duration = "2200">
                    <div className="panel-heading">
                        <h1>About us</h1>
                    </div>
                    <div className="panel-icon">
                        <img src={about} alt="about-us" />
                    </div>
                    <div className="panel-description">
                        <p>Mokotedi Enterprises is <br/>dedicated
                        to delivering <br/>innovative web 
                        solutions <br/>and expert technology 
                        <br/>consulting, helping clients <br/>achieve 
                        their goals and thrive<br/> in a digital world.</p>
                    </div>
                    <div className="panel-learnmore">
                        <a href="">Learn More</a>
                    </div>
                </div>

                <div className="services-panel" data-aos = "fade-right" data-aos-duration = "2500">
                    <div className="panel-heading">
                        <h1>Our Work</h1>
                    </div>
                    <div className="panel-icon">
                        <img src={work} alt="work" />
                    </div>
                    <div className="panel-description">
                        <p>Explore our portfolio <br/> of successful 
                        web projects <br/>and tech solutions, 
                        <br/>each crafted to drive <br/>results and
                         deliver real value<br/> for our clients.</p>
                    </div>
                    <div className="panel-learnmore">
                        <a href="">Learn More</a>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Services;