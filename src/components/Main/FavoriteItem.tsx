import * as React from 'react';
import { preProcessFile } from 'typescript';
import { SpellCard } from "./SpellCard";

interface FavoriteItemProps {
    item: string;
    idx: number;
    handleDelete: (idx: number) => void;
    favoriteList: string[];
}

export const FavoriteItem: React.FC<FavoriteItemProps> = props => {
    return (
        <SpellCard favoriteList={props.favoriteList} spellIndex={props.item} index={props.idx} idx={props.idx} handleDelete={props.handleDelete} />
    );
};