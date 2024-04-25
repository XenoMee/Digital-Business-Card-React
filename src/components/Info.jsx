import React from 'react';
import profilePicture from '../images/profile-picture.png';

const Info = () => (
  <div className='card-info'>
    <img
      className='user-profile-picture'
      src={profilePicture}
      alt='User profile picture'
    />
    <div className='user-info'>
      <h1 className='user-name'>Adrian Trandafir</h1>
      <span className='user-job'>Web Developer</span>
      <a href='https://xenomee.github.io/adriantrandafir/'>
        <p>Personal Website</p>
      </a>
    </div>
    <div className='contact-info'>
      <a
        className='btn email-btn flex-group'
        href='adrian-stefan.trandafir@outlook.com'
      >
        <i className='fa-solid fa-envelope'></i>
        Email
      </a>
      <a
        className='btn linkedin-btn flex-group'
        href='https://www.linkedin.com/in/adriantrandafir09/'
      >
        <i className='fa-brands fa-linkedin'></i>
        LinkedIn
      </a>
    </div>
  </div>
);

export default Info;
