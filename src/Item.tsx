import React, {ReactComponentElement} from 'react';
import {Box, Divider, Paper, Stack} from '@mui/material';
import {ScoreNote, ScoreNoteDirection, ScoreNoteType} from './state';
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
    let leftIcon = null;
    let rightIcon = null;
    switch (props.note.direction) {
        case ScoreNoteDirection.left:
            leftIcon = findIcon(props.note.type, true);
            break;
        case ScoreNoteDirection.right:
            rightIcon = findIcon(props.note.type, false);
            break;
        case ScoreNoteDirection.both:
            leftIcon = findIcon(props.note.type, true);
            rightIcon = findIcon(props.note.type, false);
            break;

    }

    if (leftIcon == null && rightIcon == null) {
        return (<Box sx={{height: 32}}/>);
    }
    return (
        <Stack
            direction='row'
            spacing={12}
            margin={6}
            justifyContent='center'
            divider={<Divider orientation='vertical' flexItem/>}>
            {
                leftIcon == null ? <Box sx={{width: 56}}/> :
                    <Paper sx={{
                        padding: 2,
                        textAlign: 'center'
                    }}>{leftIcon}</Paper>
            }

            {
                rightIcon == null ? <Box sx={{width: 56}}/> :
                    <Paper sx={{
                        padding: 2,
                        textAlign: 'center'
                    }}>{rightIcon}</Paper>
            }
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
