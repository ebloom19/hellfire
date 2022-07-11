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
    }

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
        if (this.props.favoriteList.length < 2) {
            favoriteJSX = <h4 style={{margin: '25px 0', textAlign: 'center', padding: '0 20px'}}>No favorites found. Go Home to search and add!</h4>;
        } else {
            favoriteJSX = this.props.favoriteList.map((item, idx) => {
                return (
                    <FavoriteItem 
                        item={item} 
                        key={idx} 
                        idx={idx} 
                        handleDelete={this.handleDeleteButtonClick} 
                        favoriteList={this.props.favoriteList} 
                    />
                );
            });
        }

        return (
            <div>
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