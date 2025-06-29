import './Landing.css';
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../../components/Intro/Intro";
import Services from "../../components/Services/Services";
import Ceo from "../../components/CEO/Ceo";
import Company from "../../components/Company/Company";
import Join from '../../components/Join/Join';
import Footer from '../../components/Footer/Footer';

const Landing = () => {
    return(
        <div>
            <NavBar/>
            <Intro/>
            <Services/>
            <Ceo/>
            <Company/>
            <Join/>
            <Footer/>
        </div>
    )
}

export default Landing;