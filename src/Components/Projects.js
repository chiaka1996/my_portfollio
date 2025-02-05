import React from 'react';
import Profile from './Profile';
import FeaturedProjects from './FeaturedProjects';
import '../Css/Projects.css';
 
const Projects = (props) => {

    return (
        <div className='projectBody'>
            <div className="Profile">
            <Profile name='projects' />
            </div>
            <div className="projectContainer">
            <div className='featuredHeader'>
            FEATURED
            </div>

            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "PERFTRAKA"
            stacks="HTML, CSS, TAILWIND, LARAVEL, BLADE"
            description = "A web application for a security company, used for capturing Locations and managing employees logs "
            type = 'featured'
            liveLink="https://perftraka.com/"
            codeLink=""
            />
            </div>

            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "Bright UK Portfolio"
            stacks="VUE, FIREBASE"
            description = "A Portfolio website for a Public Speaker "
            type = 'featured'
            liveLink="https://www.thebrightuk.com/"
            codeLink=""
            />
            </div>

            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "Slumtech Foundation"
            stacks="Next.js, MONGODB"
            description = "A website for a non-profit organisation, that specializes in training teenagers in different aspect of technology"
            type = 'featured'
            liveLink="https://www.slumtech.org/"
            codeLink=""
            />
            </div>

            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "1035 Technology"
            stacks="Next.js"
            description = "A website For a Tech, Telecommunication & Energy Consulting Service Company In Nigeria"
            type = 'featured'
            liveLink="https://www.1035gtech.com/"
            codeLink=""
            />
            </div>

            {/* <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "A2z101"
            stacks="Next.js"
            description = "A website for a Project Management company"
            type = 'featured'
            liveLink="https://www.atozoneonone.com/"
            codeLink=""
            />
            </div> */}
            </div>
        
        </div>
    )
}

export default Projects;
