import React from 'react';
import CountUp from 'react-countup';
import "./Factarea.css"

function Factarea(props) {
  return (
    <section class="fact-area mx-0 mx-md-5">
    <div class="container-fluid">
      <div class="fact-box">
        <div class="row align-items-center bg-light py-3">
          <div class="py-4 col-6 col-md-4 col-lg-3 single-fact text-center">
            <h2><CountUp start={10} end={150} duration={5} /></h2>
            <p>Users</p>
          </div>
          <div class="py-4 col-6 col-md-4 col-lg-3 single-fact text-center">
            <h2><CountUp start={2} end={50} duration={4} /></h2>
            <p>Users</p>
          </div>
          <div class="py-4 col-6 col-md-4 col-lg-3 single-fact text-center">
            <h2><CountUp start={10} end={70} duration={3} /></h2>
            <p>Users</p>
          </div>
          <div class="py-4 col-6 col-md-4 col-lg-3 single-fact text-center">
            <h2><CountUp start={10} end={110} duration={6} /></h2>
            <p>Users</p>
          </div> 
        </div>
      </div>
    </div>
  </section>
  );
}

export default Factarea;