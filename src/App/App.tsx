import React from 'react';
import logo from '../images/cat-logo-1.png';
import GetCat from '../getCat/getCat';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CatBreeds from '../catBreeds/catBreeds';
import CatDescription from '../catBreeds/catDescription';
import Home from '../home';

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
          <Link className='nav-link' to="/getCat">Some Cats</Link>
          <Link className='nav-link' to="/catBreeds">Cat Breeds</Link>
                

        </nav>


        <Routes>
          <Route path="/getCat" element={<GetCat />} />
          <Route path="/catBreeds" element={<CatBreeds />} />
          <Route path="/catBreeds/catDescription" element={<CatDescription />} />
          <Route path="/" element={<Home />} />


        </Routes>



      </BrowserRouter>



    </div>

  );
}

export default App;
