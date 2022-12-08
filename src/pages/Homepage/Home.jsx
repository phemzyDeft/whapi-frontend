import React from 'react';
import Aboutarea from '../../components/About/Aboutarea';
import Banner from '../../components/Homebanner/Banner';
import Usecase from '../../components/Usecase/Usecase';
import Featurearea from '../../components/Feature/Featurearea';
import Factarea from '../../components/Factarea/Factarea';

function Home(props) {
  return (
    <div>
      <Banner />
      <Factarea />
      <Featurearea />
      <Aboutarea />
      <Usecase />
    </div>
  );
}

export default Home;