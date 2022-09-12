import React from 'react';
import {MdOutlineWhatshot} from 'react-icons/md'
import './Header.css';

function Header(props) {
  return (
  <nav class="navbar navbar-expand-lg fixed-top py-2" style={{background: "var(--primary-color)"}} id="home">
    <div class="container nav-section">
      <div className="logo col-lg-2">
        <MdOutlineWhatshot className='icon'/>
        <h2 className='pt-1'>Whapi</h2>
      </div>    
      <div className='offset-lg-7'></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse col-lg-4" id="navbarSupportedContent">
        <ul class="navbar-nav" style={{fontSize: ".8rem"}}>
          <li class="nav-item">
            <a class="nav-link active" href="#home" style={{color: "var(--text-color)"}} aria-current="page">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{color: "var(--text-color)"}} href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{color: "var(--text-color)"}} href="#home">Document</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" style={{color: "var(--text-color)"}} href="#usecases">Usecases</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  );
}

export default Header;