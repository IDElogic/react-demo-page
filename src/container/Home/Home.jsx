import React from 'react';
import { Navbar } from '../../components';
import Cards from '../Cards/Cards';
import MainInfo from '../MainInfo/MainInfo';
import Footer from '../Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Gallery2 from '../../components/Gallery/Gallery2';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Info from '../Info/Info';
import './Home.css';

const Home = () => {
return (
<div>
<Navbar/>
  <header className='home' id='home'>
    <div className='glass'>
      <h1 className='h-glass'>Home</h1>
      <div></div>
    </div>
    <h1 className='h-regular'>Page</h1>
  </header>
<Info/>
<Cards/>
<Gallery/>
<MainInfo/>
<Gallery2/>
<Cards />
<Footer/>
<ScrollToTop/>
</div>
 ) 
};

export default Home;