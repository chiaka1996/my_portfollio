import React from 'react';
import '../Css/About.css';
const About = () => {
    return (
        <div className="aboutBody">
            <div ><span className="about_me">About Me & What I do</span></div>
            <div>
            <p>I'm a motivated full stack Developer with great passion for building 
            excellent softwares. I build fun stuffs using mostly php, JavaScript and React. I offer 2 years of development experience,
            a strong aptitude for learning new technologies,
          and a proven track record of meeting aggressive goals. My most notable skills include: </p>
          <section className="buttonDiv">
              <button>#HTML</button> <button>#CSS</button> <button>#BOOTSTRAP</button> <button>#SASS</button> <button>#MATERIAL UI</button> <button>#PHP</button>
          <button>#MYSQL</button> <button>#JAVASCRIPT</button> 
          </section>

          <section className="buttonDiv2">
              <button>#REACTJS</button> <button>#MONGODB</button>
          <button>#EXPRESS</button> <button>#NODE</button> <button>#Redux</button>
          </section>
   
            </div>
        </div>
    )
}

export default About;