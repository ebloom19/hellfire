import * as MyTypes from "MyTypes";
import { actionTypes } from "src/actions/actions";

interface IFavoritesModel {
    count: number;
    list: string[];
}

export const initialState: IFavoritesModel = {
    count: 1,
    list: ["aid"]
}

export const favoritesReducer = (state: IFavoritesModel = initialState, action: MyTypes.RootAction) => {
    switch (action.type) {
        case actionTypes.ADD: {
            return {
                ...state,
                count: state.count + 1,
                list: [...state.list, action.payload]
            };
        }
        case actionTypes.DELETE: {
            const oldList = [...state.list];
            oldList.splice(action.payload, 1);
            const newList = oldList;

            return {
                ...state,
                count: state.count - 1,
                list: newList
            };
        }
        default:
            return state;
    }
}