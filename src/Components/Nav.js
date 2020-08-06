import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
    const [showNav, setShowNav] = useState(false);

        const changeNav = () => {
            setShowNav((prevState) => !prevState);
        }

    return (
        <nav>
            <div className="navigation">
            <div className='brandName'><span className='span1'>Chiaka</span> <span>Daniel</span></div>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Certifications</li>
                <li>Contact</li>
            </ul>
        <FontAwesomeIcon icon="bars" size="lg" className='barIcon' onClick={changeNav} /> 
        </div>
        { showNav  ? <div className = 'mobileNavlist'>
                <span>About</span><br/>
                <span>Projects</span><br/>
                <span>Certifications</span><br/>
                <span>Contact</span><br/>
             </div> :  null} 
        
        </nav>
    )
}

export default Navigation;