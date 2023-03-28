import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { SpellsList, NavigationBar } from '../components';
import FavoriteContainer from 'src/containers/FavoriteContainer';
import SearchContainer from 'src/containers/SearchContainer';

export const App = () => {
  return (
    <>
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<SearchContainer />} />
          <Route path="/favorites" element={<FavoriteContainer/>} />
        </Routes>
      </header>
    </div>
    </>
  )
}

export default App;
