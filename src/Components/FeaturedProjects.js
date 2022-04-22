/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../Css/FeaturedProject.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <a
        href={liveLink} 
        target='_blank'
        style={{
            color: "rgb(103, 202, 11)",
            textDecoration: 'none'
        }}
        >
        <FontAwesomeIcon
         icon='eye'
         size="sm"
         color="rgb(103, 202, 11)"
         />
         <span>Live</span>
         </a>
        </div>

        {codeLink.length > 1 ? 
        <div  className={type === 'featured'?'codeLink':'othersCodeLink'}>
        <a
         href={codeLink}  
         target='_blank'
         style={{
             color: "rgb(103, 202, 11)",
             textDecoration: 'none'
         }}
         >
         <FontAwesomeIcon
         icon='link'
         size="sm"
         color="rgb(103, 202, 11)"
         />
         <span>code</span> 
         </a>
        </div> : ''
        }
        </div>
        </div>
    )

    }

export default Features;
