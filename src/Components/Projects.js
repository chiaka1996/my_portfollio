import React from 'react';
import '../Css/Projects.css';
import project1 from './Images/project1.JPG';
import project2 from './Images/project2.JPG';
import project3 from './Images/project3.JPG';
import project4 from './Images/project4.JPG';
import project5 from './Images/project5.JPG';
import project7 from './Images/project7.JPG';

const Projects = (props) => {

    const replaceZzar = () => {
        window.location.replace('https://chiaka1996.github.io/zzarweb/');
    }

    const replaceFlux = () => {
        window.location.replace('https://chiaka1996.github.io/fluxhotel/');
    }

    const replaceQuiz = () => {
        window.location.replace('https://chiaka1996.github.io/javascriptquiz/');
    }

    const replaceFacebookGoogle = () => {
        window.location.replace('https://facebook-google-signup.netlify.app/');
    }

    const replaceWeather = () => {
        window.location.replace('https://chiaka1996.github.io/weatherApp/');
    }

    const replaceCovid = () => {
        window.location.replace('https://knowthestat.netlify.app');
    }

    const replaceGithub = () => {
        window.location.replace('https://github.com/chiaka1996');
    }

    return (
        <div ref={props.refProp} className='projectBody'>

        <div className="projectHeader"> <span >Projects</span> </div>

            {/* first three projects */}
        <div className="projects">

          <div className="projectFlex">
                <img src={project4} alt="project5" />
                <section>
                    <p className='projectName' onClick={replaceZzar}> Event Planning Website</p>
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
                <p className='projectName' onClick={replaceFlux}> Hotel Website</p>
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
                <p className='projectName' onClick={replaceWeather}> Weather App</p>
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
                    <p className='projectName' onClick={replaceCovid}> Covid-19 Tracker</p>
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
                <p className='projectName' onClick={replaceQuiz}> Quiz App</p>
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
                <p className='projectName' onClick={ replaceFacebookGoogle}> FACEBOOK-GOOGLE AUTHENTICATION</p>
                    <p className="statement">This is a frontend FACEBOOK and GOOGLE Authentication, for easy login and signup of users.  </p> 
                    <div>
                        <button>#REACT</button>
                        <button>#CSS</button>
                        <button>#BOOTSTRAP</button>
                    </div>
                </section>            
            </div>

        </div>

        <div className="see-more" onClick={replaceGithub}><button>see more</button></div>
        </div>
    )
}

export default Projects;
