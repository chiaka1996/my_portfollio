import React from 'react';
import '../Css/Projects.css';
import project1 from './Images/project1.JPG';
import project2 from './Images/project2.JPG';
import project3 from './Images/project3.JPG';

const Projects = () => {
    return (
        <div className='projectBody'>

        <div className="projectHeader"> <span >Projects</span> </div>

        <div className="projects">

            <div className="projectFlex">
                <div><img src={project1} alt="project1" /></div>
                <section>
                    <p className='projectName'> Covid-19 Tracker</p>
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
                <p className='projectName'> Quiz App</p>
                    <p className="statement">This is a Javascript Quiz app, that helps educate the player on various topics.</p>
                    <div>
                        <button>#HTML</button>
                        <button>#CSS</button>
                        <button>#JAVASCRIPT</button>
                    </div>
                </section>
                
            </div>

            <div className="projectFlex">
            <div><img src={project2} alt="project2" /></div>
                <section>
                <p className='projectName'> Weather App</p>
                    <p className="statement">This is Weather App that gives immediate weather condition of cities around the world  </p> 
                    <div>
                        <button>#HTML</button>
                        <button>#CSS</button>
                        <button>#JAVASCRIPT</button>
                    </div>
                </section>
                
            </div>
        </div>
        </div>
    )
}

export default Projects;
