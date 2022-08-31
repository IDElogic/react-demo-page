import React from 'react';
import { InfoStrip } from '../../components';

import './MainInfo.css';

const MainInfo= () => {
return (  
  <>
  <header className='mainInfo' id="mainInfo">
      <div className='mainInfo-glass'>
        <h1 className='mainInfo-h1-glass'>Main</h1>
          <div className='mainInfo1-content'>
            <div></div>
          </div>
      </div>
    <h1 className='mainInfo-h1-regular'>Info</h1> 
  </header> 
  <InfoStrip/>
  </>
 ) 
};

export default MainInfo;
