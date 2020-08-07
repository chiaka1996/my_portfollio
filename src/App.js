import React, { useRef} from 'react';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import About from './Components/About';
import Project from './Components/Projects';
import Contact from './Components/Contact';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faBars, faSmileBeam, faAngleDown, faEnvelope, faPhone, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSmileBeam, faTwitter, faGithub, faLinkedinIn, faFacebook, faAngleDown, faEnvelope, faPhone, faMapMarkerAlt );


function App() {

     const myRef = useRef(null);

     const myContact = useRef(null);

     const myProject = useRef(null);

     const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    
    <div className="App">

    <Router>
    <Nav scrollToRef = {scrollToRef} 
    myRef ={myRef}
    myContact = {myContact}
    myProject = {myProject} 
    /> 
    <Profile
    scrollToRef = {scrollToRef}
     myContact = {myContact}  />
    <About refProp={myRef}/>
    <Project  refProp = {myProject} />
    <Contact refProp = {myContact} />

    <Route path='/github' component={() => { 
     window.location.href = 'https://github.com/chiaka1996'; 
     return null;
}}/>

<Route path='/twitter' component={() => { 
     window.location.href = 'https://twitter.com/NewtonChiaka'; 
     return null;
}}/>

<Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/osuji-chiaka-10b31a196/'; 
     return null;
}}/>

<Route path='/facebook' component={() => { 
     window.location.href = 'https://www.facebook.com/profile.php?id=100009145788898'; 
     return null;
}}/>

<Route path='/resume' component={() => { 
     window.location.href = 'https://chiaka1996.github.io/my-resume/'; 
     return null;
}}/>

<Route path='/covid' component={() => { 
     window.location.href = 'https://knowthestat.netlify.app'; 
     return null;
}}/>

<Route path='/zzarweb' component={() => { 
     window.location.href = 'https://chiaka1996.github.io/zzarweb/'; 
     return null;
}}/>

<Route path='/flux' component={() => { 
     window.location.href = 'https://chiaka1996.github.io/fluxhotel/'; 
     return null;
}}/>

<Route path='/weather' component={() => { 
     window.location.href = 'https://chiaka1996.github.io/weatherApp/'; 
     return null;
}}/>

<Route path='/Quiz' component={() => { 
     window.location.href = 'https://chiaka1996.github.io/javascriptquiz/'; 
     return null;
}}/>

<Route path='/auth' component={() => { 
     window.location.href = 'https://facebook-google-signup.netlify.app/'; 
     return null;
}}/>

<Route path='/certification' component={() => { 
     window.location.href = 'https://docs.google.com/presentation/d/17o7maq-rVbTai2CDVOBdctvz7znn3qxEdzoWk8jEmRc/edit?usp=sharing'; 
     return null;
}}/>


  </Router>
    </div>
  );
}

export default App;
