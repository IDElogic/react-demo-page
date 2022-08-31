import React from 'react';
import { DownloadButton } from '../../components';
import '../Footer/Footer.css';
import './Info.css';

const Info = () => (
  <div className='info' id='info'>
     <div className='glass-container'> 
          <div className='info-contact'>    
            <h2 className='info-h2'>Home Page Info</h2>         
          </div>   
      </div>
    <DownloadButton/>   
  </div>
);

export default Info;

