import React from 'react';
import {Pause, PlayArrow} from '@mui/icons-material';
import {Box, Container, Fab, List} from '@mui/material';
import Item from './Item';
import State, {Score} from './state';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {start} from './actions';

type Actions = {
    start: () => void
}

type AppState = {
    score: Score
    inProgress: boolean
}

type Props = Actions & AppState

function App(props: Props) {
    return (
        <Box sx={{
            width: 1,
            height: 1
        }}>
            <Container sx={{maxWidth: 'xs'}}>
                <List>
                    {
                        props.score.notes.map((value) => (
                            <Item key={value.type} note={value}/>
                        ))
                    }
                </List>
            </Container>
            <Fab onClick={props.start} sx={{
                position: 'absolute',
                bottom: 16,
                right: 16
            }}>
                {props.inProgress ? <Pause/> : <PlayArrow/>}
            </Fab>
        </Box>
    );
}

function mapDispatchToProps(dispatch: Dispatch): Actions {
    return {
        start: () => dispatch(start())
    }
}

function mapStateToProps(state: State): AppState {
    return {score: state.scores[0], inProgress: state.inProgress}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
