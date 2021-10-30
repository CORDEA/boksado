import React from 'react';
import State from './state';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import Home from './Home';

type Actions = {}

type AppState = {}

type Props = Actions & AppState

function App(props: Props) {
    return (
        <Home/>
    );
}

function mapDispatchToProps(dispatch: Dispatch): Actions {
    return {}
}

function mapStateToProps(state: State): AppState {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
