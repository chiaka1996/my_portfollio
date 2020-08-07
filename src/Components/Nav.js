import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

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
                <li><Link target="_blank" to="/certification" className='link' >Certifications</Link> </li>
                <li onClick={()=>props.scrollToRef(props.myContact)}>Contact</li>
            </ul>
        <FontAwesomeIcon icon="bars" size="lg" className='barIcon' onClick={changeNav} /> 
        </div>
        { showNav  ? <div className = 'mobileNavlist'>
                <span onClick={()=>props.scrollToRef(props.myRef)}>About</span><br/>
                <span onClick={()=>props.scrollToRef(props.myProject)}>Projects</span><br/>
                <span>Certifications</span><br/>
                <span onClick={()=>props.scrollToRef(props.myContact)}>Contact</span><br/>
             </div> :  null} 
        
        </nav>
    )
}

export default Navigation;