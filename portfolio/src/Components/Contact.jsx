import React from 'react'
import CallIcon from '@material-ui/icons/Call';
import Icon from '@material-ui/core/Icon';

import { SocialIcon } from 'react-social-icons'



export default function Contact(){
    return(
        < div >
        <h2>You can contact me at</h2>

        <ul  style={{listStyleType:"none",}}>
        <li > <Icon><CallIcon/></Icon>  +91 8296470684</li><br/>
        <li><SocialIcon url="https://email.com/jaketrent" /> sahananithyundil@gmail.com</li><br/>
        
        <li><SocialIcon url="https://linkedin.com/jaketrent" /> <a href="https://www.linkedin.com/in/sahana-nithyundil-098b2a215/">Linkedin</a></li><br/>
        <li><SocialIcon url="https://github.com/jaketrent" /> <a href="https://github.com/SahanaNithyundil">Github</a></li>
        
        </ul>
        

        
        </div>
    )
}