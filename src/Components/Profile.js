/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from 'react';
import ProfilePic from './Images/profilepics_edited.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTypingEffect from 'react-typing-effect';
import  '../Css/Profile.css';
import {Link} from 'react-router-dom';

const Profile = (props) => {

    const [greetings, setGreetings] = useState('');

    const [opac, setOpacity] = useState(false);

    useEffect (()=> {
        const date = new Date();
        const hour = date.getHours();

        if(hour < 12) {
            return setGreetings( <div className="greeting"> Good Morning! <FontAwesomeIcon icon="smile-beam" size="sm" color="yellow" />, I'm <span className="name"> Chiaka Daniel</span> </div>);
        }
        if(hour >= 12 && hour < 17) {
            return setGreetings( <div className="greeting"> Good Afternoon!<FontAwesomeIcon icon="smile-beam" size="sm"  color="yellow" />, I'm <span className="name"> Chiaka Daniel</span></div>);
        }
         else{
        return  setGreetings( <div className="greeting"> Good Evening! <FontAwesomeIcon icon="smile-beam" size="sm" color="yellow" />, I'm <span className="name"> Chiaka Daniel</span></div>);
         }
         
    }, [ ]);

 
    return (
        <div className={opac ? "profile" : "profile2" } onLoad={()=>setOpacity(true)}>
            <div className="profilePic"> <img src={ProfilePic} alt="profile pic"  /> </div>
            <div className="introduction_name">{greetings}</div>
            <div className="typing-effect">
                <ReactTypingEffect
                 text = {["I'm a FullStack Software Developer.", "Motivated. Talented. Disciplined"]} 
                />
            </div>

            <div className='logos'>

            <Link to={{pathname:"https://twitter.com/NewtonChiaka"}}  target='_blank' > 
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="skyBlue" className="awesomeLogos"/>
            </Link>
            
        <Link to={{pathname:"https://github.com/chiaka1996"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="white" className="awesomeLogos" />
        </Link>

        <Link to={{pathname:"https://www.linkedin.com/in/osuji-chiaka-10b31a196/"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="skyBlue" className="awesomeLogos" />
        </Link>

        <Link to={{pathname:"https://www.facebook.com/profile.php?id=100009145788898"}}  target='_blank' > 
        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="blue" className="awesomeLogos" />  
        </Link>
    </div>

        <div className="Resume-contact">
         <Link to={{pathname:"https://chiaka1996.github.io/my-resume/"}} className='resume' target='_blank' > <div> <p>My Resume</p></div></Link>
            <div className='contactMe' onClick={()=>props.scrollToRef(props.myContact)}><p>Contact Me</p></div>
        </div>

        <FontAwesomeIcon icon="angle-down" size="4x" color="yellowgreen" className="ArrowDown" />

        </div>
    )
}

export default Profile;