import './Webpages.css';
import retainer from '../../hooks/retainer';
import websitePrices from '../../hooks/websitePrices';
import aiPrices from '../../hooks/aiPrices';
import chat from "./../../assets/images/ChatBot.webp"

const Webpages = () => {
    return(
        <div className='web-container'>

            <div className="page-image">
                            
            </div>

            <div className="heading">
                <h1>Websites</h1>
                <p>description of web services</p>
            </div>

            <div className="different-webs">
                
                {websitePrices.map((pkg, index) => (
                  <div className="web-box" key={index}>
                    <div className="web-grid">
                      <div className="web-icon">
                        <h2>{pkg.title}</h2>
                        <p>{pkg.description}</p>
                      </div>

                      <div className="web-content">
                        <div className="detailed-work">
                          <h4>Price R: {pkg.price}</h4>
                          <h3>Package details:</h3>
                          <ul>
                            {pkg.specifics.map((spec, i)=> (
                              <li key={i}>{spec}</li>
                            ))}
                          </ul>
                          <p><strong>Delivery time:</strong> {pkg.delivery}</p>
                        </div>

                        <div className="retainer">
                          <h3>Monthly maintenance options:</h3>
                          {retainer.map((opt, i) => (
                            <div className="options" key={i}>
                              <h5>{opt.title}</h5>
                              <p>{opt.description}</p>
                              <h4>Price: R {opt.price}</h4>
                            </div>
                          ))}
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
                ))}
            </div>
            

            <div className="add-ons">

                
                <div className="heading">
                    <h1>Extra Services & Add-Ons</h1>
                </div>
                {aiPrices.map((ai, index)=>(
                    <div className="add-services-container">
                        <div className="add-on-services">
                            <img src={chat} alt="service-img" />
                            <div className='services-text'>
                            <h3>{ai.service}</h3>
                            <p>{ai.description}</p>
                            <h4>Price: R{ai.price}</h4>  
                            </div>
                        </div>
                    </div>
                ))}
                
                
            </div>


        </div>

    )
}

export default Webpages;