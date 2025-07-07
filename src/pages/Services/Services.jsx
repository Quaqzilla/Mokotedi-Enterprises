import { useEffect } from "react";
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <NavBar/>

            <Footer/>
        </div>
    )
}

export default Services;