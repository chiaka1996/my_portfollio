/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-restricted-globals */
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import '../Css/Profile.css';

const Profile = ({name}) => {
    const [projectWidth, setProjectWidth] = useState(false);
    const [resumeWidth, setResumeWidth] = useState(false);
    const [contactWidth, setContactWidth] = useState(false);
 
    return (
        <div className='profile'>
            <div className="TopImgContainer">
            <img 
            src='https://res.cloudinary.com/chiaka1996/image/upload/v1649257451/profilepics_edited_2_rquik6.jpg'
            alt="profile img"
            />
            </div>
            <div className="header">
            <div>Hello, I'm</div>
            <div className='animate_animated animate__flipInX'>
            Osuji Chiaka
            </div> 
        </div>
        <div className='mobileHeader'>
        Hello, I'm Osuji Chiaka
        </div>

        <div className="introduction"> 
        I'm a motivated <strong>Fullstack Developer</strong> with great passion for building 
        excellent <strong>softwares</strong>, I create interactive experiences for amazing people 
        using modern <strong>web technologies</strong>. I offer over <strong>2 years</strong> of development experience,
        a strong aptitude for learning new technologies,
        and a proven track record of meeting aggressive goals.
        </div>

        <div className="linkContainer">
        <Link 
        to='/project'
        style={{
            textDecoration: 'none'
        }}
        >
        <div 
        className="links"
        onMouseEnter={()=>setProjectWidth(true)}
        onMouseLeave={() => setProjectWidth(false)}
        >
        <div className="projects">
        <span>00</span>
        {
        name==='projects'? <div className='extendLine'></div> : 
        <div className={projectWidth ? 'extendLine' : 'line'}></div>
        }
        <span>PROJECTS</span>
        </div>
        </div>
        </Link>

        <Link 
        to='/resume'
        style={{
            textDecoration: 'none'
        }}
        >
        <div 
        className="links"
        onMouseEnter={()=>setResumeWidth(true)}
        onMouseLeave={() => setResumeWidth(false)}
        >
        <div className="projects">
        <span>01</span>
        {
        name === 'resume'? <div className='extendLine'></div> : 
        <div className={resumeWidth ? 'extendLine' : 'line'}></div>
        }
        <span> RESUME</span>
        </div>
        </div>
        </Link>

        <a
        href="https://docs.google.com/presentation/d/17o7maq-rVbTai2CDVOBdctvz7znn3qxEdzoWk8jEmRc/edit?usp=sharing"
        target='_blank'
        style={{
            textDecoration: 'none'
        }}
        >
        <div 
        className="links"
        onMouseEnter={()=>setContactWidth(true)}
        onMouseLeave={() => setContactWidth(false)}
        >
        <div className="projects">
        <span>02</span>
        {
        name === 'contact'? <div className='extendLine'></div> : 
        <div className={contactWidth ? 'extendLine' : 'line'}></div>
        }
        <span>CERTIFICATIONS</span>
        </div>
        </div>
        </a>
        </div>

       
       {/*mobileExplorer is mobile view only */}
        <div className='mobileExplore animate_animated animate__pulse animate__infinite'>
        <Link
        to='/project'
        style={{color: 'white'}}
        >
        <section>
        <span>Explore</span>
        <div className="btnFlex"></div>
        <div>
        <FontAwesomeIcon 
        icon={['fa', 'play']} 
        size="sm" 
        color="lightgrey" 
        // className="awesomeLogos" 
        />
        </div>
        </section>
        </Link>
        </div>
        

        <div className='socialMediaLink'> 
        <div className="imgContainer">
        <img 
        src='https://res.cloudinary.com/chiaka1996/image/upload/v1649257451/profilepics_edited_2_rquik6.jpg'
        alt="profile img"
        />
        </div>
        <div className="github_twitter_linkedin">
        <a
        href="https://github.com/chiaka1996"
        target='_blank' 
        rel='noreferrer'
        style={{
            color: 'rgb(103, 202, 11)',
            marginRight: '5%'
        }}
        > 
        <FontAwesomeIcon 
        icon={['fab', 'github']} 
        size="sm" 
        color="rgb(103, 202, 11)" 
        className="awesomeLogos" 
        />
        <span>
        Github
        </span>
        </a>
        <a
        href="https://twitter.com/NewtonChiaka"  
        target='_blank'
        rel='noreferrer'
        style={{
            color: 'rgb(103, 202, 11)',
            marginRight: '5%'
        }}
        > 
        <FontAwesomeIcon 
        icon={['fab', 'twitter']} 
        size="sm" 
        color="rgb(103, 202, 11)" 
        className="awesomeLogos"
        />
        <span>
        Twitter
        </span>
        </a>
        <a 
        href="https://www.linkedin.com/in/osuji-chiaka-10b31a196/"
        target='_blank' 
        rel='noreferrer'
        style={{
            color: 'rgb(103, 202, 11)',
            marginRight: '5%'
        }}
        > 
        <FontAwesomeIcon 
        icon={['fab', 'linkedin-in']} 
        size="sm" 
        color="rgb(103, 202, 11)" 
        className="awesomeLogos" 
        />
        <span>
        Linkedin
        </span>
        </a>
        </div>
        </div>
        <div className='inspiredBy'> 
        Inspired by 
        <strong>Collins Enebelli</strong>
        </div>
        </div>
    )
}

export default Profile;