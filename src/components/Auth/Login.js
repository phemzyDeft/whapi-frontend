import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';
import './Auth.css';
import axios from 'axios';

function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const [navigate, setNavigate] = useState(false);


  const handleSubmit = async e =>{
    e.preventDefault();

    const baseURL = '';

    const response = await axios.post(baseURL, {
      email, password
    }, {withCredentials: true});

    console.log(response.data)
    
    setNavigate(true);
  }
  
  if(navigate){
    return <Navigate to="/" />
  }

  return (
<div onSubmit={handleSubmit} class="modal fade .show" id="loginModal" tabindex="-1" role="dialog" aria-labelledby=".exampleModalCenterTitle" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="border-bottom-0 modal-header">
        <i class="btn-close justify-content-end pointer" role='button' data-bs-dismiss="modal" aria-label="Close">
        </i>
      </div>
      <div class="modal-body px-3 px-lg-4 pt-0">
        <h3 class="text-center mb-3">SotaBot</h3>
        <form action="#" class="signup-form" autoComplete='off' autoSave='on'>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" class="form-control" placeholder="enter email here" onChange={e =>setEmail(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="enter password here" onChange={e =>setPassowrd(e.target.value)} />
          </div>
          <div class="form-group py-2">
            <button type="submit" class="form-control btn btn-primary" style={{fontSize: "14px", background: "var(--primary-color)", padding: ".6rem 1.5rem", textTransform: "uppercase"}}>SIGN IN</button>
          </div>
          <div class="form-group d-md-flex">
            <div class="text-center w-100 py-2">
              <small className='text-primary' data-bs-toggle="modal" data-bs-target="#forgetPassword"><Link to="/" class="text-primary">forgot password</Link></small> <br />
              <small>Don't have account<Link to="/register" class="text-primary" data-bs-toggle="modal" data-bs-target="#registerModal"> Create account</Link></small>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;

// style={{display: "block", paddingLeft: "17px"}}