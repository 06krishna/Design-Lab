import React from 'react';
import './Cards.css';

import CardItem from './CardItem';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Cards() {

  return (
    <>
        <nav class="Navbar">
          <div class="cards_container">
          <h2><b>Our Services</b></h2>
          <h5>Choose from our wide range of household services</h5>
          <h1></h1>
          <body>
            <Link to='/'>
          <button class="tablink" id="defaultOpen"><b>All</b><br/><h6>Services</h6></button> 
          </Link>
          <Link to='/clean'>
          <button class="tablink" href="clean" ><b>Clean</b><br/><h6>My Home</h6></button>
          </Link>
          <button class="tablink"><b>Guard</b><br/><h6>My Home</h6></button>

          <div id="All" class="tabcontent">
           
          <button class="hello"><input type="image" src="https://www.helpr.in/images/category/cleaning.png" width="110" height="80" alt="Home"/>
          <br/><b>Cleaning</b><br/><h6>Services</h6>
          </button>
          <button class="hello"><input type="image" src="https://www.helpr.in/images/category/pest.png" width="110" height="80" alt="Home"/>
          <br/><b>Pest Control</b><br/><h6>Services</h6>
          </button>
          <button class="hello"><input type="image" src="https://www.helpr.in/images/category/courier.png" width="110" height="80" alt="Home"/>
          <br/><b>Courior</b><br/><h6>Services</h6>
          </button>
          <button class="hello"><input type="image" src="https://www.helpr.in/images/category/relocation.png" width="110" height="80" alt="Home"/>
          <br/><b>Relocation</b><br/><h6>Services</h6>
          </button>
          </div>
          <h1>

          </h1>
          <hr></hr>
          <h2><b>Annual Maintanence</b></h2>

          <button class="hello"><input type="image" src="https://www.helpr.in/images/subscription/home-spa.png" width="110" height="80" alt="Home"/>
          <br/><b>Relocation</b><br/><h6>Services</h6>
          </button>
          <button class="hello"><input type="image" src="https://www.helpr.in/images/subscription/home-guard.png" width="110" height="80" alt="Home"/>
          <br/><b>Relocation</b><br/><h6>Services</h6>
          </button>

          <div id="Clean" class="tabcontent">
            {/* <a href='/'></a> */}
            </div>
          </body>
          </div>
        </nav>
  
    </>
  );
}

export default Cards;
