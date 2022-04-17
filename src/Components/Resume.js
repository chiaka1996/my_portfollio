import React from 'react'
import '../Css/Projects.css'
import '../Css/Resume.css';
import Profile from './Profile';

const Resume = () => {
    return (
        <div className='resumeBody'>
        <div className='resumeProfile'>
        <Profile name='resume' />
        </div>
        <div className='resumeContainer'>
        <h2>Fullstack Developer</h2>
        <div className='resumeDescription'>
        I’m a fullstack software developer, 
        passionate about solving problems with codes by
        transforming ideas from pixels to scalable products and 
        building reusable apis.
        I create applications with user experience as a 
        top priority using various web tools, languages and 
        technology
        </div>

        <div>
        <div className='resumeSubHeader'>
        <div className='headerName'>Core Technologies</div>
        <div className='subHeaderLine'></div>
        </div>
        <div className='coreTechs'>
        HTML, CSS, BOOTSTRAP, MATERIAL UI, REACT, NODEJS, EXPRESS, MONGODB, REDUX 
        </div>
        </div>

        <div>
        <div className='resumeSubHeader'>
        <div className='familiarWith'>Familiar With</div>
        <div className='familiarLine'></div>
        </div>
        <div className='coreTechs'>
        PHP, VUE, MSQL, SASS
        </div>
        </div>

        <div>
        <div className='resumeSubHeader'>
        <div className='headerName'>
        Work Experience
        </div>
        <div className='familiarLine'></div>
        </div>

        <div className='workList'>
        <div className='workHeader'>
        ZzarEvent - Web developer[Contract}
        </div>
        <div className='workDate'>
        March 10, 2022 - Present
        </div>
        <div className="briefDescription">
        Currently working Part-time as a web developer with zzarEvent.
        </div>

        <ul>
            <li>Built a simple website</li>
            <li>created an api for collecting customers requests</li>
            <li>created an api for collecting customers feedbacks</li>
            <li>created an api to enable the admin view all customer request </li>
            <li>Creaed an api to enable the admin view all the feedbacks</li>
            <li>Helped in buildib</li>
        </ul>
        </div> 

        <div className='workList'>
        <div className='workHeader'>
        Rain Tech - <span>Frontend Developer</span> [Contract}
        </div>
        <div className='workDate'>
        June 17, 2021 - July 4, 2021
        </div>
        <div className="briefDescription">
        Built a Landing page for a tech startup company.
        </div> 
        <ul>
            <li>Brainstormed with the ui/ux team for the design </li>
            <li>converted the figma design to a website.</li>
        </ul> 

        </div>

        <div className='workList'>
        <div className='workHeader'>
        HNG INTERNSHIP
        </div>
        <div className='workDate'>
        May, 2020 - July, 2020
        </div>
        <div className="briefDescription"> 
        I contributed in developing user interfaces for quite a 
        number of products within three months while learning 
        new skills
        </div>
        <ul>
        <li>led the backend team in building Apis</li>
        <li>
        Assisted the frontend department of my team 
        to deliver responsive web templates to be sold on 
        envato market
        </li>
        <li>
        Refactored codes of team members
        </li>
        <li>
        Assisted the frontend team in consuming backend Apis
        </li>
        </ul>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Resume;