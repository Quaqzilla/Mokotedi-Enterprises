import './About.css';
import { useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import AboutSection from '../../components/AboutSection/AboutSection';
import Footer from '../../components/Footer/Footer';

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <NavBar/>
            <AboutSection/>
            <Footer/>
        </div>
    )
}

export default About;