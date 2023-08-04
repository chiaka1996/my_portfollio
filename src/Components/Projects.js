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
            header= "Student Year Book"
            stacks="Next.js,MONGODB"
            description = "A student web based year book for graduating students"
            type = 'featured'
            liveLink="https://chiaka-daniel-nextjs-test.vercel.app/"
            codeLink=""
            />
            </div>
            
            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "Artsy"
            stacks="Nextjs"
            description = "An e-commerce picture shop"
            type = 'featured'
            liveLink="https://artsy-khaki.vercel.app/"
            codeLink="https://github.com/chiaka1996/Artsy"
            />
            </div>

            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "Opspad"
            stacks="React, Python"
            description = "An Application that helps Devops engineers manage all their business servers"
            type = 'featured'
            liveLink="https://opspad-theta.vercel.app/"
            codeLink=""
            />
            </div>

            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "Tracquire"
            stacks="Nextjs, Laravel"
            description = "A social commerce application for the exchange of goods. (still building)"
            type = 'featured'
            liveLink="https://tracquire.vercel.app"
            codeLink=""
            />
            </div>

            <div className='othersHeader'>
            OTHERS
            </div>

            <div className="projectGrid"> 
            <div className='projectGrid1'>
            <div className='gridItem1'>
            <FeaturedProjects
            header="noForget"
            stacks="VUE,NODEJS,EXPRESS,MONGODB"
            description= "A simple reminder application"
            type = 'others'
            liveLink = 'https://noforget.netlify.app'
            codeLink='https://github.com/chiaka1996/noforgetApp'
            />
            </div>
            <div className='gridItem1'>
            <FeaturedProjects
            header="Dashboard design"
            stacks="HTML,CSS"
            description= "A simple dashboard with dragable elements."
            type = 'others'
            liveLink = 'https://daniel-dashboard.netlify.app/'
            codeLink='https://github.com/chiaka1996/dashboard_interview'
            />
            </div>
            <div className='gridItem1'>
            <FeaturedProjects
            header="Weather App"
            stacks="HTML,CSS, JAVASCRIPT"
            description= "A weather application that tells the weather of different cities"
            type = 'others'
            liveLink = 'https://chiaka1996.github.io/weatherApp/'
            codeLink='https://github.com/chiaka1996/weatherApp'
            />
            </div>
            <div className='gridItem1'>
            <FeaturedProjects
            header="Covid-19 Tracker App"
            stacks="REACT,CSS"
            description= "A tracker Showing the number of Covid-19 cases in different cities."
            type = 'others'
            liveLink = 'https://knowthestat.netlify.app'
            codeLink='https://github.com/chiaka1996/covid19-app'
            />
            </div>
            </div>

            <div className='projectGrid2'>
            <div className='gridItem2'>
            <FeaturedProjects
            header="Zzarpro"
            stacks="HTML,CSS,NODEJS,EXPRESS,MONGODB"
            description= "An event planning website"
            type = 'others'
            liveLink = 'https://zzarpro.netlify.app/'
            codeLink='https://github.com/chiaka1996/zzarclientside'
            />
            </div>
            <div className='gridItem2'>
            <FeaturedProjects
            header="FLUX HOTEL"
            stacks="HTML,CSS,BOOTSTRAP"
            description= "Frontend design of an hotel website"
            type = 'others'
            liveLink = 'https://chiaka1996.github.io/fluxhotel/'
            codeLink='https://github.com/chiaka1996/fluxhotel'
            />
            </div>
            <div className='gridItem2'>
            <FeaturedProjects
            header="Rain Tech"
            stacks="React,CSS"
            description= "A landing page for a tech startup"
            type = 'others'
            liveLink = 'https://github.com/chiaka1996/rain_website'
            codeLink='https://github.com/chiaka1996/rain_website'
            />
            </div>
            <div className='gridItem2'>
            <FeaturedProjects
            header="QUIZ APP"
            stacks="HTML,CSS,JAVASCRIPT"
            description= "A Simple quiz App"
            type = 'others'
            liveLink = 'https://chiaka1996.github.io/javascriptquiz/'
            codeLink='https://github.com/chiaka1996/javascriptquiz'
            />
            </div>


            </div>
            </div>
            </div>
        
        </div>
    )
}

export default Projects;
