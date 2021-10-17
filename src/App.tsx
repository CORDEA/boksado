import React from 'react';
import {PlayArrow} from '@mui/icons-material';
import {Box, Fab} from '@mui/material';

function App() {
    return (
        <Box sx={{
            width: 1,
            height: 1
        }}>
            <Fab sx={{
                position: 'absolute',
                bottom: 16,
                right: 16
            }}>
                <PlayArrow/>
            </Fab>
        </Box>
    );
}

export default App;
