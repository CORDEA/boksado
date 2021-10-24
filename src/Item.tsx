import React from 'react';
import {Divider, Paper, Stack} from '@mui/material';
import {ScoreNote} from './state';

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

export default Item;
