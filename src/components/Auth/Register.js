import axios from 'axios';
import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import './Auth.css';

function Register(props) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [navigate, setNavigate] = useState(false);


  const handleSubmit = async e =>{
    e.preventDefault();

    const baseURL = '';

    await axios.post(baseURL, {
      firstName, lastName, phoneNo, email, password, confirmPassword
    });
    
    setNavigate(true);
  }
  
  if(navigate){
    return <Navigate to="/login" />
  }

  return (
<div class="modal fade .show" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="border-bottom-0 modal-header">
        <i class="btn-close justify-content-end pointer" role='button' data-bs-dismiss="modal" aria-label="Close">
        </i>
      </div>
      <div class="modal-body px-3 px-lg-4 pt-0">
        <h3 class="text-center mb-3">SotaBot</h3>
        <form onSubmit={handleSubmit} action="#" class="signup-form" autoComplete='off' autoSave='on'>
          <div class="form-group row">
            <div className="col-12 col-md-6 col-lg-6">
              <label for="first_namer">First Name</label>
              <input type="text" id='first_namer' class="form-control" placeholder="enter first name" onChange={e =>setFirstName(e.target.value)}/>
            </div>
            <div className="last col-12 col-md-6 col-lg-6">
              <label for="last_name">Last Name</label>
              <input type="text" id='last_name' class="form-control" placeholder="enter last name" onChange={e =>setLastName(e.target.value)} />
            </div>
          </div>
          <div class="form-group row">
            <div className="col-12 col-md-6 col-lg-6">
              <label for="phone_number">Phone Number</label>
              <input type="tel" id='phone_number' class="form-control" placeholder="enter phone number" onChange={e =>setPhoneNo(e.target.value)} />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <label for="email">Email</label>
              <input type="email" id='email' class="form-control" placeholder="enter email" onChange={e =>setEmail(e.target.value)}/>
            </div>
          </div>
          <div class="form-group row">
            <div className="col-12 col-md-6 col-lg-6">
              <label for="password">Password</label>
              <input type="password" id='password' class="form-control" placeholder="enter password" onChange={e =>setPassowrd(e.target.value)} />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
              <label for="confirm_password">Confirm Password</label>
              <input type="password" id='confirm_password' class="form-control" placeholder="confirm password" onChange={e =>setconfirmPassword(e.target.value)} />
            </div>
          </div>
          <div class="form-group py-2">
            <button type="submit" class="form-control btn btn-primary" style={{fontSize: "14px", background: "var(--primary-color)", padding: ".6rem 1.5rem", textTransform: "uppercase"}}>SIGN UP</button>
          </div>
          <div class="form-group d-md-flex">
            <div class="text-center w-100 py-2">
              <small>already haave an account<Link to="/" class="text-primary" data-bs-toggle="modal" data-bs-target="#loginModal"> Sign in</Link></small>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}

export default Register;