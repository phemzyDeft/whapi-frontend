import React from 'react';
import "./Feature.css";
import {TbFeatherOff} from 'react-icons/tb';
import {MdOutlineAcUnit} from 'react-icons/md';
import {GiSatelliteCommunication} from 'react-icons/gi';

function Featurearea(props) {
  return (
    <section class="feature-area section-gap-top">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center mt-5">
            <h2>Unique Features</h2>
          </div>
        </div>
      </div>
      <div class="row feature">
        <div class="feature-container col-lg-4 col-md-4 col-12 ">
          <div class="px-md-1 single-feature py-5 px-5 text-center rounded-3">
            <TbFeatherOff className='icon pb-3'/>
            <h4>Simple integration</h4>
            <p>
              Easily send WhatsApp messages without having to manage hosting, scaling or constant software updates.
            </p>
          </div>
        </div>
        <div class="feature-container col-lg-4 col-md-4 col-12">
          <div class="px-md-1 single-feature py-5 px-5 text-center rounded-3">
            <MdOutlineAcUnit className='icon pb-3'/>
            <h4>Simple integration</h4>
            <p>
              Easily send WhatsApp messages without having to manage hosting, scaling or constant software updates.
            </p>
          </div>
        </div>
        <div class="feature-container col-lg-4 col-md-4 col-12">
          <div class="px-md-1 single-feature py-5 px-5 text-center rounded-3">
            <GiSatelliteCommunication className='icon pb-3'/>
            <h4>Simple integration</h4>
            <p>
              Easily send WhatsApp messages without having to manage hosting, scaling or constant software updates.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}

export default Featurearea;