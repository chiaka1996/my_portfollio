import React, {useState, useEffect} from 'react';
import ProfilePic from './Images/profilepics_edited.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTypingEffect from 'react-typing-effect';
import  '../Css/Profile.css';

const Profile = () => {

    const [greetings, setGreetings] = useState('');

    useEffect (()=> {
        const date = new Date();
        const hour = date.getHours();

        if(hour < 12) {
            return setGreetings( <div className="greeting"> Good Morning! <FontAwesomeIcon icon="smile-beam" size="sm" color="black" />, I'm <span className="name"> Chiaka Daniel</span> </div>);
        }
        if(hour >= 12 && hour < 17) {
            return setGreetings( <div className="greeting"> Good Day!<FontAwesomeIcon icon="smile-beam" size="sm"  color="black" />, I'm <span className="name"> Chiaka Daniel</span></div>);
        }
         else{
        return  setGreetings( <div className="greeting"> Good Evening! <FontAwesomeIcon icon="smile-beam" size="sm" color="black" />, I'm <span className="name"> Chiaka Daniel</span></div>);
         }
         
    }, [ ])

    return (
        <div className="profile">
            <div className="profilePic"> <img src={ProfilePic} alt="profile pic"  /> </div>
            <div className="introduction_name">{greetings}</div>
            <div className="typing-effect">
                <ReactTypingEffect
                 text = {["I'm a FullStack Software Developer.", "Motivated. Talented. Industrous"]} 
                />
            </div>

            <div className='logos'>
    <a href="twitter.com/NewtonChiaka"><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="skyBlue" className="awesomeLogos" /></a>
    <a href="https://github.com/chiaka1996"><FontAwesomeIcon icon={['fab', 'github']} size="2x" color="black" className="awesomeLogos"/></a>
    <a href=""><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="skyBlue" className="awesomeLogos"/></a>
    <a hhref=""> <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="blue" className="awesomeLogos"/> </a>  
    </div>

        <div className="Resume-contact">
            <div className='resume'> <p>My Resume</p></div>
            <div className='contactMe'><p>Contact Me</p></div>
        </div>

        <FontAwesomeIcon icon="angle-down" size="4x" color="yellowgreen" className="ArrowDown" />
        </div>
    )
}

export default Profile;