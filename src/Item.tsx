import React, {ReactComponentElement} from 'react';
import {Divider, Paper, Stack} from '@mui/material';
import {ScoreNote, ScoreNoteType} from './state';
import {
    ArrowBack,
    ArrowDownward,
    ArrowForward,
    ArrowUpward,
    FastForward,
    NotInterested,
    PlayArrow
} from '@mui/icons-material';

interface Props {
    note: ScoreNote
}

function Item(props: Props) {
    return (
        <Stack
            direction='row'
            spacing={12}
            margin={6}
            justifyContent='center'
            divider={<Divider orientation='vertical' flexItem/>}>
            <Paper sx={{
                padding: 2,
                textAlign: 'center'
            }}>paper</Paper>

            <Paper sx={{
                padding: 2,
                textAlign: 'center'
            }}>paper</Paper>
        </Stack>
    );
}

function findIcon(type: ScoreNoteType, isLeft: boolean): ReactComponentElement<any> | null {
    switch (type) {
        case ScoreNoteType.jab:
            return <PlayArrow/>;
        case ScoreNoteType.cross:
            return <FastForward/>;
        case ScoreNoteType.hook:
            if (isLeft) {
                return <ArrowForward/>;
            } else {
                return <ArrowBack/>;
            }
        case ScoreNoteType.uppercut:
            return <ArrowUpward/>;
        case ScoreNoteType.weaving:
            return <ArrowDownward/>;
        case ScoreNoteType.blocking:
            return <NotInterested/>;
        case ScoreNoteType.empty:
            return null;
    }
    return null;
}

export default Item;
