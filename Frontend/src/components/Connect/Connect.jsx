import './Connect.css'
import { useState } from 'react';
import emailjs from 'emailjs-com';


const Connect = () => {
    const [formdata, setFormdata] = useState({
        username: "",
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
                message: formdata.message,
                title: formdata.title
            },
            "KUIg7P-fJ3iOJNG9D"
            )
            .then(() => alert("Email sent successfully! \n We will get back to you shortly."))
            .catch((error) => {
            console.error("Email send error:", error);
            alert("Failed to send email. \n\n Please try again.");
            });
    }

    return(
        <div className="connect-section">

            <div className="connect-image">

            </div>

            <div className="connect-input">

                <div className="title">
                    <h1>Contact Us</h1>
                </div>

                <div className="c-inputs">

                    <div className="input">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        placeholder='Enter Your Name'
                        required
                        value={formdata.username}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        placeholder='Email Address'
                        required
                        value={formdata.email}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="email">Query Title</label>
                        <input 
                        type="text" 
                        value={formdata.title} 
                        onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="email">Message</label>
                        <textarea name="message" id="" maxLength={1500} value={formdata.message} onChange={handleChange}>Enter your message here</textarea>
                    </div>

                    <div className="button">
                        <button type='submit' onClick={sendEnquiry}>Submit</button>
                    </div>

                </div>

                

            </div>


        </div>
    )
}

export default Connect;