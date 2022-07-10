import * as React from 'react';
import { preProcessFile } from 'typescript';
import { SpellCard } from "./SpellCard";
import { FavoriteItemProps } from "../../types/SpellData";

export const FavoriteItem: React.FC<FavoriteItemProps> = props => {
    return (
        <SpellCard 
            favoriteList={props.favoriteList} 
            spellIndex={props.item} 
            index={props.idx} 
            idx={props.idx} 
            handleDelete={props.handleDelete} 
        />
    );
};