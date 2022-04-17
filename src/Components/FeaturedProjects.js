import React from 'react';
import '../Css/FeaturedProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const Features = ({header,stacks,description,liveLink,codeLink,type}) => {
    // const myStacks = stacks.split(',');
    
    return (
        <div className='featureContainer'> 
        <div className='heading'>
        {header}
        </div>
        <div className='stacks'>
        {stacks.split(',').join(' - ')}
        </div>
        <div className="featureDescription">
        {description}
        </div>

        <div className='flexLink'>
        <div className={type === 'featured'?'liveLink':'othersLiveLink'}>
        <Link
        to={{pathname:liveLink}}  
        target='_blank'
        style={{
            color: "rgb(103, 202, 11)",
        }}
        >
        <FontAwesomeIcon
         icon='eye'
         size="sm"
         color="rgb(103, 202, 11)"
         />
         <span>Live</span>
         </Link>
        </div>

        {codeLink.length > 1 ? 
        <div  className={type === 'featured'?'codeLink':'othersCodeLink'}>
        <Link
         to={{pathname:codeLink}}  
         target='_blank'
         style={{
             color: "rgb(103, 202, 11)",
         }}
         >
         <FontAwesomeIcon
         icon='link'
         size="sm"
         color="rgb(103, 202, 11)"
         />
         <span>code</span> 
         </Link>
        </div> : ''
        }
        </div>
        </div>
    )

    }

export default Features;
