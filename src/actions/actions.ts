import { action } from "typesafe-actions";

// using typescript enum rather than action constants
export enum actionTypes {
	ADD = "ADD",
	DELETE = "DELETE",
}

export const favoriteActions = {
	add: (item: string) => action(actionTypes.ADD, item),
	delete: (idx: number) => action(actionTypes.DELETE, idx),
};
