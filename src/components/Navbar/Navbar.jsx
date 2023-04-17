import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ResponsiveAppBar() {

    return (
        <AppBar position="fixed" color="">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div"
                        style={{
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        <a href="/" style={{
                            width: '100%',
                            textAlign: 'center',
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                            NEWSBRAIN
                        </a>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
