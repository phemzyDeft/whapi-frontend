import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div class="card-section row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 justify-content-center">
      <div class="card-area col d-flex align-items-center justify-content-between">
        <div className='card-desc'>
          <p>Budget</p>
          <h4 class="fw-bold mb-0">$750.90</h4>
          <p>Since last month</p>
        </div>
        <div className="card-icon">
          <i class="fa-solid fa-bell"></i>
        </div>
      </div>
      <div class="card-area col d-flex align-items-center justify-content-between">
        <div className='card-desc'>
          <p>Budget</p>
          <h4 class="fw-bold mb-0">$750.90</h4>
          <p>Since last month</p>
        </div>
        <div className="card-icon">
          <i class="fa-solid fa-bell"></i>
        </div>
      </div>
      <div class="card-area col d-flex align-items-center justify-content-between">
        <div className='card-desc'>
          <p>Budget</p>
          <h4 class="fw-bold mb-0">$750.90</h4>
          <p>Since last month</p>
        </div>
        <div className="card-icon"> 
          <i class="fa-solid fa-bell"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;