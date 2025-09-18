import Chat from "../../components/Chat/Chat"
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import {useEffect} from "react";


const AI = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>
            <NavBar/>
            <Chat/>
            <Footer/>
        </div>
    )
}

export default AI;