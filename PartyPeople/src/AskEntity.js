import React, { useState, makeStyle, useLayoutEffect, useEffect } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
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
        backgroundColor: '#1122aa',
        color: 'white',
        
    },
    score: {},
}));

export default function AskEntity(props) {
    const classes = useStyles(greenTheme);
    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    const askCancel = () => {
        let reqJson = {
            socketID: props.socket.id,
            roomID: props.roomID,
            reqPrice: props.price,
            reqVol: props.vol,
        };

        props.socket.emit('cancelAsk_Req', reqJson);
    };
    return (
        <Grid
            style={{  width: '100%', height:'25%',  fontSize: '1.2vw', }}
            wrap="wrap"
            container
            item
            direction="column"
            justifyItems="center"
            alignItems="stretch"
        >
            <Paper
                style={{ height: '100%', width: '100%' }}
                className={classes.paper}
                onClick={askCancel}
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
                            width: '30%',
                            height: '100%',
                            fontStyle: 'italic',
                        }}
                        className="price"
                        item
                    >
                        [{props.index}]
                    </Grid>
                    <Grid
                        style={{ width: '33%', height: '100%' }}
                        className="price"
                        item
                    >
                        {SplitByThree(String(props.price))}
                    </Grid>
                    <Grid
                        style={{ width: '33%', height: '100%' }}
                        className="vol"
                        item
                    >
                        {SplitByThree(String(props.vol))}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
