import React from 'react';
import ForgetPassword from './components/Auth/ForgetPassword';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import {Routes, Route} from 'react-router-dom'; 
import Layout1 from './Layouts/Layout1';
import Home from './pages/Homepage/Home';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">

      <Login />
      <Register />
      <ForgetPassword />

      <Routes>
        
        <Route element={<Layout1 />}>
          <Route index path='/' element={<Home />}/>
        </Route>

        <Route path='/dashboard' element={<Dashboard />}/>

      </Routes>

    </div>
  );
}

export default App;
