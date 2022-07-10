import * as React from 'react';
import { preProcessFile } from 'typescript';
import { SpellCard } from "./SpellCard";

interface FavoriteItemProps {
    item: string;
    idx: number;
    handleDelete: (idx: number) => void;
}

export const FavoriteItem: React.FC<FavoriteItemProps> = props => {
    return (
        // <span>
        //     {props.item}
        //     <button onClick={() => props.handleDelete(props.idx)}>X</button>
        // </span>
        <SpellCard spellIndex={props.item} index={props.idx} idx={props.idx} handleDelete={props.handleDelete} />
    );
};