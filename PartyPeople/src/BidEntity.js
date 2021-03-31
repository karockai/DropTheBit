import React, { useState, makeStyle, useLayoutEffect, useEffect } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const greenTheme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        spacing: 2,
        textAlign: 'center',
        backgroundColor: '#2D4053',
        color: 'white',
        margin: '0 0 10px 0'
    },
    score: {},
}));

export default function BidEntity(props) {
    const classes = useStyles(greenTheme);
    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    // useLayoutEffect(() => {
    //     if (props.socket == null) {
    //         props.requestSocket('makeTableEntity', props.socket);
    //         setInit(true);
    //     }
    // }, [isInit]);

    const bidCancel = () => {
        let reqJson = {
            socketID: props.socket.id,
            roomID: props.roomID,
            reqPrice: props.price,
            reqVol: props.vol,
        };

        props.socket.emit('cancelBid_Req', reqJson);
    };
    return (
        <Grid
            wrap="wrap"
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={2}
        >
            <Paper
                // style={{ height: '4vh', width: '100%' }}
                className={classes.paper}
                onClick={bidCancel}
            >
                <Grid container direction="row" justifyItems="center" alignItems="center">
                    <Grid
                        style={{ width: '20%', height: '4vh' }}
                        className="price"
                    >
                        <span style={{ fontStyle: 'italic' }}>
                            [{props.index}]
                        </span>
                    </Grid>
                    <Grid
                        style={{ width: '40%', height: '4vh' }}
                        className="price"
                    >
                        {props.price}
                    </Grid>
                    <Grid
                        style={{ width: '40%', height: '4vh' }}
                        className="vol"
                    >
                        {props.vol}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
