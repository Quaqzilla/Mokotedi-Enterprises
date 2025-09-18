import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Display from '../../components/Work/display';
import { useEffect } from 'react';

const Work = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return(
        <div className="workPage">

            <NavBar/>
            <Display/>
            <Footer/>
            
        </div>
    )
}

export default Work;