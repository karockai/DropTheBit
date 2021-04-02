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
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
}));
export default function MyAsset(props) {
    let testXs = 12;
    const classes = useStyles();
    const [myCash, setCash] = useState(0);
    const [myAsset, setAsset] = useState(0);
    const [myCoin, setCoin] = useState(0);
    const [myWallet, setWallet] = useState({
        myCash: 0,
        myAsset: 0,
        myCoin: 0,
        myAvg: 0,
    });
    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);
    //@ 가정 => props에 socket이 전달되었어야함.
    useLayoutEffect(() => {
        if (props.socket == null) {
            props.requestSocket('MyAsset', props.socket);
            setInit(true);
        } else {
            props.socket.on('refreshWallet', (data) => {
                //@ buyreq
                // console.log(data.type + '으로 인해서 발생함.');
                const currentCash = data.cash;
                const currentAsset = data.asset;
                const currentCoin = data.coinVol;
                const currentAvg = data.avgPrice;
                setWallet({
                    myCash: currentCash,
                    myAsset: currentAsset,
                    myCoin: currentCoin,
                    myAvg: currentAvg,
                });
            });
        }
    }, [isInit]);

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
        if (value.length >= 9) {
            // 199489230 -> 1억 9948만 9230
            ret += value.substring(0, value.length - 9 + 1) + '억 '; // 1억
            value = value.substring(value.length - 9 + 1);
        }
        if (value.length >= 5) {
            // value 99489230
            ret += value.substring(0, value.length - 5 + 1) + '만 '; // 9948만
            value = value.substring(value.length - 5 + 1);
        }
        ret += value;
        return ret + '원';
    }

    return (
        <>
            <Grid
                container
                item
                direction="row"
                alignItems="flex-start"
                wrap="wrap"
                justify="stretch"
                // display="flex"
            >
                <Grid
                    style={{
                        width: '60%',
                        height: '100%'
                    }}
                    item
                >
                    <Paper className={classes.paper} style={{ height: '100%', fontSize: '1vw' }}>
                        보유 현금 (KRW)
                        {/* <h4>
                            {SplitByThree(parseWonToStr(myWallet.myCash)) +
                                ' 원'}
                        </h4> */}
                        <h5 style={{ fontWeight: 'bold', fontSize: '1.2vw'  }}>
                            {ExpBySymbol(parseWonToStr(myWallet.myCash))}
                        </h5>
                    </Paper>
                </Grid>
                <Grid
                    item
                    style={{ width: '40%',height: '100%'}}
                >
                    <Paper className={classes.paper}  style={{ height: '100%', fontSize: '1vw'  }}>
                        보유 코인 수 (개)<h3  style={{ height: '100%', fontSize: '1.5vw'  }}>{myWallet.myCoin}</h3>
                        {/* 평균매입단가<h6>{myWallet.myAvg}</h6> */}
                    </Paper>
                </Grid>
            </Grid>
            <Grid
                container
                item
                justify="flex-start"
                wrap="wrap"
                alignItems="stretch"
                display="flex"
            >
                <Grid item style={{ width: '100%', height: '100%' }}>
                    <Paper className={classes.paper} style={{ height: '100%',fontSize: '1.5vw' }}>
                        총 평가 자산 (KRW)
                        {/* <h2 style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                            {SplitByThree(parseWonToStr(myWallet.myAsset)) +
                                ' 원'}
                        </h2> */}
                        <h2 style={{ fontWeight: 'bold', fontSize: '2.2vw' }}>
                            {ExpBySymbol(parseWonToStr(myWallet.myAsset))}
                        </h2>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}
