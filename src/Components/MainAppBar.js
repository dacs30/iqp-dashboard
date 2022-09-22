import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Button, Typography } from '@mui/material';

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        style: {
            backgroundColor: trigger ? "rgba(52, 58, 64, 0.5)" : 'rgba(52, 58, 64)',
        },
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function ElevateAppBar(props) {

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        {props.mobileView ? (
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                UMLD for CVD
                            </Typography>
                        ) : (
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Underrepresentation in Machine Learning Datasets for CVD
                            </Typography>)}
                        <Button target={'_blank'} color="inherit" href="https://github.com/dacs30/iqp-dashboard">GitHub</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}