import { useNavigate } from 'react-router';
import './Company.css';

const Company = () => {

    const navigate = useNavigate();

    const contact = () => {
        try{
            navigate('/Contact-Us')
        }catch (error){
            console.error(error)
        }
    };

    return(
        <div className="company-component">
            <div className="company-content">
                <h1 data-aos = "fade-right" data-aos-duration="2000">Empowering Your <br/>Digital Success</h1>
                <p data-aos = "fade-right" data-aos-duration="2500">We craft modern websites and deliver expert tech 
                    <br/>solutions to help your business thrive in a connected world.</p>
                <button data-aos = "fade-right" data-aos-duration="3000" onClick={contact}>Contact Us</button>
            </div>
        </div>
    )
}

export default Company;