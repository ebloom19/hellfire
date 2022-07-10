import { legacy_createStore as createStore } from "redux";
import { favoritesReducer } from "src/reducers/favoriteReducers";

const store = createStore(favoritesReducer);

export default store;