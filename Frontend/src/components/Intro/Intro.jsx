import './Intro.css';
import person from './../../assets/images/2.png'

const Intro = () => {
    return(
        <div className="intro-component">

            <div className="intro-text" data-aos = "fade-right" data-aos-duration = "2000">
                <h1>Design your websites with Us</h1>
                <button>Get Started</button>
            </div>

            <div className="intro-image" data-aos = "fade-left" data-aos-duration = "2000">
                <img src={person} alt="person" />
            </div>
        </div>
    )
}

export default Intro;