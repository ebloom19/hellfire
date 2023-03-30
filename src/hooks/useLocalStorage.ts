export const loadState = (itemName: string) => {
	try {
		const serializedState = localStorage.getItem(itemName);
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		// sentry log error
	}
};

interface IFavoritesModel {
	count: number;
	list: string[];
}

export const useSetState = (state: IFavoritesModel, itemName: string) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(itemName, serializedState);
	} catch (err) {
		// sentry log error
	}
};
