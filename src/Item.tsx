import React from 'react';
import {Paper} from '@mui/material';
import {ScoreNote} from './state';

interface Props {
    note: ScoreNote
}

function Item(props: Props) {
    return (
        <Paper sx={{
            padding: 2,
            textAlign: 'center'
        }}>paper</Paper>
    );
}

export default Item;
