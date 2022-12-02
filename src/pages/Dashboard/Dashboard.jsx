import React from 'react';
import Main from '../../Dashboard/Main/Main';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

function Dashboard(props) {
  return (
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;