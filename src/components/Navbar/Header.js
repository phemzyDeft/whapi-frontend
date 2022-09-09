import React from 'react';

function Header(props) {
  return (
  <nav class="navbar navbar-expand-lg .bg-success fixed-top py-3" style={{background: "var(--primary-color)"}}>
    <div class="container">
      <a class="navbar-brand .text-white" href="#" style={{color: "var(--text-color)"}}>LOGO</a>
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