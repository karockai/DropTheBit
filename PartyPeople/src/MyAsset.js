import React, { useEffect, useState, makeStyle, useLayoutEffect } from 'react';
import {
    Button,
    TextField,
    Grid,
    Paper,
    makeStyles,
    TextareaAutosize,
} from '@material-ui/core';
import { propTypes } from 'react-bootstrap/esm/Image';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            justify: 'center',
        },
    },
    button2: {
        '& > *': {
            width: '45%',
            // margin: theme.spacing(1),
            justify: 'space-between',
        },
    },
    paper: {
        // padding: theme.spacing(1),
        margin: theme.spacing(1),

        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
export default function MyAsset(props) {
    let testXs = 12;
    const classes = useStyles();
    const [myCash, setCash] = useState(0);
    const [myAsset, setAsset] = useState(0);
    const [myCoin, setCoin] = useState(0);
    const [isInit, setInit] = useState(false);
    if(!isInit) setInit(true);
    //@ 가정 => props에 socket이 전달되었어야함.
    useLayoutEffect(() => {
        if (props.socket == null) {
            props.requestSocket('MyAsset',props.socket);
            setInit(true);
        } else {
            props.socket.on('refreshWallet', (data) => {
                //@ buyreq
                // console.log('자산을 갱신합니다.', data);
                const currentCash = data.cash;
                const currentAsset = data.asset;
                const currentCoin = data.coinVol;
                setCash(currentCash);
                setAsset(currentAsset);
                setCoin(currentCoin);
            });
        }
    },[isInit]);

    return (
        <Grid wrap="wrap" container direction="row" style={{ height: '100%' }}>
            <Grid
                container
                direction="row"
                alignItems="center"
                display="flex"
                justify="space-between"
            >
                <Grid
                    style={{
                        width: '48%',
                        height: '95%',
                        margin: '0 4px 1vh 0',
                    }}
                >
                    <Paper style={{ height: '100%' }}>
                        보유 현금
                        <h2>{myCash}</h2>
                    </Paper>
                </Grid>
                <Grid
                    style={{ width: '48%', height: '95%', margin: '0 0 1vh 0' }}
                >
                    <Paper style={{ height: '100%' }}>
                        보유 화폐수
                        <h2>
                            {myCoin}
                        </h2>
                    </Paper>
                </Grid>
            </Grid>
            <Grid
                container
                justify="center"
                alignItems="stretch"
                display="flex"
            >
                <Grid style={{ width: '100%', height: '100%' }}>
                    <Paper style={{ height: '100%' }}>
                        총 자산
                        <h2>{myAsset}</h2>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}
