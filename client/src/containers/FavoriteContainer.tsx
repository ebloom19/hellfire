import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as MyTypes from "MyTypes";
import { actionTypes } from "src/actions/actions";
import { FavoriteItem } from "../components/Main";

interface FavoriteContainerState {
    favoriteInput: string;
}

interface FavoriteContainerProps {
    count: number;
    favoriteList: string[];
    addFavorite: (item: string) => object;
    deleteFavorite: (idx: number) => object;
}

class FavoriteContainer extends React.Component<FavoriteContainerProps, FavoriteContainerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            favoriteInput: ""
        }
    }

    handleTextChange = (e: any) => {
        this.setState({
            favoriteInput: e.target.value
        });
    };

    handleButtonClick = () => {
        this.props.addFavorite(this.state.favoriteInput);
        this.setState({
            favoriteInput: ""
        });
    };

    handleDeleteButtonClick = (idx: number) => {
        console.log("deleting", idx);
        this.props.deleteFavorite(idx);
    };

    render() {
        let favoriteJSX: JSX.Element[] | JSX.Element;
        if (!this.props.favoriteList.length) {
            favoriteJSX = <p>No favorite spells found!</p>;
        } else {
            favoriteJSX = this.props.favoriteList.map((item, idx) => {
                return (
                    <FavoriteItem item={item} key={idx} idx={idx} handleDelete={this.handleDeleteButtonClick} />
                );
            });
        }

        return (
            <div>
                <input
                    onChange={this.handleTextChange}
                    placeholder={"Test adding item text"}
                    value={this.state.favoriteInput}
                    style={{margin: '40px 0'}}
                    />
                <button onClick={this.handleButtonClick}>Add Test Item</button>
                {favoriteJSX}
            </div>
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
)(FavoriteContainer);