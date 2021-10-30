import React from 'react';
import {Pause, PlayArrow} from '@mui/icons-material';
import {Box, Container, Fab, List} from '@mui/material';
import Item from './Item';
import State, {Score} from './state';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {start, stop} from './actions';

type Actions = {
    start: () => void
    stop: () => void
}

type AppState = {
    score: Score
    currentNoteIndex: number
    inProgress: boolean
}

type Props = Actions & AppState

function Player(props: Props) {
    return (
        <Box sx={{
            width: 1,
            height: 1
        }}>
            <Container sx={{maxWidth: 'xs'}}>
                <List>
                    {
                        props.score.notes
                            .slice(props.currentNoteIndex)
                            .map((value, i) => (
                                <Item key={i} note={value}/>
                            ))
                    }
                </List>
            </Container>
            <Fab onClick={props.inProgress ? props.stop : props.start} sx={{
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
        start: () => start(dispatch),
        stop: () => stop(dispatch)
    }
}

function mapStateToProps(state: State): AppState {
    return {
        score: state.scores[0],
        currentNoteIndex: state.currentNoteIndex,
        inProgress: state.inProgress
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
