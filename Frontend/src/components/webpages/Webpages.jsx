import './Webpages.css';

const Webpages = () => {
    return(
        <div className='web-container'>

            <div className="page-image">
                            
            </div>

            <div className="heading">
                <h1>Websites</h1>
                <p>description of web services</p>
            </div>

            <div className="web-box">
        
                <div className="web-grid">
                    <div className="web-icon">
                        <img src="" alt="website" />
                        <p>website description</p>
                    </div>

                    <div className="web-content">

                        <div className="detailed-work">
                            <h4>Price R: </h4>
                            <h3>Package details:</h3>
                            <ul>
                                <li>
                                    web-includes
                                </li>
                            </ul>
                        </div>

                        <div className="retainer">
                            <h3>Monthly maintenance options:</h3>
                            <div className="options">
                                <h5>type</h5>
                                <p>description</p>
                                <h4>Price: R</h4>
                            </div>
                        </div>

                        <div className="buttons">
                            <button className="enq">
                                Request Prototype
                            </button>

                            <button className="enq">
                                Enquire
                            </button>
                        </div>

                    </div>
                </div>
                
            </div>

            <div className="add-ons">

                <div className="heading">
                    <h1>Extra Services & Add-Ons</h1>
                </div>

                <div className="add-on-services">
                    <h3>service type</h3>
                    <p>description</p>
                    <h4>Price: R</h4>
                </div>
            </div>


        </div>

    )
}

export default Webpages;