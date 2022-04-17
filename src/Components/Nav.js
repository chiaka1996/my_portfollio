import React, {useState} from 'react';
import SideBar from './Sidebar.js';
import '../App.css';
import '../Css/Nav.css';

const Navigation = (props) => { 

    const [showNav, setShowNav] = useState(false);
    const changeNav = () => {
            setShowNav((prevState) => !prevState);
        }
 
    return (
        <nav>
            <div className="navigation">
            <div className='brandName'>
            <span className='span1'>
            CHIAKA
            </span>
            </div>
            <div className='navFlex'></div>

            <div className={!showNav ? 'navBar' : 'navBar2'}>
            <div 
            className={!showNav ? 'navIcon' : 'iconCancel'}
            // className='navIcon'
            onClick={changeNav} 
            ></div>
            </div>
            </div>
            <SideBar 
            className="sidebar"
            changeNav = {changeNav}
            showNav = {showNav}
            />
        </nav>
    )
}

export default Navigation;