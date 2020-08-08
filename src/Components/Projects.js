import React from 'react';
import '../Css/Projects.css';
import project1 from './Images/project1.JPG';
import project2 from './Images/project2.JPG';
import project3 from './Images/project3.JPG';
import project4 from './Images/project4.JPG';
import project5 from './Images/project5.JPG';
import project7 from './Images/project7.JPG';
import {Link} from 'react-router-dom';

const Projects = (props) => {

    return (
        <div ref={props.refProp} className='projectBody'>

        <div className="projectHeader"> <span >Projects</span> </div>

            {/* first three projects */}
        <div className="projects">

          <div className="projectFlex">
                <img src={project4} alt="project5" />
                <section>
                <Link to={{pathname:"https://chiaka1996.github.io/zzarweb/"}} className='projectName' target='_blank' >
                    <p> Event Planning Website</p>
                    </Link>
                    <p className="statement">This is a Simple frontend  Event planning website design, that is user friendly.</p>
                    <div>
                        <button>#HTML</button>
                        <button>#BOOTSTRAP</button>
                        <button>#CSS</button>
                        <button>#JAVASCRIPT</button>
            
                    </div>
                </section>
                
            </div>

            <div className="projectFlex">
            <div><img src={project5} alt="project5" /></div>
                <section>
                <Link to={{pathname:"https://chiaka1996.github.io/fluxhotel/"}} className='projectName' target='_blank' >
                <p> Hotel Website</p>
                </Link>
                    <p className="statement">This is a user friendly hotel website, built by a team of HNGi7 interns, in which i was opportuned to be the team lead </p>
                    <div>
                        <button>#HTML</button>
                        <button>#CSS</button>
                        <button>#BOOTSTRAP</button>
                        <button>#JAVASCRIPT</button>
                    </div>
                </section>
                
            </div>

            
            <div className="projectFlex">
            <div><img src={project2} alt="project2" /></div>
                <section>
                <Link to={{pathname:"https://chiaka1996.github.io/weatherApp/"}} className='projectName' target='_blank' >
                <p> Weather App</p>
                </Link>
                    <p className="statement">This is Weather App that gives immediate weather condition of cities around the world  </p> 
                    <div>
                        <button>#HTML</button>
                        <button>#CSS</button>
                        <button>#JAVASCRIPT</button>
                    </div>
                </section>
                
            </div>
            
        </div>
        


            {/* second part of project */}
            
        <div className="projects">

            <div className="projectFlex">
                <div><img src={project1} alt="project1" /></div>
                <section>
                <Link to={{pathname:"https://knowthestat.netlify.app"}} className='projectName' target='_blank' >
                    <p> Covid-19 Tracker</p>
                    </Link>
                    <p className="statement">This is a covid-19 Tracker App, that gives daily update of corona virus cases aroud the world </p>
                    <div>
                        <button>#REACT</button>
                        <button>#BOOTSTRAP</button>
                        <button>#CSS</button>
                        <button>#NODE</button>
                    </div>
                </section>
                
            </div>

            <div className="projectFlex">
            <div><img src={project3} alt="project3" /></div>
                <section>
                <Link to={{pathname:"https://chiaka1996.github.io/javascriptquiz/"}} className='projectName' target='_blank' >   
                <p> Quiz App</p>
                </Link>
                    <p className="statement">This is a Javascript Quiz app, that helps educate the player on various topics.</p>
                    <div>
                        <button>#HTML</button>
                        <button>#CSS</button>
                        <button>#JAVASCRIPT</button>
                    </div>
                </section>  
            </div>
        
            <div className="projectFlex">
            <div><img src={project7} alt="project7" /></div>
                <section>
                <Link to={{pathname:"https://facebook-google-signup.netlify.app/"}} className='projectName' target='_blank' >
                <p > FACEBOOK-GOOGLE AUTHENTICATION</p>
                </Link>
                    <p className="statement">This is a frontend FACEBOOK and GOOGLE Authentication, for easy login and signup of users.  </p> 
                    <div>
                        <button>#REACT</button>
                        <button>#CSS</button>
                        <button>#BOOTSTRAP</button>
                    </div>
                </section>            
            </div>

        </div>

        
        <div className='see-more'>
        <Link to={{pathname:"https://github.com/chiaka1996"}}  target='_blank' >
            <button>see more</button>
            </Link>
            </div>
        
        </div>
    )
}

export default Projects;
