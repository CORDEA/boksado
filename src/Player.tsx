import React from 'react';
import {Pause, PlayArrow} from '@mui/icons-material';
import {Box, Container, Fab, List, TextField} from '@mui/material';
import Item from './Item';
import State, {Score} from './state';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {changeSpeed, start, stop} from './actions';

type Actions = {
    start: (speedQuery: string) => void
    stop: () => void
    changeSpeed: (query: string) => void
}

type AppState = {
    score: Score
    speed: number
    speedQuery: string
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
            <TextField
                id='speed'
                label='Speed'
                variant='outlined'
                defaultValue={props.speed}
                onChange={(event) => props.changeSpeed(event.target.value)}
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16
                }}/>
            <Fab onClick={props.inProgress ? props.stop : () => props.start(props.speedQuery)} sx={{
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
        start: (speedQuery) => start(dispatch, speedQuery),
        stop: () => stop(dispatch),
        changeSpeed: (query) => changeSpeed(dispatch, query)
    }
}

function mapStateToProps(state: State): AppState {
    return {
        score: state.scores[0],
        currentNoteIndex: state.currentNoteIndex,
        speed: state.speed,
        speedQuery: state.speedQuery,
        inProgress: state.inProgress
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
