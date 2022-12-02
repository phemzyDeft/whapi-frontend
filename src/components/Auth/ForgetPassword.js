import React from 'react';
import {Link} from 'react-router-dom';
import './Auth.css';

function ForgetPassword(props) {
  return (  
<div class="modal fade .show" id="forgetPassword" tabindex="-1" role="dialog" aria-labelledby=".exampleModalCenterTitle" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="border-bottom-0 modal-header">
        <i class="btn-close justify-content-end pointer" role='button' data-bs-dismiss="modal" aria-label="Close">
        </i>
      </div>
      <div class="modal-body px-3 px-lg-4 pt-0">
        <h3 class="text-center mb-3">Whapi</h3>
        <form action="#" class="signup-form" autoComplete='off' autoSave='on'>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" class="form-control" placeholder="enter email to recover" />
          </div>
          <div class="form-group py-2">
            <button type="submit" class="form-control btn btn-primary" style={{fontSize: "14px", background: "var(--primary-color)", padding: ".6rem 1.5rem", textTransform: "uppercase"}}>PROCEED</button>
          </div>
          <div class="form-group d-md-flex">
            <div class="text-center w-100 py-2">
              <small data-bs-toggle="modal" data-bs-target="#loginModal" className='text-primary'><Link to="/" class="text-primary">back to login</Link></small> <br />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}

export default ForgetPassword;
