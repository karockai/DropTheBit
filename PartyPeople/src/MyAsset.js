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

    function SplitByThree(value) {
        if (!value) return 'Something wrong.';
        if (value.length <= 3) return value;
        return (
            SplitByThree(value.substring(0, value.length - 3)) +
            ',' +
            value.substring(value.length - 3, value.length)
        );
    }

    const parseWonToStr = (won) => {
        if (typeof won == 'number') won = won.toString();
        return won;
    };

    function ExpBySymbol(value) {
        // console.log(value);
        if (!value) return 'Something wrong.';
        let ret = '';
        if (value.length >= 9) { // 199489230 -> 1억 9948만 9230
            ret += ( value.substring(0, value.length - 9 + 1)  + '억 ' ) // 1억
            value = value.substring(value.length - 9 + 1);
        }
        if (value.length >= 5) { // value 99489230
            ret += ( value.substring(0, value.length - 5 + 1)  + '만 ' )  // 9948만
            value = value.substring(value.length - 5 + 1);
        }
        ret += value;
        return ret + '원';
    }


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
                        width: '55%',
                        height: '95%',
                        margin: '0 4px 1vh 0',
                    }}
                >
                    <Paper style={{ height: '100%' }}>
                        보유 현금 (KRW)
                        <h4>{SplitByThree(parseWonToStr(myCash)) + ' 원'}</h4>
                        <h6>{ExpBySymbol(parseWonToStr(myCash))}</h6>
                    </Paper>
                </Grid>
                <Grid
                    style={{ width: '40%', height: '95%', margin: '0 0 1vh 0' }}
                >
                    <Paper style={{ height: '100%' }}>
                        보유 화폐수
                        <h3>
                            {myCoin}
                        </h3>
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
                        총 평가 자산 (KRW)
                        <h2 style={{fontStyle:'italic', fontWeight:'bold'}}>{SplitByThree(parseWonToStr(myAsset)) + ' 원'}</h2>
                        <h6>{ExpBySymbol(parseWonToStr(myAsset))}</h6>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}
