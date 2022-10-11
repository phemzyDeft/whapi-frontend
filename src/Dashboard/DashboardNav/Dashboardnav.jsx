import React from 'react';
import './Dashboardnav.css'
import {user_favicon} from '../../assets/index';
import {Link} from 'react-router-dom';

function Dashboardnav(props) {
  return (    
    <div class="dash-nav d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <div className="nav-left">
        <h1 class="h2">Dashboard</h1>
      </div>

      <div className="nav-middle">
        <div className="search">
          <input type="text" placeholder='search here...' />
          <i className="fa-solid fa-search search-icon"></i>
        </div>
      </div>

      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="navbar-user d-none d-sm-block">
          <div class="hstack gap-3 ms-4">
            <div class="dropdown">
              <Link class=".d-flex align-items-center" to="#" role="button" data-bs-toggle="dropdown" aria-haspopup="false" aria-expanded="false">
                <div>
                  <div class="avatar avatar-sm .bg-warning text-white"><img alt="..." src={user_favicon} width ="20%"/></div>
                </div>
              </Link>
              <div class="dropdown-menu dropdown-menu-start">
                <div class="dropdown-header"><span class="d-block text-sm text-muted mb-1">User</span></div>                
                <Link class="dropdown-item pb-2" to="#"><i class="fa-solid fa-pen-to-square me-2"></i>Edit profile</Link>
                <Link class="dropdown-item pb-2" to="#"><i class="fa-solid fa-gears me-2"></i>Settings </Link>
                <Link class="dropdown-item pb-2" to="#"><i class="fa-sharp fa-solid fa-share-nodes me-2"></i>Share</Link>
                <div class="dropdown-divider"></div>
                <button type='button' class="dropdown-item" to="#"><i class="bi bi-person me-3"></i>Logout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Dashboardnav;