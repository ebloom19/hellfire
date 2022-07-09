
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
        subclasses: Subclass[];
        url: string;
    }

    export interface SpellInfoProps {
        spellIndex: string;
    }

    export interface SpellIconsProps {
        spellData: SpellDataObject
    }

    
