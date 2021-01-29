import React, { useRef} from 'react';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import About from './Components/About';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import Testimonial from './Components/Testimonial';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faBars, faSmileBeam, faAngleDown, faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSmileBeam, faTwitter, faGithub, faLinkedinIn, faFacebook, faAngleDown, faEnvelope, faPhone, faMapMarkerAlt );


function App() {

     const myRef = useRef(null);

     const myContact = useRef(null);

     const myProject = useRef(null);

     const myTestimonial = useRef(null);

     const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    
    <div className="App">

    <Router>
      
    <Nav scrollToRef = {scrollToRef} 
    myRef ={myRef}
    myContact = {myContact}
    myProject = {myProject} 
    myTestimonial = {myTestimonial}
    /> 
    <Profile />

    <About refProp={myRef}/>
     <Project  refProp = {myProject} />
    <Testimonial refProp={myTestimonial} /> 
    <Contact refProp = {myContact} /> 
  </Router>
    </div>
  );
}

export default App;
