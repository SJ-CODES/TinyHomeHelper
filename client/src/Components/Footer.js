import React from 'react'
import GitHubIcon  from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "./CSS/Footer.css";


function Footer() {
    return (
        <div className="footer">
            <h3>Meet The Developers: </h3>
            <div className="meetDevs"> 
                Summer Johnson 
                    <div>&nbsp;&nbsp;&nbsp;
                        <a><GitHubIcon href="https://github.com/SJ-CODES"  /></a>
                        <a><LinkedInIcon href="https://www.linkedin.com/in/summer-johnson-057910111/"  /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                Layton Avery 
                    <div>&nbsp;&nbsp;&nbsp;
                        <a><GitHubIcon href="https://github.com/LaytonAvery"  /></a>
                        <a><LinkedInIcon href="https://www.linkedin.com/in/laytonavery/"  /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                Andres Corredor 
                    <div>&nbsp;&nbsp;&nbsp;
                        <a><GitHubIcon href="https://github.com/Andres-Andretti"  /></a>
                        <a><LinkedInIcon href="https://www.linkedin.com/in/andres-corredor-b30463b1/"  /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                Megan Mason  
                    <div>&nbsp;&nbsp;&nbsp;
                    <a><GitHubIcon path="https://github.com/mmason27"  /></a>
                    < a><LinkedInIcon href="https://www.linkedin.com/in/megan-m-mason/"  /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
            </div>
        </div>
    )
}

export default Footer
