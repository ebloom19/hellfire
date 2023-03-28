import { legacy_createStore as createStore } from "redux";
import { favoritesReducer } from "src/reducers/favoriteReducers";
import { loadState, useSetState } from "../hooks";
import throttle from 'lodash.throttle';


const persistedState = loadState('favourite-spells');
const store = createStore(
    favoritesReducer,
    persistedState
);

store.subscribe(throttle(() => {
    useSetState(
        store.getState(),
        'favourite-spells'
    );
}, 1000));

export default store;