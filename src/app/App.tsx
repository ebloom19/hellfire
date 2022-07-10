import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { SpellsList } from '../components/Main';
import { Navbar } from '../components/NavBar';
import { Register, Login } from '../components/Users';
import FavoriteContainer from 'src/containers/FavoriteContainer';
import SearchContainer from 'src/containers/SearchContainer';

export const App: React.FC<{}> = () => {
  return (
    <>
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<SearchContainer />} />
          <Route path="/favorites" element={<FavoriteContainer/>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </header>
    </div>
    </>
  )
}

// function Home() {

//   return (
//     <>
//       <main>
//         <SearchContainer />
//       </main>
//     </>
//   );
// }

export default App;
