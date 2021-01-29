import React from 'react';
import '../Css/About.css';

const About = (props) => {

    return (
        <div ref={props.refProp}  className= "aboutBody">
             
             <div className="skills_tools_div">
            <div className="about_div">
                <span className="about_me"> SKILLS & TOOLS</span>
                </div>
            <div className="skill_grid">
                <div className="skill_item">
                <div className="image_box">
                    <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636843/logos/vue_logo_eyugeq.png" alt="logo"/>
                    <p>VUE JS</p>
                    </div>
                    </div>

                <div className="skill_item">
                    <div className="image_box">
                   <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636216/logos/react_logo_n3yizq.png" alt="logo" />
                   <p>REACT JS</p>
                   </div>
                </div>
                <div className="skill_item">
                <div className="image_box">
                    <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636235/logos/css3_vtovnw.png" alt="logo" />
                    <p>CSS3</p>
                    </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636188/logos/redux_logo_r4yf6o.png" alt="logo" />
                <p>REDUX</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636170/logos/html5_logo_qpwfkw.png" alt="logo" />
                <p>HTML5</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636141/logos/mysql_logo_yobpse.png" alt="logo" />
                <p>MYSQL</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609643489/logos/php_logo_gyv0mk.jpg" alt="logo" />
                <p>PHP</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609643519/logos/node_logo_qn8uky.jpg" alt="logo" />
                <p>NODE JS</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636120/logos/mongodb_logo_obtxrm.png" alt="logo" />
                <p>mongoDB</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636103/logos/bootstrap_logo_ujc4tk.png" alt="logo" />
                <p>BOOTSTRAP</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636085/logos/materialui_logo_vsqtzf.png" alt="logo" />
                <p>MATERIAL UI</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636056/logos/sass_logo_yyoqtg.png" alt="logo" />
                <p>SASS</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636034/logos/heroku_logo_xsyvku.jpg" alt="logo" />
                <p>HEROKU</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636017/logos/github_logo_nu3ddx.png" alt="logo" />
                <p>GITHUB</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                    <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609636001/logos/netlify_logo_ze4arb.jpg" alt="logo" />
                    <p>NETLIFY</p>
                </div>
                </div>

                <div className="skill_item">
                <div className="image_box">
                <img src="https://res.cloudinary.com/chiaka1996/image/upload/v1609635983/logos/javascript_logo_qxxbll.png" alt="logo" />
                <p>JAVASCRIPT</p>
                </div>
                </div>
            </div>
            </div>

                <div className="experience_div">
            <div className="work_div" >
                <span className="work_experience"> WORK EXPERIENCE</span>
                </div>

                <div className="experience_note">
                    <div className="experience_grid_item"> 
                        <p>04.2020 - 05.2020</p>
                       <p><span className="company_experience">HNG i7 INTERNSHIP</span></p> 
                       <div className="experience_list">
                           <ul>
                               <li>Led a team of frontend developers to build a hotel website template</li>
                               <li>Assisted the backend team to build a Login/Signup authentication Api </li>
                               <li>Merging of team members pull requests</li>
                               <li>Refactored codes of team members</li>
                               <li>Assisted Team members(beginners) through tasks</li>
                           </ul>
                       </div>

                    </div>

                    <div className="experience_grid_item" >
                    <p>08.2020 - 11.2020</p>
                    <p><span className="company_experience">ANDELA BUILD FOR SDG</span></p> 
                    <div className="experience_list">
                           <ul>
                               <li>i was the deputy team lead of my group</li>
                               <li>led the backend team in building Apis</li>
                               <li>Merging of team members pull requests</li>
                               <li>Refactored codes of team members</li>
                               <li>Assisted the frontend team in consuming backend Apis</li>
                           </ul>
                       </div>   
                          
                   </div>
                </div>
            </div>
           
        </div>
    )
}

export default About;