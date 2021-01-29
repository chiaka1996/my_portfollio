import React from 'react';
import '../Css/Contact.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

const Contact = (props) => {
 
    return (
        <div>
        <div ref={props.refProp} className="certification-body">
                <div className="cert_header"><span>Contact Me!</span></div>

                <div className="contactGridContainer">

                    <div className="contactGrid">

                        <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609861169/logos/portfollio_call_center_unymao.jpg" alt="customer_care" />
                    </div>

                    <div className="contactGrid">
                    <div className="contact-intro">
                Interested in working together? Wherever you are with your idea or your project, 
                I'll be happy to help. I am available for full stack positions, either full-time or remote.
                </div>

                <div className="mail">
                    <div>
                <p><FontAwesomeIcon icon="envelope" size="sm" color="#20AAF3" className="contactLogo" />chiakajunior@yahoo.com</p>
                <p><FontAwesomeIcon icon="envelope" size="sm" color="#20AAF3" className="contactLogo" />chikajunior19@gmail.com</p>
                <p><FontAwesomeIcon icon="phone" size="sm" color="#20AAF3" className="contactLogo" />+2348084052359</p>
                <p><FontAwesomeIcon icon="map-marker-alt" size="sm" color="#20AAF3" className="contactLogo" />Oshodi, Lagos, Nigeria</p>
                <p>Thanks</p>
                </div>

                <div>

                <Link to={{pathname:"https://twitter.com/NewtonChiaka"}}  target='_blank' > 
            <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" color="black" className="awesomeLogos"/>
            </Link>

            <Link to={{pathname:"https://github.com/chiaka1996"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'github']} size="lg" color="black" className="awesomeLogos" />
        </Link>

        <Link to={{pathname:"https://www.linkedin.com/in/osuji-chiaka-10b31a196/"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" color="black" className="awesomeLogos" />
        </Link>

        <Link to={{pathname:"https://www.facebook.com/profile.php?id=100009145788898"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" color="black" className="awesomeLogos" />  
        </Link>
                
                </div>
                </div>
                    </div>

                    {/* <div className="contactGrid"> */}
                        {/* <form>
                            <div className="contactInput" >
                            <div> Name</div>
                            <input type="text" className="contact_input" />
                            </div>

                            <div className="contactInput">
                            <div> Email</div>
                            <input type="text" className="contact_input" />
                            </div>

                            <div className="contactInput">
                            <div>Message</div>
                            <textarea className="contactInputTextArea" rows="4" cols="56"></textarea>
                            </div>

                            <div className="contactButton">
                                <button>Message Me!</button>
                            </div> */}
                        {/* </form>
                        
                    </div> */} 

                </div>  
            </div>
            <footer> copyright &#169; 2021, chiaka daniel</footer> 
            </div>
    )
}

export default Contact;