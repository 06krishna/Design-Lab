import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'> 
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <h2>Info</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>For Corporates</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Terms Of Service</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>Unsubscribe</Link>
            <Link to='/'>Download App</Link>
            <Link to='/'>Partner With Us</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Cleaning Services</Link>
            <Link to='/'>Pest Control Services</Link>
            <Link to='/'>Courior Service</Link>
            <Link to='/'>Relocation</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Subscription</h2>
            <Link to='/'>Home Spa</Link>
            <Link to='/'>Home Guard</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Cities</h2>
            <Link to='/'>Banglore</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
