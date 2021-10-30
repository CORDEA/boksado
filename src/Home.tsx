import React from 'react';
import {ArrowForward} from '@mui/icons-material';
import {Box, Container, Fab, List, ListItem, ListItemText} from '@mui/material';
import State, {Score} from './state';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type Actions = {}

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
                            <ListItem>
                                <ListItemText primary={score.name}/>
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
    return {}
}

function mapStateToProps(state: State): AppState {
    return {
        scores: state.scores,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
