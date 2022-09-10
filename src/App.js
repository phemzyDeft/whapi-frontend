import React from 'react';
import Aboutarea from './components/About/Aboutarea';
import Factarea from './components/Fact/Factarea';
import Featurearea from './components/Feature/Featurearea';
import Footer from './components/Footer/Footer';
import Banner from './components/Homebanner/Banner';
import Header from './components/Navbar/Header';
import Usecase from './components/Usecase/Usecase';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Factarea />
      <Featurearea />
      <Aboutarea />
      <Usecase />
      <Footer />
    </div>
  );
}

export default App;
