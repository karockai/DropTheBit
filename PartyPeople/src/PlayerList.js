import React, { useState, makeStyle } from 'react';
import {
    IconButton,
    Button,
    Box,
    TextField,
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    score: {},
}));

function MakePlayerPaper(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container direction="row" alignItems="center">
                <Grid style={{ width: '20%' }} className="score">
                    1
                </Grid>
                <Grid>
                    <Grid container direction="col" className="score">
                        <Grid>sunio</Grid>
                        {/* <Grid>
                        22
                        </Grid> */}
                    </Grid>
                    <Grid container direction="col" className="score">
                        <Grid>100,283</Grid>
                        {/* <Grid>
                        283
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default function PlayerList(props) {
    const testXs = 12;
    // const value = data;

    return (
        <Grid
            wrap="wrap"
            container
            direction="column"
            justify="center"
            alignItems="stretch"
        >
            <Grid item xs={testXs}>
                <MakePlayerPaper roomID={props.roomID} roomInfo={props.roomInfo}/>
            </Grid>
        </Grid>
    );
}
