import Webpages from "../../components/webpages/webpages";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

const Websites = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <div>
            <NavBar/>
            <Webpages/>
            <Footer/>
        </div>
    )
}

export default Websites;