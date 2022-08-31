import React from 'react';
import './DownloadButton.css';

const DownloadButton = () => (
    <div className='dowloadButton' id='dowloadButton'>
     <div className='change-btn'>
      <input type="checkbox"/>
				<button>
          <span>Click here</span>
        </button> 
     </div>   
   </div> 
);

export default DownloadButton;
