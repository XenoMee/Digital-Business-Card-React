import React from 'react';
import profilePicture from './images/profile-picture.png';

import Info from './components/Info.jsx';
import About from './components/About.jsx';
import Interests from './components/Interests.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const App = () => (
  <div className='card'>
    <img
      className='user-profile-picture'
      src={profilePicture}
      alt='User profile picture'
    />
    {/* <div className='main-content grid-flow' data-spacing='large'>
      <Info />
      <About />
      <Interests />
    </div>
    <Footer /> */}
  </div>
);

export default App;
