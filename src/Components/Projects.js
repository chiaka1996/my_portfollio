import React from 'react';
import '../Css/Projects.css';
import {Link} from 'react-router-dom';
 
const Projects = (props) => {

    return (
        <div ref={props.refProp} className='projectBody'>

        <div className="projectHeader"> <span style={{color : 'black'}} >Projects</span> </div>

            {/* first three projects */}
        <div className="projects">

          <div className="projectFlex">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838461/portfolio-images/project4_cipsyf.jpg"
                 alt="zzar event pro website" />
                <section>
                <Link to={{pathname:"https://chiaka1996.github.io/zzarweb/"}} className='projectName' target='_blank' >
                    <h5> zzar Website</h5>
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
            <div><img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838496/portfolio-images/project5_xgw1zx.jpg"
             alt="hotel frontend design" /></div>
                <section>
                <Link to={{pathname:"https://chiaka1996.github.io/fluxhotel/"}} className='projectName' target='_blank' >
                <h5> Flux Hotel Website</h5>
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
            <div><img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838413/portfolio-images/project2_iquvob.jpg"
             alt="weather app website" /></div>
                <section>
                <Link to={{pathname:"https://chiaka1996.github.io/weatherApp/"}} className='projectName' target='_blank' >
                <h5> Weather App</h5>
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
                <div><img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838396/portfolio-images/project1_epox8c.jpg"
                 alt="corona virus statistics website" /></div>
                <section>
                <Link to={{pathname:"https://knowthestat.netlify.app"}} className='projectName' target='_blank' >
                    <h5> Covid-19 Tracker</h5>
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
            <div><img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838440/portfolio-images/project3_jydc8o.jpg"
             alt="quiz app website" /></div>
                <section>
                <Link to={{pathname:"https://chiaka1996.github.io/javascriptquiz/"}} className='projectName' target='_blank' >   
                <h5> Quiz App</h5>
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
            <div><img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838549/portfolio-images/raystore_racuda.jpg"
             alt="raystore website" /></div>
                <section>
                <Link to={{pathname:"https://sheltered-river-47123.herokuapp.com/cloths"}} className='projectName' target='_blank' >
                <h5> RAYSTORE</h5>
                </Link>
                    <p className="statement">This is a basic e-commerce site, it was built using MERN stack for frontend and backend. </p> 
                    <div>
                        <button>#REACT</button>
                        <button>#CSS</button>
                        <button>#BOOTSTRAP</button>
                        <button>#NODE</button>
                        <button>#EXPRESS</button>
                        <button>#MONGODB</button>
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
