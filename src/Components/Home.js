import React from 'react';
import Profile from './Profile';
import FeaturedProjects from './FeaturedProjects';
import '../Css/Projects.css';
 
const Home = (props) => {
    return (
        <div className='projectBody'>
            <div className='homeProfile'>
            <Profile name='projects'/>
            </div>
            <div className="homeContainer">
            <div className='featuredHeader'>
            FEATURED
            </div>
            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "E-commerce Website"
            stacks="REACT,NODEJS,EXPRESS,REDUX,MONGODB"
            description = "An Ecommerce site, with an admin dashboard."
            type = 'featured'
            liveLink="https://chiakastore.herokuapp.com/"
            codeLink=""
            />
            </div>

            <div className='featuredProjects'> 
            <FeaturedProjects 
            header= "Netflix Authentication Clone"
            stacks="HTML,CSS,NODEJS,EXPRESS,MONGODB"
            description = "A simple Clone of Netflix Authentication system"
            type = 'featured'
            liveLink="https://netflixauthenticationclone.netlify.app/"
            codeLink="https://github.com/chiaka1996/Zuri-Netflix-Clone"
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
            LiveLink = 'https://noforget.netlify.app'
            codeLink='https://github.com/chiaka1996/noforgetApp'
            />
            </div>
            <div className='gridItem1'>
            <FeaturedProjects
            header="Dashboar design"
            stacks="HTML,CSS"
            description= "A simple dashboard with dragable elements."
            type = 'others'
            LiveLink = 'https://daniel-dashboard.netlify.app/'
            codeLink='https://github.com/chiaka1996/dashboard_interview'
            />
            </div>
            <div className='gridItem1'>
            <FeaturedProjects
            header="Weather App"
            stacks="HTML,CSS, JAVASCRIPT"
            description= "A weather application that tells the weather of different cities"
            type = 'others'
            LiveLink = 'https://chiaka1996.github.io/weatherApp/'
            codeLink='https://github.com/chiaka1996/weatherApp'
            />
            </div>
            <div className='gridItem1'>
            <FeaturedProjects
            header="Covid-19 Tracker App"
            stacks="REACT,CSS"
            description= "A tracker Showing the number of Covid-19 cases in different cities."
            type = 'others'
            LiveLink = 'https://knowthestat.netlify.app'
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
            LiveLink = 'https://zzarpro.netlify.app/'
            codeLink='https://github.com/chiaka1996/zzarclientside'
            />
            </div>
            <div className='gridItem2'>
            <FeaturedProjects
            header="FLUX HOTEL"
            stacks="HTML,CSS,BOOTSTRAP"
            description= "Frontend design of an hotel website"
            type = 'others'
            LiveLink = 'https://chiaka1996.github.io/fluxhotel/'
            codeLink='https://github.com/chiaka1996/fluxhotel'
            />
            </div>
            <div className='gridItem2'>
            <FeaturedProjects
            header="Rain Tech"
            stacks="React,CSS"
            description= "A landing page for a tech startup"
            type = 'others'
            LiveLink = 'https://github.com/chiaka1996/rain_website'
            codeLink='https://github.com/chiaka1996/rain_website'
            />
            </div>
            <div className='gridItem2'>
            <FeaturedProjects
            header="QUIZ APP"
            stacks="HTML,CSS,JAVASCRIPT"
            description= "A Simple quiz App"
            type = 'others'
            LiveLink = 'https://chiaka1996.github.io/javascriptquiz/'
            codeLink='https://github.com/chiaka1996/javascriptquiz'
            />
            </div>


            </div>
            </div>
            </div>
        
        </div>
    )
}

export default Home;
