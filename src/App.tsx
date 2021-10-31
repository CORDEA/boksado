import React from 'react';
import State from './state';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Home from './Home';
import Player from './Player';

type Actions = {}

type AppState = {
    currentScoreId: number
}

type Props = Actions & AppState

function App(props: Props) {
    if (props.currentScoreId >= 0) {
        return (<Player/>);
    }
    return (<Home/>);
}

function mapDispatchToProps(dispatch: Dispatch): Actions {
    return {}
}

function mapStateToProps(state: State): AppState {
    return {
        currentScoreId: state.currentScoreId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
