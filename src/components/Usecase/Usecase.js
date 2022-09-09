import React from 'react';
import {RiChatSmile2Line} from 'react-icons/ri';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {BsShieldLock} from 'react-icons/bs';
import '../Feature/Feature.css';

function Usecase(props) {
  return (
    <section class="feature-area section-gap-top">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
          <div class="section-title text-center">
            <h2>Usecase</h2>
            {/* <p>It's easier than you think</p> */}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="feature-container col-lg-4 col-md-4 col-12">
          <div class="px-md-1 single-feature py-5 px-5 text-center rounded-3">
            <RiChatSmile2Line className='icon pb-3'/>
            <h3>Chatbot</h3>
            <p>
              Reservation and reception, Check order information, Text recognition in images, Exchange / Return Request, Delivery Tracking, Other business automation
            </p>
          </div>
        </div>
        <div class="feature-container col-lg-4 col-md-4 col-12">
          <div class="px-md-1 single-feature py-5 px-5 text-center rounded-3">
            <AiOutlineUsergroupAdd className='icon pb-3'/>
            <h3>Chatbot</h3>
            <p>
              Reservation and reception, Check order information, Text recognition in images, Exchange / Return Request, Delivery Tracking, Other business automation
            </p>
          </div>
        </div>
        <div class="feature-container col-lg-4 col-md-4 col-12">
          <div class="px-md-1 single-feature py-5 px-5 text-center rounded-3">
            <BsShieldLock className='icon pb-3'/>
            <h3>Chatbot</h3>
            <p>
              Reservation and reception, Check order information, Text recognition in images, Exchange / Return Request, Delivery Tracking, Other business automation
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Usecase;