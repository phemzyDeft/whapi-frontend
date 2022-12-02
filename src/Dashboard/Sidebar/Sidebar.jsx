import React from 'react';
import {MdOutlineWhatshot} from 'react-icons/md';
import {Link} from 'react-router-dom';
import './Sidebar.css';

function Sidebar(props) {
  return (
  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-logo ps-3">
        <div className="logo d-flex align-item-center pb-3">
          <MdOutlineWhatshot className='icon fs-1'/>
          <h2 className='pt-1'>SotaBot</h2>
        </div>
      </div>
      <div class="position-sticky .pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="#">
            <i class="fa-sharp fa-solid fa-diagram-project"></i>              
              Project
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
            <i class="fa-solid fa-compact-disc"></i>
              Tasks
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
            <i class="fa-solid fa-folder-closed"></i>
              Files
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
            <i class="fa-solid fa-screwdriver-wrench"></i>
              Integrations
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
            <i class="fa-solid fa-user-plus"></i>
              User
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
            <i class="fa-solid fa-gears"></i>
              Settings
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="#">
            <i class="fa-solid fa-screwdriver-wrench"></i>
              Authentication
            </Link>
          </li>
        </ul>
      </div>
      </nav>
    </div>
  </div>
  );
}

export default Sidebar;