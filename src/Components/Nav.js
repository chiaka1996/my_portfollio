import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = (props) => { 

    const [showNav, setShowNav] = useState(false);

    const changeNav = () => {
            setShowNav((prevState) => !prevState);
        }

        const replaceCertification = () => {
            window.location.replace('https://docs.google.com/presentation/d/17o7maq-rVbTai2CDVOBdctvz7znn3qxEdzoWk8jEmRc/edit?usp=sharing');
        }

    return (
        <nav>
            <div className="navigation">
            <div className='brandName'><span className='span1'>Chiaka</span> <span>Daniel</span></div>
            <ul>
                <li onClick={()=>props.scrollToRef(props.myRef)}> About </li>
                <li onClick={()=>props.scrollToRef(props.myProject)}>Projects</li>
                <li onClick={()=>  replaceCertification}>Certifications</li>
                <li onClick={()=>props.scrollToRef(props.myContact)}>Contact</li>
            </ul>
        <FontAwesomeIcon icon="bars" size="lg" className='barIcon' onClick={changeNav} /> 
        </div>
        { showNav  ? <div className = 'mobileNavlist'>
                <span onClick={()=>props.scrollToRef(props.myRef)}>About</span><br/>
                <span onClick={()=>props.scrollToRef(props.myProject)}>Projects</span><br/>
                <span onClick={()=>  replaceCertification}>Certifications</span><br/>
                <span onClick={()=>props.scrollToRef(props.myContact)}>Contact</span><br/>
             </div> :  null} 
        
        </nav>
    )
}

export default Navigation;