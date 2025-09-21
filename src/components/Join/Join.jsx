import './Join.css';
import join from './../../assets/images/join.png';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Join = () => {

    const [formdata, setFormdata] = useState({
            name: "",
            email: "",
            message: "",
            title: ""
        });
    
        const handleChange = async(e) => {
            setFormdata({ ...formdata, [e.target.name]: e.target.value });
        };
    
        const sendEnquiry = async(e) => {
            e.preventDefault();
    
            emailjs.send(
                "service_06sunpl",
                "template_h563rcr",
                {
                    name: formdata.name,
                    email: formdata.email,
                    message: `Hi I am ${formdata.email} \n I am interested in your services please get back to me.`,
                    title: "General Interest Query"
                },
                "KUIg7P-fJ3iOJNG9D"
                )
                .then(() => alert("Email sent successfully! \n We will get back to you shortly."))
                .catch((error) => {
                console.error("Email send error:", error);
                Alert.alert(
                    "Email Status",
                    "Failed to send email. \n\n Please try again."
                )
                });
        }


    return(
        <div className="join-component">

            <div className="join-text-content">
                <div className="text-image">
                    <img src={join} alt="graphic" />
                </div>
                <div className="text">
                    <h2>CONNECT WITH US</h2>
                    <h1>Let us take your business <br/>
                    to the next  level.</h1>
                    <p>What is a world without tech? Take our helping hand</p>
                </div>
            </div>

            <div className="join-inputs">
                <input 
                type="text"
                name='name'
                value={formdata.name}
                onChange={handleChange}
                placeholder = "Your name"
                minLength={1}
                />

                <input 
                type="email" 
                name='email'
                value={formdata.email}
                onChange={handleChange}
                placeholder="Your email"
                />

                <button onClick={sendEnquiry}>Submit</button>
            </div>
        </div>
    )
}

export default Join;