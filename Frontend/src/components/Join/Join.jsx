import './Join.css';
import join from './../../assets/images/join.png';

const Join = () => {
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
                placeholder = "Your name"
                minLength={1}
                />

                <input 
                type="email" 
                placeholder="Your email"
                />

                <button>Submit</button>
            </div>
        </div>
    )
}

export default Join;