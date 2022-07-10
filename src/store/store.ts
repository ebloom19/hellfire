import { legacy_createStore as createStore } from "redux";
import { favoritesReducer } from "src/reducers/favoriteReducers";
import { loadState, saveState } from "../components/Main";
import throttle from 'lodash.throttle';


const persistedState = loadState();
const store = createStore(
    favoritesReducer,
    persistedState
);

store.subscribe(throttle(() => {
    saveState(
        store.getState()
    );
}, 1000));

export default store;