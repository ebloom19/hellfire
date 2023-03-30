import "./App.scss";

import { Link, Route, Routes } from "react-router-dom";
import FavoriteContainer from "src/containers/FavoriteContainer";
import SearchContainer from "src/containers/SearchContainer";

import { NavigationBar, SpellsList } from "../components";

export const App = () => {
	return (
		<>
			<div className="App">
				<NavigationBar />
				<header className="App-header">
					<Routes>
						<Route path="/" element={<SearchContainer />} />
						<Route path="/favorites" element={<FavoriteContainer />} />
					</Routes>
				</header>
			</div>
		</>
	);
};

export default App;
