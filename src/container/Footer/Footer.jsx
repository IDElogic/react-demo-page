import React from 'react';
import { FiFacebook,FiTwitter, FiInstagram} from 'react-icons/fi';
import { images } from '../../constants';
import { DownloadButton } from '../../components';
import './Footer.css';

const Footer = () => (
<div className='footer' id='footer'>
   <DownloadButton/>
  <div className='footer-glass-container'>
  <div className='footer-links' >
      <div className='footer-links-contact'>
          <h1 className='footer-headtext'>Sections</h1>
          <a href="#"><p className='p'>Home</p></a>
          <a href="#cards"><p className='p'>Cards</p></a>
          <a href="#gallery"><p className='p'>Gallery</p></a>
      </div>
      <div className='footer-links-logo'>      
        <a href='/mainContainer'><p className='p'>Privacy Policy </p></a> 
        <a href='/termsandCondition'><p className='p'>Terms and Conditions</p></a> 
        <a href='/pageNotFound'><p className='p'>About Us </p></a> 
        <a href='/contact'><p className='p'>Contact </p></a> 
        <img src={images.sticky} alt="..." style={{ margin: '2rem  0'}} />
        <div className='footer-links-icons'>
        <a href="https://facebook.com"><FiFacebook /></a>
        <a href="https://twitter.com"><FiTwitter /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        </div>
      </div>
      <div className='footer-links-work'>
          <h1 className='footer-headtext'>Projects</h1>
          <a href="/weatherApp"><p className='p'>Weather Forecast</p></a> 
          <a href="/calculator"><p className='p'>Calculator</p></a>
          <a href="/"><p className='p'>Landing Page</p></a>
          
      </div>
    </div> 
  </div>
  <div className='footer-copyright'>
      <a href='http://blibb.net'><p className='p'>2022 by Me, All rights reserved</p></a>
  </div> 
  
</div>
);

export default Footer;



             
              
             