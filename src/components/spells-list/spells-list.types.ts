export type SpellsListType = {
	handleDelete: (idx: number) => void;
	handleSave: (name: string) => void;
	favouriteList: string[];
};

export type SpellsObject = {
	index: string;
	name: string;
	url: string;
};

export type SelectOption = {
	label: string;
	value: string;
};
