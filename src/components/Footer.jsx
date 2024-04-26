import React from 'react';

const Footer = () => (
  <footer className='footer'>
    <ul className='social-list flex-group'>
      <li className='social-item'>
        <a className='social-link' href=''>
          <i className='fa-brands fa-square-x-twitter'></i>
        </a>
      </li>
      <li className='social-item'>
        <a className='social-link' href=''>
          <i className='fa-brands fa-square-facebook'></i>
        </a>
      </li>
      <li className='social-item'>
        <a className='social-link' href=''>
          <i className='fa-brands fa-square-instagram'></i>
        </a>
      </li>
      <li className='social-item'>
        <a className='social-link' href=''>
          <i className='fa-brands fa-square-github'></i>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
