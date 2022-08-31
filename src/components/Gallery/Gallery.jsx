import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery flex__center" id='gallery'>
      <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {[ 
            images.bg,
            images.bg,
            images.bg,
            images.bg,
            ,].map((image, index) => (
            <div className="gallery-images-card flex__center" key={`gallery-image-${index + 1}`}>     
              <img src={image} alt="gallery-image" />
            </div> 
          ))}  
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort className="gallery-arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery-arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;