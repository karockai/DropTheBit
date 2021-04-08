import React, { useState, makeStyle, useLayoutEffect, useEffect } from 'react';
import { Grid, Paper, makeStyles, TableCell } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

// 숫자 파싱
import { SplitByThree } from './parseMoney';

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
        backgroundColor: '#aa2211',
        color: 'white',
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
            style={{ height: '100%', width: '100%' }}
            wrap="wrap"
            container
            direction="column"
            justifyItems="center"
            alignItems="center"
        >
            <Paper
                style={{ height: '100%', width: '100%' }}
                className={classes.paper}
                onClick={bidCancel}
            >
                <Grid
                    container
                    direction="row"
                    justifyItems="center"
                    alignItems="center"
                    style={{ height: '100%' }}
                >
                    <Grid
                        style={{
                            width: '33%',
                            height: '100%',
                            fontStyle: 'italic',
                        }}
                        className="price"
                        justifyItems="center"
                        item
                    >
                        [{props.index}]
                    </Grid>
                    <Grid
                        style={{ width: '33%', height: '100%' }}
                        className="price"
                        justifyItems="center"
                        item
                    >
                        {SplitByThree(String(props.price))}
                    </Grid>
                    <Grid
                        style={{ width: '33%', height: '100%' }}
                        className="vol"
                        justifyItems="center"
                        item
                    >
                        {SplitByThree(String(props.vol))}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
