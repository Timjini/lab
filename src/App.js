import React, {useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Navbar from './Nav';


function App() {


  return (
    <div className="App">
      <main>
        <h1 className='lead-title'> A serie of Mini React Projects </h1>
        <img src='images/brace.jpg' className='img-fluid brace' />
       <Link to="/search" className='super-link'><h2>Search posts</h2></Link>
       <Link to="/counter" className='super-link'><h2>Counter</h2></Link>
       <Link to="/converter" className='super-link'><h2>Converter</h2></Link>
       <Link to="/converter" className='super-link'><h2>REST API</h2></Link>
       <Link to="/converter" className='super-link'><h2>Converter</h2></Link>
      </main>
    </div>
  );
}

export default App;
