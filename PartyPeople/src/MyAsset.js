import React, { useEffect, useState, makeStyle, useLayoutEffect } from 'react';
import {
    Button,
    TextField,
    Grid,
    Paper,
    makeStyles,
    TextareaAutosize,
    Divider,
} from '@material-ui/core';
import { propTypes } from 'react-bootstrap/esm/Image';
import {
    SplitByThree,
    ExpBySymbol,
    parseWonToStr,
    showProfit,
} from './parseMoney';
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
    const [diffWallet, setDiffWallet] = useState({
        diffCash: 0,
        diffAsset: 0,
        diffCoin: 0,
    });

    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);
    //@ 가정 => props에 socket이 전달되었어야함.
    const [upDown, SetUpDown] = useState(0);

    let color = 'white';
    useLayoutEffect(() => {
        if (props.socket == null) {
            // props.requestSocket('MyAsset', props.socket);
            // setInit(true);
        } else {
            props.socket.on('refreshWallet', (data) => {
                //@ buyreq

                const refreshWallet = data.refreshWallet;
                const bfrWallet = data.bfrWallet;

                const currentCash = refreshWallet.cash;
                const currentAsset = refreshWallet.asset;
                const currentCoin = refreshWallet.coinVol;
                const currentAvg = refreshWallet.avgPrice;

                const diffAsset = currentAsset - bfrWallet.asset;

                const diffCash = currentCash - bfrWallet.cash;
                const diffCoin = currentCoin - bfrWallet.coinVol;

                setDiffWallet({
                    diffCash: diffCash,
                    diffAsset: diffAsset,
                    diffCoin: diffCoin,
                });
                setWallet({
                    myCash: currentCash,
                    myAsset: currentAsset,
                    myCoin: currentCoin,
                    myAvg: currentAvg,
                });
            });
        }
    }, [isInit]);

    // // ! 1000단위 , 붙이기
    // function SplitByThree(value) {
    //     if (!value) return 'Something wrong.';
    //     if (value.length <= 3) return value;
    //     return (
    //         SplitByThree(value.substring(0, value.length - 3)) +
    //         ',' +
    //         value.substring(value.length - 3, value.length)
    //     );
    // }

    // const parseWonToStr = (won) => {
    //     if (typeof won == 'number') won = won.toString();
    //     return won;
    // };

    // function ExpBySymbol(value) {
    //     // console.log(value);
    //     if (!value) return 'Something wrong.';
    //     let ret = '';
    //     if (value.length >= 9) {
    //         // 199489230 -> 1억 9948만 9230
    //         ret += value.substring(0, value.length - 9 + 1) + '억 '; // 1억
    //         value = value.substring(value.length - 9 + 1);
    //     }
    //     if (value.length >= 5) {
    //         // value 99489230
    //         ret += value.substring(0, value.length - 5 + 1) + '만 '; // 9948만
    //         value = value.substring(value.length - 5 + 1);
    //     }
    //     ret += value;
    //     return ret + '원';
    // }

    return (
        <>
            <Grid
                container
                item
                direction="row"
                alignItems="flex-start"
                wrap="wrap"
                justify="stretch"
                style={{
                    height: '40%',
                }}
            >
                <Grid
                    style={{
                        width: '60%',
                        height: '100%',
                        padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                    }}
                    item
                >
                    <Paper
                        className={classes.paper}
                        style={{
                            height: '100%',
                            fontSize: '1vw',
                            padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                        }}
                    >
                        <span>보유 현금 (KRW)</span>
                        <h5 style={{ fontWeight: 'bold', fontSize: '1.2vw' }}>
                            {ExpBySymbol(parseWonToStr(myWallet.myCash))} 원
                        </h5>
                        <div
                            id="diffCash"
                            class="default"
                            style={{
                                fontWeight: 'bold',
                                fontSize: '1vw',
                                textAlign: 'right',
                                padding: '0 10% 0 0',
                            }}
                        >
                            {showProfit('diffCash', diffWallet.diffCash)}{' '}
                        </div>
                    </Paper>
                </Grid>
                <Grid
                    item
                    style={{
                        width: '40%',
                        height: '100%',
                        padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                    }}
                >
                    <Paper
                        className={classes.paper}
                        style={{
                            height: '100%',
                            fontSize: '1vw',
                            padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                        }}
                    >
                        보유 코인 수
                        <h3 style={{ fontSize: '1.5vw' }}>
                            {SplitByThree(String(myWallet.myCoin))} 개
                        </h3>
                        <h3
                            id="diffCoin"
                            class="default"
                            style={{
                                fontSize: '1vw',
                                textAlign: 'right',
                                padding: '0 10% 0 0',
                            }}
                        >
                            {showProfit('diffCoin', diffWallet.diffCoin)}{' '}
                        </h3>
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
                style={{
                    height: '60%',
                }}
            >
                <Grid
                    item
                    style={{
                        width: '100%',
                        height: '100%',
                        padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                    }}
                >
                    <Paper
                        className={classes.paper}
                        style={{
                            height: '100%',
                            fontSize: '1.5vw',
                            padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                        }}
                    >
                        총 자산 (KRW)
                        {/* <h2 style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                            {SplitByThree(parseWonToStr(myWallet.myAsset)) +
                                ' 원'}
                        </h2> */}
                        <h2
                            style={{
                                fontWeight: 'bold',
                                fontSize: '2.2vw',
                                color: color,
                            }}
                        >
                            {ExpBySymbol(parseWonToStr(myWallet.myAsset))} 원
                        </h2>
                        <h2
                            id="diffAsset"
                            class="default"
                            style={{
                                fontWeight: 'bold',
                                fontSize: '1.5vw',
                                color: color,
                                textAlign: 'right',
                                padding: '0 10% 0 0',
                            }}
                        >
                            {showProfit('diffAsset', diffWallet.diffAsset)}{' '}
                        </h2>
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
}
