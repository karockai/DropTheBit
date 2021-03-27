import React from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import './ViewportLayout.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#263747',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#263747',
    },
}));
//#263747
function ViewportLayout() {
    const classes = useStyles();
    let testXs = 12;
    let leftSm = 2;
    let middleSm = 6;
    let rightSm = 4;
    return (
        <div className={classes.root}>
        </div>
        
    );
}

export default ViewportLayout;
