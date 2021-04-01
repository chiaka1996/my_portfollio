import React from 'react';
import '../Css/Projects.css';
import {Link} from 'react-router-dom';
 
const Projects = (props) => {

    return (
        <div ref={props.refProp} className='projectBody'>

        <div className="projectHeader"> <span style={{color : 'black'}} >Projects</span> </div>

        <div className="projects">

        <div className="projectGrid">
            <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1611594669/noforget_nhqirn.jpg"
             alt="raystore website" />
                <section>
               <h5>NOFORGET</h5>
                <p className="statement">This is a simple reminder app, built with vue.js,Node.js,express and mongoDb. </p>
                
                <Link to={{pathname:"https://noforget.netlify.app"}} className='projectName' target='_blank' >
                <button>Live Link</button>
                </Link>    
                </section>     
            </div>

        <div className="projectGrid">
            <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1611594696/portfolio_ybj9ok.jpg"
             alt="raystore website" />
                <section>
               <h5>MY PORTFOLIO</h5>
                <p className="statement">YEEPE!!!. you are here. my portfolio was built using react. </p>
                
                <Link to={{pathname:"https://chiakadaniel.netlify.app"}} className='projectName' target='_blank' >
                <button>Live Link</button>
                </Link>    
                </section>     
            </div>

            <div className="projectGrid">
            <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838549/portfolio-images/raystore_racuda.jpg"
             alt="raystore website" />
                <section>
               <h5> RAYSTORE</h5>
                <p className="statement">This is a basic e-commerce site, it was built using MERN stack for frontend and backend. </p>
                
                <Link to={{pathname:"https://sheltered-river-47123.herokuapp.com/cloths"}} className='projectName' target='_blank' >
                <button>Live Link</button>
                </Link>    
                </section>     
            </div>

            <div className="projectGrid">
            <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1617298657/portfolio-images/newzzarpro_b9n5oe.jpg"
                 alt="zzar event pro website" />
                <section>
                    <h5>Zzar Website</h5>
                <p className="statement">This is a Simple Event planning website, that is user friendly,
                built with html, css, node.js, bootstrap, express, mongoDb.
                </p>
                      <Link to={{pathname:"https://zzarpro.netlify.app/"}} className='projectName' target='_blank' >
                        <button>Live Link</button>
                    </Link>    
                </section>
            </div>

            <div className="projectGrid">
            <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838496/portfolio-images/project5_xgw1zx.jpg"
             alt="hotel frontend design" />
                <section>
                <h5> Flux Hotel Website</h5>
                <p className="statement">This is a user friendly hotel website, built by a team of HNGi7 interns, in which i was the team lead </p>
                <Link to={{pathname:"https://chiaka1996.github.io/fluxhotel/"}} className='projectName' target='_blank' >
                <button>Live Link</button>
                </Link>      
               </section>
            </div>

            <div className="projectGrid">
            <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838413/portfolio-images/project2_iquvob.jpg"
             alt="weather app website" />
                <section>
                <h5> Weather App</h5>
                <p className="statement">This is Weather App that gives immediate weather condition of cities around the world  </p> 
                <Link to={{pathname:"https://chiaka1996.github.io/weatherApp/"}} className='projectName' target='_blank' >
                <button>Live Link</button>
                </Link>
                </section>
            </div>

            <div className="projectGrid">
            <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838396/portfolio-images/project1_epox8c.jpg"
                 alt="corona virus statistics website" />
                 
                <section>
                <h5> Covid-19 Tracker</h5>
                <p className="statement">This is a covid-19 Tracker App, that gives daily update of corona virus cases aroud the world </p>
                <Link to={{pathname:"https://knowthestat.netlify.app"}} className='projectName' target='_blank' >
                    <button>Live Link</button>
                    </Link>    
                </section>
            </div>

            <div className="projectGrid">
            <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1599838440/portfolio-images/project3_jydc8o.jpg"
             alt="quiz app website" />
                <section>
                <h5> Quiz App</h5>
                <p className="statement">This is a Javascript Quiz app, that helps educate the player on various topics.</p>
                
                <Link to={{pathname:"https://chiaka1996.github.io/javascriptquiz/"}} className='projectName' target='_blank' >   
                <button>Live Link</button>
                </Link>
                </section>  
            </div>
            
        </div>
        
        <div className='see_more'>
        <Link to={{pathname:"https://github.com/chiaka1996"}}  target='_blank' >
            <button>see more</button>
            </Link>
            </div>
        
        </div>
    )
}

export default Projects;
