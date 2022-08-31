import React from 'react'
import { images } from '../../constants';
import './Cards.css';
import VanillaTilt from 'vanilla-tilt';

const Cards = () => {
    VanillaTilt.init(
        document.querySelectorAll(".js-tilt"),{
            max:25,
            speed:150,
        });

        const sizes = document.querySelectorAll(".size");
        for(let i= 0; i< sizes.length; i++) {
            sizes[i].addEventListener("click", () => {
                for(let i=0; i < sizes.length; i++) {
                    sizes[i].classList.remove("active");
                } sizes[i].classList.remove("active"); 
            })
        }
        
  return (
    <div className='cards-container' id='cards'>
    <section className='cards'>
         
        <div className='card2 js-tilt' data-tilt>
            <div className='banner'>
            <h2>
            Card2
            </h2>
            </div>
            <div className='content'>
            <img src={images.sticky} alt="" className='pop' />
                <button className='cart pop'>
                    <span></span>
                    <span>Card2</span>
                </button>    
            </div>
        </div>
        <div className='card3 js-tilt' data-tilt>
            <div className='banner'>
            <h2>
            Card3
            </h2>
            </div>
            <img src={images.sticky} alt="" className='pop' />
            <div className='content'>
                <button className='cart pop'>
                    <span></span>
                    <span>Card3</span>
                </button>
            </div>
        </div>
        <div className='card2 js-tilt' data-tilt>
            <div className='banner'>
            <h2>
            Card2
            </h2>
            </div>
            <div className='content'>
            <img src={images.sticky} alt="" className='pop' />
                <button className='cart pop'>
                    <span></span>
                    <span>Card2</span>
                </button>    
            </div>
        </div>
        <div className='card3 js-tilt' data-tilt>
            <div className='banner'>
            <h2>
            Card3
            </h2>
            </div>
            <img src={images.sticky} alt="" className='pop' />
            <div className='content'>
                <button className='cart pop'>
                    <span></span>
                    <span>Card3</span>
                </button>
            </div>
        </div>
    </section>
    </div>
)
}

export default Cards
