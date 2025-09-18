import './Connect.css'

const Connect = () => {
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
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        placeholder='Email Address'
                        required
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="email">Query Type</label>
                        <input type="text" />
                    </div>

                    <div className="input">
                        <label htmlFor="email">Message</label>
                        <textarea name="message" id="" maxLength={1500}>Enter your message here</textarea>
                    </div>

                    <div className="button">
                        <button type='submit'>Submit</button>
                    </div>

                </div>

                

            </div>


        </div>
    )
}

export default Connect;