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
        HTML, CSS, TAILWIND-CSS, JAVASCRIPT, BOOTSTRAP, MATERIAL UI, REACT, NEXTJS, NODEJS, EXPRESS, MONGODB, REDUX 
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
        1035 Technology remote — part-time frontend developer

        </div>
        <div className='workDate'>
        march, 2024 - till date
        </div>
        {/* <div className="briefDescription"> 
        Building and Managing a web application that allows Individual Students and Schools to Signup to free Tech Training programs and
        give them access to free learning materials.
        </div> */}
        <ul>
        <li>Converting of Figma designs to products</li>
        <li>building user friendly and responsive web interface</li>
        <li>
        building apis to help collect and save users information to the database
        </li>
        <li>
        Consuming the Apis from the Frontend, making it possible for users to save their information 
        </li>
        <li>
        Maintaining the company website
        </li>
        </ul>
        </div>

        <br/>
        <div className='workList'>
        <div className='workHeader'>
        HNG INTERNSHIP
        </div>
        <div className='workDate'>
        oct, 2023 - dec, 2023
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