import { useEffect } from "react";
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import ServicesSection from './../../components/ServicesSection/ServicesSection';

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <NavBar/>
            <ServicesSection/>
            <Footer/>
        </div>
    )
}

export default Services;