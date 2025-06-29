import './Ceo.css';

const Ceo = () => {
    return(
        <div className="ceo-component">

            <div className="ceo-image" data-aos = "fade-right" data-aos-duration = "2000">
                <img src="" alt="ceo/founder" />
            </div>

            <div className="ceo-message" data-aos = "fade-left" data-aos-duration = "2500">
                <h1 className="ceo-quote-title">A Message from Our CEO</h1>
                <blockquote className="ceo-quote">
                    <span className="ceo-quote-text">
                        <span className="quote-mark">“</span>
                        At Mokotedi Enterprises, we believe technology is the bridge between vision and reality. Our passion is building digital solutions that empower businesses to innovate, grow, and lead in a connected world. Let us turn your ideas into impact.
                        <span className="quote-mark">”</span>
                    </span>
                    <span className="ceo-signature">— Phemelo Mokotedi, CEO & Founder</span>
                </blockquote>
            </div>
        </div>
    )
}

export default Ceo;