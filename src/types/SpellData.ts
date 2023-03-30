export interface School {
	index: string;
	name: string;
	url: string;
}

export interface Class {
	index: string;
	name: string;
	url: string;
}

export interface Subclass {
	index: string;
	name: string;
	url: string;
}

export interface SpellDataObject {
	_id: string;
	higher_level: any[];
	index: string;
	name: string;
	desc: string[];
	range: string;
	components: string[];
	ritual: boolean;
	duration: string;
	concentration: boolean;
	casting_time: string;
	level: number;
	attack_type: string;
	school: School;
	classes: Class[];
	material: string;
	subclasses: Subclass[];
	url: string;
}

export interface SpellCardProps {
	spellIndex: string;
	index: number;
	idx?: number;
	handleDelete: (idx: number) => void;
	handleSave?: (name: string) => void;
	favoriteList: string[];
}

export interface SpellIconsProps {
	spellData: SpellDataObject;
	index: number;
}

export interface FavoriteItemProps {
	item: string;
	idx: number;
	handleDelete: (idx: number) => void;
	favoriteList: string[];
}

export interface SpellsListProps {
	handleDelete: (idx: number) => void;
	handleSave: (name: string) => void;
	favoriteList: string[];
}
