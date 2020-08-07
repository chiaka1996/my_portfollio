/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from 'react';
import ProfilePic from './Images/profilepics_edited.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTypingEffect from 'react-typing-effect';
import  '../Css/Profile.css';

const Profile = (props) => {

    const [greetings, setGreetings] = useState('');

    const replaceGithub = () => {
        window.location.replace('https://github.com/chiaka1996');
    }

    const replaceResume = () => {
        window.location.replace('https://chiaka1996.github.io/my-resume/');
    }

    const replaceFacebook = () => {
        window.location.replace('https://www.facebook.com/profile.php?id=100009145788898');
    }

    const replaceTwitter = () => {
        window.location.replace('https://twitter.com/NewtonChiaka');
    }

    const replaceLinkedIn = () => {
        window.location.replace('https://www.linkedin.com/in/osuji-chiaka-10b31a196/');
    }


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
         
    }, [ ]);

 
    return (
        <div className="profile">
            <div className="profilePic"> <img src={ProfilePic} alt="profile pic"  /> </div>
            <div className="introduction_name">{greetings}</div>
            <div className="typing-effect">
                <ReactTypingEffect
                 text = {["I'm a FullStack Software Developer.", "Motivated. Talented. Disciplined"]} 
                />
            </div>

            <div className='logos'>

         <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" color="skyBlue" className="awesomeLogos" onClick={replaceTwitter} />

        <FontAwesomeIcon icon={['fab', 'github']} size="2x" color="black" className="awesomeLogos" onClick={replaceGithub} />

        <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" color="skyBlue" className="awesomeLogos" onClick={replaceLinkedIn}/>

        <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" color="blue" className="awesomeLogos" onClick={replaceFacebook}/>  

    </div>

        <div className="Resume-contact">
           <div className='resume' onClick={replaceResume}> <p>My Resume</p></div>
            <div className='contactMe' onClick={()=>props.scrollToRef(props.myContact)}><p>Contact Me</p></div>
        </div>

        <FontAwesomeIcon icon="angle-down" size="4x" color="yellowgreen" className="ArrowDown" />

        </div>
    )
}

export default Profile;