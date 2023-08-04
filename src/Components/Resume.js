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
        HTML, CSS, JAVASCRIPT, BOOTSTRAP, MATERIAL UI, REACT, NEXTJS, NODEJS, EXPRESS, MONGODB, REDUX 
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
        HNG INTERNSHIP
        </div>
        <div className='workDate'>
        oct, 2022 - dec, 2022
        </div>
        <div className="briefDescription"> 
        Led a team of Frontend developers to build an application
        </div>
        <ul>
        <li>Merging of team pull requests.</li>
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