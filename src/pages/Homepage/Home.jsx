import React from 'react';
import Aboutarea from '../../components/About/Aboutarea';
import Factarea from '../../components/Fact/Factarea';
import Banner from '../../components/Homebanner/Banner';
import Usecase from '../../components/Usecase/Usecase';

function Home(props) {
  return (
    <div>
      <Banner />
      <Factarea />
      <Aboutarea />
      <Usecase />
    </div>
  );
}

export default Home;