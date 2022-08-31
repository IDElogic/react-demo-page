import React,{ useState, useEffect }  from 'react';
import "./PageNotFound.css";

const PageNotFound = () => {
  const theTime =10;
    const [second, setSecond] = useState(theTime);
    
    useEffect(() => {
        const timer =setTimeout(() => {
            if(second >= 1) {
            setSecond(second-1);
            }
            }, 1000);
            return () => {
                clearInterval(timer);
            }
        });
  return (
    <div className='container' id='pageNotFound'>
      <div className='button-container'>
          <div className="loading-button">
            <div className="loading-bar" 
              style={{width: `${(second *100) / theTime}%` }}/>
              {second !==0 ? `Motivational Quote for the day in ${second} s` : `Ooops, something went wrong`}
          </div>
          <div className="loading-button2">
            <div className="loading-bar2" 
              style={{width: `${(second *100) / theTime}%` }}/>
              {second !==0 ? `404` : `Today we don't have any motivational quotes, if you want to give up, give up...`}
              
          </div>
          </div>
                  
    </div>
  )
}

export default PageNotFound
