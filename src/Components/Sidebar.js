import React from 'react';
import {Link} from 'react-router-dom';
import '../Css/SideBar.css';

const SideBar = (props) => {
    return(
        <div className={props.showNav ? "sideBarContainer" : "sideBarContainerShow"}>
            <ul>

            <li><span
             onClick={()=>{
                 props.scrollToRef(props.myRef)
                 props.changeNav()
                 }}>About</span></li>
            <li><span onClick={()=> {
                props.scrollToRef(props.myProject)
                props.changeNav()
                }}>Projects</span></li>
            <li> 
                <Link 
                className="certificates"
                to={{pathname:"https://docs.google.com/presentation/d/17o7maq-rVbTai2CDVOBdctvz7znn3qxEdzoWk8jEmRc/edit?usp=sharing"}}  
                target='_blank'><span onClick={()=> props.changeNav()} >Certifications</span>
                </Link>
                </li>
            <li>
            <span onClick={()=>{
                props.scrollToRef(props.myContact)
                props.changeNav()
                }}>Contact</span><br/>
            </li>

            <li>
            <span onClick={()=>{
                props.scrollToRef(props.myTestimonial)
                props.changeNav()
                }} >Testimonials</span><br/>
            </li>

             </ul>
        </div>
    )
}

export default SideBar;