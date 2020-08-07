import React from 'react';
import '../Css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Contact = (props) => {
    return (
        <div ref={props.refProp} className="certification-body">
                <div className="cert_header"><span>Reach Out To Me!</span></div>
                <div className="contact-intro">
                Interested in working together? Wherever you are with your idea or your project, 
                I'll be happy to help. I am Available for Full-stack Positions, either full-time or Remote
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
                <Link target="_blank" to="/twitter">
         <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="skyBlue" className="awesomeLogos" />
     </Link>

    <Link target="_blank" to="/github">
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="black" className="awesomeLogos" />
        </Link>

    <Link target="_blank" to="/linkedin">
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="skyBlue" className="awesomeLogos"/>
        </Link>

    <Link target="_blank" to="/facebook"> 
    <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="blue" className="awesomeLogos"/> 
    </Link> 
                </div>
                </div>
            </div>
    )
}

export default Contact;