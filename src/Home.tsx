import React from 'react';
import {ArrowForward} from '@mui/icons-material';
import {Box, Container, Fab, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import State, {Score} from './state';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {selectScore} from './actions';

type Actions = {
    select: (id: number) => void
}

type AppState = {
    scores: Score[]
}

type Props = Actions & AppState

function Home(props: Props) {
    return (
        <Box sx={{
            width: 1,
            height: 1
        }}>
            <Container sx={{maxWidth: 'xs', my: 4}}>
                <List>
                    {
                        props.scores.map((score) => (
                            <ListItem key={score.id}>
                                <ListItemButton onClick={() => props.select(score.id)}>
                                    <ListItemText primary={score.name}/>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Container>
            <Fab sx={{
                position: 'absolute',
                bottom: 16,
                right: 16
            }}>
                {<ArrowForward/>}
            </Fab>
        </Box>
    );
}

function mapDispatchToProps(dispatch: Dispatch): Actions {
    return {
        select: id => selectScore(dispatch, id)
    }
}

function mapStateToProps(state: State): AppState {
    return {
        scores: state.scores,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
