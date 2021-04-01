/* eslint-disable no-restricted-globals */
import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactTypingEffect from 'react-typing-effect';
import  '../Css/Profile.css';
import {Link} from 'react-router-dom';

const Profile = (props) => {

    const [greetings, setGreetings] = useState('');

    useEffect (()=> {
        const date = new Date();
        const hour = date.getHours();

        if(hour < 12) {
            return setGreetings( <div className="greeting"> Good Morning! <FontAwesomeIcon icon="smile-beam" size="sm" color="#64B409" />, I'm <span className="name"> Osuji Chiaka</span> </div>);
        }
        if(hour >= 12 && hour < 17) {
            return setGreetings( <div className="greeting"> Good Afternoon!<FontAwesomeIcon icon="smile-beam" size="sm"  color="#64B409" />, I'm <span className="name"> Osujii Chiaka</span></div>);
        }
         else{
        return  setGreetings( <div className="greeting"> Good Evening! <FontAwesomeIcon icon="smile-beam" size="sm" color="#64B409" />, I'm <span className="name"> Osuji Chiaka</span></div>);
         }
         
    }, [ ]);

 
    return (
        <div className="profile">
        <div className="profile_grid">
            <div className="profile_grid_item">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609618610/logos/svgProfile_fl17yi.jpg" alt="profile_image" />
            </div>
            <div className="profile_grid_item grid_about">
            <div className="introduction_name">{greetings}</div>
            <div className="typing_effect">
              <ReactTypingEffect
                  text = {["I'm a FullStack Software Developer.", "Motivated. Talented. Disciplined"]} 
                 />
             </div>

             <p>I'm a motivated full stack Developer with great passion for building 
            excellent softwares, with an experience in converting Figma and Adobe XD design mockups to HTML and CSS.
            I build fun projects using mostly PHP, JAVASCRIPT, REACT and VUE. I offer 2 years of development experience,
            a strong aptitude for learning new technologies,
            and a proven track record of meeting aggressive goals.
          </p>

          <div className="resumeButton">
          <Link to={{pathname:"https://docs.google.com/document/d/1eG1NzBiaJNYSRhHbnkMPjCBRvuZn2Jezj_KRP-WPyjg/edit?usp=sharing"}} className='resume' target='_blank' >
          <button>My Resume</button>
          </Link>
           </div>

            </div>
        </div>

        <FontAwesomeIcon icon="angle-down" size="4x" color="yellowgreen" className="ArrowDown" />
        </div>
    )
}

export default Profile;