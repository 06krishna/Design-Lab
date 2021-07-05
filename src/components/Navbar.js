import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Dropdown } from 'bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Container, Image, NavbarBrand } from 'react-bootstrap';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            helpr
            <i class='fab fa-typo3' />
    </Link>
        
    <Link class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
        Services
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="/">Cleaning</a></li>
        <li><a class="dropdown-item" href="/">Pest Control</a></li>
        <li><a class="dropdown-item" href="/">Courior Service</a></li>
        <li><a class="dropdown-item" href="/">Relocation</a></li>
      </ul>
    </Link>

    <Link class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Subscription
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="/">Home Spa</a></li>
        <li><a class="dropdown-item" href="/">Home Guard</a></li>
      </ul>
    </Link>

    <Link class="nav-item">
          <a class="nav-link" href="/">About</a>
    </Link>

    <Link class="nav-item">
          <a class="nav-link" href="/">Contact</a>
    </Link>

    

    </div>
    <button href="/" type="button" class="btn btn--outline btn-lg">Get the App</button>
  </div>
</nav>

    </>
  );
}

export default Navbar;
