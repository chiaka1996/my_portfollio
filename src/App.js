import React from 'react';
import Nav from './Components/Nav';
// import Profile from './Components/Profile';
import Project from './Components/Projects';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import 'animate.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLink, faPlay, faBars, faSmileBeam, faAngleDown, faEnvelope, faPhone, faMapMarkerAlt, faEye} from '@fortawesome/free-solid-svg-icons';

library.add(faLink, faPlay, faEye, faBars, faSmileBeam, faTwitter, faGithub, faLinkedinIn, faFacebook, faAngleDown, faEnvelope, faPhone, faMapMarkerAlt );

function App() {
  return ( 
    <div className="App">
  <Router>
    <div className='Appnavigation'>
    <Nav />
    </div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project/>} />
      <Route path="/resume" element={<Resume />} />
      <Route path='/contact' element={<Contact />} />
    </Routes> 
  </Router>
    </div>
  );
}

export default App;
