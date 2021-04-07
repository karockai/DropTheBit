import React, { useState, makeStyle, useLayoutEffect, useEffect } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

// 숫자 파싱
import {SplitByThree} from './parseMoney';

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
        textAlign: 'center',
        backgroundColor: '#2D4053',
        color: 'white',
        margin: '1vh 0 0 0'
    },
    score: {},
}));

export default function BidEntity(props) {
    const classes = useStyles(greenTheme);
    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

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
        >
            <Paper
                style={{ height: '10%', width: '100%' }}
                className={classes.paper}
                onClick={bidCancel}
            >
                <Grid
                    container
                    direction="row"
                    justifyItems="center"
                    alignItems="center"
                >
                    <Grid
                        style={{ width: '20%', fontStyle: 'italic' }}
                        className="price"
                    >
                        [{props.index}]
                    </Grid>
                    <Grid
                        style={{ width: '40%',}}
                        className="price"
                    >
                        {SplitByThree(String(props.price))}
                    </Grid>
                    <Grid
                        style={{ width: '40%', }}
                        className="vol"
                    >
                        {SplitByThree(String(props.vol))}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
