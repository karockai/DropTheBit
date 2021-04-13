import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import TradeStock from './TradeStock';
import StockDoneList from './StockDoneList';
import { red } from '@material-ui/core/colors';

import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    useHistory,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
}));

export default function StockCtrl(props) {
    const classes = useStyles();
    let leftSm = 2;
    let middleSm = 7;
    let rightSm = 3;

    const location = useLocation();
    const gameTime = location.state.gameTime;
    const [timerTime, setTimerTime] = useState(gameTime);
    const [inputCtrl, setInputCtrl] = useState(false);

    const SetInputCtrl = (isChat) => {
        setInputCtrl(isChat);
    };
    const [APIdata, setAPI] = useState(null);

    return (
        <Grid
        className="지갑및호가거래"
        container
        style={{ width: '100%', height: '50%' }}
        item
        wrap="wrap"
        direction="row"
        alignItems="stretch"
        justify="space-between"
    >
        <Grid
            style={{ height: '100%', width: '50%' }}
            direction="column"
            container
            item
            alignItems="stretch"
            justify="flex-start"
        >
            
            <Grid
                className="거래내역컴퍼넌트"
                style={{
                    width: '100%',
                    height: '40%',
                    padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                }}
                item
            >
                <Paper
                    className={classes.paper}
                    style={{ width: '100%', height: '100%' }}
                >
                    <StockDoneList
                        socket={props.socket}
                        requestSocket={props.requestSocket}
                    />
                </Paper>
            </Grid>
        </Grid>
        <Grid
            className="주식거래컴퍼넌트"
            container
            item
            style={{
                height: '100%',
                width: '50%',
                padding: '0.3vh 0.3vw 0.3vh 0.3vw',
            }}
        >
            <Grid
                style={{ height: '100%' }}
                wrap="wrap"
                alignItems="stretch"
                container
                item
                direction="row"
                justify="space-between"
            >
                <Grid
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    item
                >
                    <Paper
                        style={{ height: '100%' }}
                        className={classes.paper}
                    >
                        <TradeStock
                            inputCtrl={inputCtrl}
                            roomID={props.roomID}
                            APIdata={APIdata}
                            socket={props.socket}
                            requestSocket={props.requestSocket}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    );
}