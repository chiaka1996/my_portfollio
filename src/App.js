import React from 'react';
import Nav from './Components/Nav';
import Profile from './Components/Profile';
import About from './Components/About';
import Project from './Components/Projects';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faBars, faSmileBeam, faAngleDown} from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSmileBeam, faTwitter, faGithub, faLinkedinIn, faFacebook, faAngleDown );

function App() {
  return (
    <div className="App">
  <Nav />
  <Profile />
  <About />
  <Project />
    </div>
  );
}

export default App;
