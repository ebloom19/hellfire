import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "src/actions/actions";
import { SpellsList } from "../components/Main";

interface FavoriteContainerState {
    favoriteInput: string;
}

interface FavoriteContainerProps {
    count: number;
    favoriteList: string[];
    addFavorite: (item: string) => object;
    deleteFavorite: (idx: number) => object;
}

class SearchContainer extends React.Component<FavoriteContainerProps, FavoriteContainerState> {
    constructor(props: any) {
        super(props);
    }

    handleButtonClick = (name: string) => {
        this.props.addFavorite(name);
    };

    handleDeleteButtonClick = (idx: number) => {
        console.log("deleting", idx);
        this.props.deleteFavorite(idx);
    };

    render() {
        return (
            <SpellsList 
                favoriteList={this.props.favoriteList} 
                handleDelete={this.handleDeleteButtonClick} 
                handleSave={this.handleButtonClick}
            />
        );
    }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
    return {
        count: store.count,
        favoriteList: store.list
    };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
    addFavorite: (item: string) => dispatch({ type: actionTypes.ADD, payload: item}),
    deleteFavorite: (idx: number) => dispatch({ type: actionTypes.DELETE, payload: idx })
});

export default connect(
    MapStateToProps,
    MapDispatchToProps
)(SearchContainer);