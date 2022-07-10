import * as React from 'react';

interface FavoriteItemProps {
    item: string;
    idx: number;
    handleDelete: (idx: number) => void;
}

export const FavoriteItem: React.FC<FavoriteItemProps> = props => {
    return (
        <span>
            {props.item}
            <button onClick={() => props.handleDelete(props.idx)}>X</button>
        </span>
    );
};