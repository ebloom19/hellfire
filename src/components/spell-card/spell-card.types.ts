export type SpellCardType = {
    spellIndex: string;
    index: number;
    idx?: number;
    handleDelete: (idx: number) => void;
    handleSave?: (name: string) => void;
    favouriteList: string[];
}

export type SpellData = {
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
    classes: SpellClass[];
    material: string;
    subclasses: Subclass[];
    url: string;
}

type School=  {
    index: string;
    name: string;
    url: string;
}

type SpellClass = {
    index: string;
    name: string;
    url: string;
}

type Subclass = {
    index: string;
    name: string;
    url: string;
}