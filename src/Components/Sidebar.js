/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/SideBar.css';

const SideBar = (props) => {
    return(
        <div 
        className={props.showNav ? "sideBarContainer" : "sideBarContainerShow"}
        >
            <ul>
            <li>
            <Link 
            to='/'
            style={{
                color: 'white'
            }}
            >
            <span onClick={()=>props.changeNav()}>
            Home
            </span>
            </Link>
            </li>
            <li>
            <Link 
            to='/project'
            style={{
                color: 'white'
            }}
            >
            <span onClick={()=>props.changeNav()}>
            Projects
            </span>
            </Link>
            </li>
            <li>
            <Link 
            to='/resume'
            style={{
                color: 'white'
            }}
            >
            <span  onClick={()=>props.changeNav()}>
             Resume
             </span>
             </Link>
             </li>
            <li>
            <Link 
            to='/contact'
            style={{
                color: 'white'
            }}
            >
            < span onClick={() => props.changeNav()}>
            Contact
            </span>
            </Link>
            </li>
            <a
            className="certificates"
            href="https://docs.google.com/presentation/d/17o7maq-rVbTai2CDVOBdctvz7znn3qxEdzoWk8jEmRc/edit?usp=sharing"
            target='_blank'
            >
            <li> 
            <span onClick={() => props.changeNav()}>
            Certifications
            </span>
            </li>
            </a>
             </ul>
        </div>
    )
}

export default SideBar;