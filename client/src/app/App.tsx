import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { SpellsList } from '../components/Main';
import { Navbar } from '../components/NavBar';
import { Register, Login } from 'src/components/Users';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </header>
    </div>
    {/* <div className="white">
      <div className="squares">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="grey"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div> */}
    </>
  );
}

function Home() {


  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <SpellsList/>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default App;
