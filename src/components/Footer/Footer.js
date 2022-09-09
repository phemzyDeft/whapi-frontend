import React from 'react';

function Footer(props) {
  return (
    <footer class="footer-area section-gap">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 single-footer-widget">
          <span><a href="index.html">Whapi.io</a> is in no way affiliated with, authorized, maintained, sponsored or endorsed by WhatsApp or any of its affiliates or subsidiaries. This is an independent and unofficial software. Do not use this service to send spam or bulk messages. Use at your own risk.</span>
        </div>
        <div class="col-lg-2 col-md-6 single-footer-widget ml-auto">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="login.html">Sign Up</a></li>
            <li><a href="docs.html">Documentation</a></li>
            <li><a href="terms.html">Terms</a></li>
            <li><a href="privacy.html">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;