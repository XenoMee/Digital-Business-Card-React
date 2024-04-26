import React from 'react';

const Info = () => (
  <div className='card-info grid-flow' data-spacing='medium'>
    <div className='user-info'>
      <h1 className='user-name'>Adrian Trandafir</h1>
      <span className='user-job'>Web Developer</span>
      <a
        className='user-website'
        href='https://xenomee.github.io/adriantrandafir/'
      >
        <p>Personal Website</p>
      </a>
    </div>
    <div className='contact-info flex-group'>
      <a
        className='btn email-btn flex-group'
        href='adrian-stefan.trandafir@outlook.com'
      >
        <i className='icon fa-solid fa-envelope'></i>
        Email
      </a>
      <a
        className='btn linkedin-btn flex-group'
        href='https://www.linkedin.com/in/adriantrandafir09/'
      >
        <i className='icon fa-brands fa-linkedin'></i>
        LinkedIn
      </a>
    </div>
  </div>
);

export default Info;
