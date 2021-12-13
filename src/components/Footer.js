import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <TwitterIcon/>
                <InstagramIcon/>
                <FacebookIcon />
                <GoogleIcon />
                <LinkedInIcon/>
                

            </div>
            <p>&copy;2021 IndianFood.com</p>
            
        </div>
    )
}

export default Footer
