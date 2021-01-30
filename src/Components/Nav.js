import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import SideBar from './Sidebar.js';
import '../App.css';

const Navigation = (props) => { 

    const [showNav, setShowNav] = useState(false);


    const changeNav = () => {
            setShowNav((prevState) => !prevState);
        }
 
    return (
        <nav>
            <div className="navigation">
            <div className='brandName'><span className='span1'>Chiaka</span> <span>Daniel</span></div>
            <ul>
                <li onClick={()=>props.scrollToRef(props.myRef)}> About </li>
                <li onClick={()=>props.scrollToRef(props.myProject)}>Projects</li>
                <li><Link to={{pathname:"https://docs.google.com/presentation/d/17o7maq-rVbTai2CDVOBdctvz7znn3qxEdzoWk8jEmRc/edit?usp=sharing"}}  target='_blank' className="cert"> Certifications</Link></li>
                <li onClick={()=>props.scrollToRef(props.myContact)}>Contact</li>
                <li onClick={()=>props.scrollToRef(props.myTestimonial)} >Testimonials</li>  

            </ul>
        <FontAwesomeIcon icon="bars" size="lg" className='barIcon' onClick={changeNav} /> 
        </div>
           <SideBar 
            className="sidebar"
            changeNav = {changeNav}
            showNav = {showNav}
            scrollToRef = {props.scrollToRef} 
            myRef ={props.myRef}
            myContact = {props.myContact}
            myProject = {props.myProject} 
            myTestimonial = {props.myTestimonial} />  
        </nav>
    )
}

export default Navigation;