import React from 'react';
import {MdOutlineWhatshot} from 'react-icons/md'
import './Header.css';

function Header(props) {
  return (
  <nav class="navbar navbar-expand-lg fixed-top py-3" style={{background: "var(--primary-color)"}}>
    <div class="container">
      <div className="logo-navbar">
        <MdOutlineWhatshot  className='icon'/>
        <h2>Whapi</h2>
      </div>    
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
        <ul class="navbar-nav" style={{fontSize: ".8rem"}}>
          <li class="nav-item">
            <a class="nav-link active" style={{color: "var(--text-color)"}} aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{color: "var(--text-color)"}} href="#">Document</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{color: "var(--text-color)"}} href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{color: "var(--text-color)"}} href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{color: "var(--text-color)"}} href="#">Pricing</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default Header;