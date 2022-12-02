import React from 'react';
import Card from '../Card/Card';
import Dashboardnav from '../DashboardNav/Dashboardnav';
// import Table from '../Table/Table';

function Main(props) {
  return (
    <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{backgroundColor: "var(--text-color)"}}>
      <Dashboardnav />
      <Card />
      {/* <Table /> */}
    </div>
  );
}

export default Main;