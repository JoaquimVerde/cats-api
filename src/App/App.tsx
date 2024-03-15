import React from 'react';
import logo from '../images/cat-logo-1.png';
import GetCat from '../getCat/getCat';
import './App.css';
import { format } from 'path';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="header-text">Cats & Cats</p>
      </header>

      <BrowserRouter>
        <nav className='nav-bar'>
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/getCat">Your Cat</Link>
          <Link className='nav-link' to="/">Your Dog</Link>




        </nav>


        <Routes>
          <Route path="/getCat" element={<GetCat />} />
        </Routes>



      </BrowserRouter>



    </div>

  );
}

export default App;
