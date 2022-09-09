import React from 'react';
import reach from '../../assets/undraw_mobile_marketing_re_p77p.svg';
import increase from '../../assets/undraw_chatting_re_j55r.svg';
import './Aboutarea.css';

function Aboutarea(props) {
  return (
    <section class="about-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 col-12 col-md-6 home-about-left">
          <img class="img-fluid" src={reach} alt=""/>
        </div>
        <div class=".offset-lg-1 col-lg-7 col-md-6 col-12 home-about-right">
          <h1>Reach Further</h1>
          <p>By creating a presence on WhatsApp, you can connect and build personal relationships with your customers. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, deleniti dicta!</p>
        </div>
        <div class="col-lg-7 col-12 col-md-6 home-about-right home-about-right2">
          <h1>Increase loyalty</h1>
          <p>Drive better, more personalized experiences that delight customers. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio accusantium, ab voluptates voluptas aperiam unde cupiditate nesciunt dolores harum excepturi.</p>
        </div>
        <div class="col-lg-5 col-12 col-md-6 home-about-left">
          <img class="img-fluid" src={increase} alt="" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Aboutarea;