import React from 'react';
import './Banner.css'
import hero from '../../assets/undraw_connection_re_lcud.svg';

function Banner(props) {
  return (
    <section name='top' class="home-banner-area mt-5 pt-5" id="home">
    <div class="container">
      <div class="row fullscreen d-flex align-items-center justify-content-between">
        <div className="col-12 col-md-6 col-lg-6">
          <div class="home-banner-content px-5">
            <h1>
              Free Unofficial<br />Whatsapp API
            </h1>
            <p>Use our API to connect a bot, or team up with a trusted partner to develop the solution that suits you.</p>
            <div class="download-button">
              <button data-bs-toggle="modal" data-bs-target="#registerModal" type="button" class="btn text-white signup-btn" style={{background: "var(--primary-color)", padding: ".6rem 1.5rem", textTransform: "uppercase"}}>Sign Up</button>
            </div>
          </div>            
        </div>
          
        <div className="col-12 col-md-6 col-lg-6">
          <div className="container-img py-5">
            <img src={hero} alt="" className='img-fluid'/>
          </div>            
        </div>

      </div>
    </div>
  </section>
  );
}

export default Banner;