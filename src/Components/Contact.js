import React from 'react';
import '../Css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";

const Contact = (props) => {

    return (
        <div ref={props.refProp} className="certification-body">
                <div className="cert_header"><span>Get In Touch!</span></div>
                <div className="contact-intro">
                Interested in working together? Wherever you are with your idea or your project, 
                I'll be happy to help. I am available for full stack positions, either full-time or remote.
                </div>

                <div className="mail">
                    <div>
                <p><FontAwesomeIcon icon="envelope" size="sm" color="yellowgreen" className="contactLogo" />chiakajunior@yahoo.com</p>
                <p><FontAwesomeIcon icon="envelope" size="sm" color="yellowgreen" className="contactLogo" />chikajunior19@gmail.com</p>
                <p><FontAwesomeIcon icon="phone" size="sm" color="yellowgreen" className="contactLogo" />+2348084052359</p>
                <p><FontAwesomeIcon icon="map-marker-alt" size="sm" color="yellowgreen" className="contactLogo" />Oshodi, Lagos, Nigeria</p>
                <p>Thanks</p>
                </div>

                <div>

                <Link to={{pathname:"https://twitter.com/NewtonChiaka"}}  target='_blank' > 
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="skyBlue" className="awesomeLogos"/>
            </Link>

            <Link to={{pathname:"https://github.com/chiaka1996"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="black" className="awesomeLogos" />
        </Link>

        <Link to={{pathname:"https://www.linkedin.com/in/osuji-chiaka-10b31a196/"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="skyBlue" className="awesomeLogos" />
        </Link>

        <Link to={{pathname:"https://www.facebook.com/profile.php?id=100009145788898"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="blue" className="awesomeLogos" />  
        </Link>
                
                </div>
                </div>
            </div>
    )
}

export default Contact;