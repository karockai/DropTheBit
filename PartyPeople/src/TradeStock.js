import React, { useEffect, useState, makeStyle, useLayoutEffect } from 'react';
import {
    IconButton,
    Button,
    TextField,
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { useSound, playSound } from './useSound';
import DrumUp from './audios/effect/drumUp.wav';
import DrumDown from './audios/effect/drumDown.wav';
import HatUp from './audios/effect/hatUp.wav';
import HatDown from './audios/effect/hatDown.wav';
import { grey, red } from '@material-ui/core/colors';
import { SnackAlertBtn, SnackAlertFunc } from './SnackAlert';
import { SnackbarProvider } from 'notistack';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *': {
            width: '42%',
            // textAlign: 'center',
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(1),
        // margin: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    button_block: {
        width: '1vh',
    },
}));

function ArrowButton(props) {
    const classes = useStyles();
    const [stock, setStock] = useState(null);
    const [tmpStock, setTmpStock] = useState(0);
    const [diffrence, setDiffrence] = useState(0);

    function PlusArrow(props) {
        setDiffrence(diffrence + 1);
        return setTmpStock(tmpStock + 1);
    }

    function MinusArrow(props) {
        setDiffrence(diffrence - 1);
        return setTmpStock(tmpStock - 1);
    }

    return (
        <Grid
            className={classes.button_block}
            display="flex"
            justify="center"
            style={{ height: '100%' }}
        >
            <IconButton
                aria-label="delete"
                className={classes.margin}
                size="small"
                onClick={props.upEvent}
            >
                <ArrowDropUpIcon />
            </IconButton>
            <IconButton
                aria-label="delete"
                className={classes.margin}
                size="small"
                onClick={props.downEvent}
            >
                <ArrowDropDownIcon />
            </IconButton>
        </Grid>
    );
}

let Snacks = [];

export default function TradeStock(props) {
    const classes = useStyles();

    const [currentBid, SetBid] = useState(0);
    const [newBid, SetNewBid] = useState(0); //props.APIdata.curPrice
    const [currentVolume, SetVolume] = useState(1);
    const [newVolume, SetNewVolume] = useState(1);
    const [unitBid, SetUnit] = useState(0); // props.APIdata.priceUnit
    const [isBind, SetBind] = useState(false);
    const [isFocus, SetFocus] = useState(false);
    const [sellStatus, setSellStatus] = useState({
        status: '',
        val: 0,
        vol: 0,
    });
    const [buyStatus, setBuyStatus] = useState({
        status: '',
        val: 0,
        vol: 0,
    });

    if (!isBind) SetBind(true);
    const [myWallet, setWallet] = useState({
        myCash: 0,
        myAsset: 0,
        myCoin: 0,
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
                const currentCash = data.cash;
                const currentAsset = data.asset;
                const currentCoin = data.coinVol;
                setWallet({
                    myCash: currentCash,
                    myAsset: currentAsset,
                    myCoin: currentCoin,
                });
            });
        }
    }, [isInit]);

    useEffect(() => {
        setSellStatus(null);
    }, [sellStatus]);

    useEffect(() => {
        setBuyStatus(null);
    }, [buyStatus]);

    function VolumeUp(volume) {
        // if (
        //     volume + Math.floor((myWallet.myCash / currentBid) * 0.1) >
        //     Math.floor(myWallet.myCash / currentBid)
        // )
        //     return;
        SetNewVolume(volume + Math.floor((myWallet.myCash / currentBid) * 0.1));
    }
    function VolumeDown(volume) {
        console.log('hi');
        if (volume - Math.floor((myWallet.myCash / currentBid) * 0.1) <= 0) {
            console.log(
                'setVolunme:',
                volume - Math.floor((myWallet.myCash / currentBid) * 0.1)
            );
            SetNewVolume(1);
            return;
        }
        SetNewVolume(volume - Math.floor((myWallet.myCash / currentBid) * 0.1));
    }
    function BidUp() {
        SetBid(Number(currentBid) + Number(unitBid));
    }
    function BidDown() {
        SetBid(Number(currentBid) - Number(unitBid));
    }

    function RefreshBid() {
        props.socket.once('chart', (data) => {
            SetUnit(data.priceUnit);
            SetBid(data.curPrice);
            //SetVolume(1);
        });
    }

    function Buy(bid, volume) {
        let status = '';
        if (bid <= 0 || volume <= 0) {
            return {
                status: 'invalid',
                val: bid,
                vol: volume,
            };
        }
        if (bid * volume > myWallet.myCash) {
            // SnackAlertFunc({
            //     severity:"error",
            //     message:"호가 및 수량이 부적절합니다. (ex. '0') 😱"
            // })
            props.socket.once('buyDone', (bbid) => {
                SetNewBid(bbid.price);
            });
            return {
                status: 'lack',
                val: bid,
                vol: volume,
            };
        }
        //@ Buy Emit
        // console.log(
        //     '[ 가격',
        //     bid,
        //     ', 갯수',
        //     volume,
        //     '] 매수 주문을 요청합니다.'
        // );
        status = {
            status: 'request',
            val: bid,
            vol: volume,
        };
        props.socket.emit('buy_Req', {
            //@ reqJson.json 형식확인
            roomID: props.roomID,
            socketID: props.socket.id,
            currentBid: bid,
            currentVolume: volume,
        });
        props.socket.once('buyDone', (bbid) => {
            SetNewBid(bbid.price);
            setBuyStatus({
                status: 'done',
                val: bid,
                vol: volume,
            });
        });
        SetBind(true);
        return status;
    }

    function Sell(bid, volume) {
        let status = '';
        if (bid <= 0 || volume <= 0) {
            return {
                status: 'invalid',
                val: bid,
                vol: volume,
            };
        }
        if (myWallet.myCoin < volume) {
            props.socket.once('sellDone', (bbid) => {
                SetNewBid(bbid.price);
            });
            return {
                status: 'lack',
                val: bid,
                vol: volume,
            };
        }
        //@ Sell Emit
        // console.log(
        //     '[ 가격',
        //     bid,
        //     ', 갯수',
        //     volume,
        //     '] 매도 주문을 요청합니다.'
        // );
        status = {
            status: 'request',
            val: bid,
            vol: volume,
        };
        props.socket.emit('sell_Req', {
            roomID: props.roomID,
            socketID: props.socket.id,
            currentBid: bid,
            currentVolume: volume,
        });
        //@ 중복 문제가 발생한다.
        props.socket.once('sellDone', (sbid) => {
            SetNewBid(sbid.price);
            setSellStatus({
                status: 'done',
                val: bid,
                vol: volume,
            });
        });
        SetBind(true);
        return status;
    }

    const interval = 0.2;
    let cTime, pTime;
    // function HandleKeyDown(e) {
    //     if (e.keyCode === 123 || e.keyCode === 27 || e.keyCode === 13) return; //_ 'F12' || 'esc' || 'enter'
    //     e.preventDefault();
    //     if (e.keyCode === 37) {
    //         //_ LEFT ARROW
    //         playSound(HatUp, 1).play();
    //         if (props.socket == null || isBind === false) {
    //             props.requestSocket('TradeStock', props.socket);
    //             return;
    //         }
    //         VolumeDown(currentVolume);
    //     } else if (e.keyCode === 39) {
    //         //_ RIGHT ARROW
    //         playSound(HatDown, 1).play();
    //         if (props.socket == null || isBind === false) {
    //             props.requestSocket('TradeStock', props.socket);
    //             return;
    //         }
    //         VolumeUp(currentVolume);
    //     }
    // }
    function HandleKeyUp(e) {
        if (props.inputCtrl) return;
        if (e.keyCode === 123 || e.keyCode === 27 || e.keyCode === 13) return; //_ 'F12' || 'esc' || 'enter'
        e.preventDefault();
        if (props.socket == null || isBind === false) {
            props.requestSocket('TradeStock', props.socket);
            return;
        }
        if (e.keyCode === 37) {
            //_ LEFT ARROW
            playSound(HatUp, 1).play();
            VolumeDown(currentVolume);
        } else if (e.keyCode === 39) {
            //_ RIGHT ARROW
            playSound(HatDown, 1).play();
            VolumeUp(currentVolume);
        } else if (e.keyCode === 38) {
            //_ UP ARROW
            playSound(HatUp, 1).play();
            BidUp();
        } else if (e.keyCode === 40) {
            //_ DOWN ARROW
            playSound(HatDown, 1).play();
            BidDown();
        } else if (e.keyCode === 65) {
            //_ 'A'
            playSound(DrumUp, 1).play();
            setBuyStatus(Buy(currentBid, currentVolume));
        } else if (e.keyCode === 83) {
            //_ 'S'
            playSound(DrumDown, 1).play();
            setSellStatus(Sell(currentBid, currentVolume));
        } else if (e.keyCode === 68) {
            //_ 'D'
            playSound(DrumDown, 1).play();
            RefreshBid();
        } else if (e.keyCode === 90) {
            //_ 'Z'
            playSound(DrumDown, 1).play();
            SetSellMaxCount();
        } else if (e.keyCode === 88) {
            //_ 'X'
            playSound(DrumDown, 1).play();
            SetBuyMaxCount();
        }
    }

    useEffect(() => {
        RefreshBid();
    }, []);

    useEffect(() => {
        if (isFocus === true) {
            console.log('keydown event not working now!');
            return;
        }
        document.addEventListener('keyup', HandleKeyUp);
        // document.addEventListener('keydown', HandleKeyDown);
        return () => {
            document.removeEventListener('keyup', HandleKeyUp);
            // document.removeEventListener('keydown', HandleKeyDown);
        };
    });

    //@ socket을 통해 정보가 변했음을 알고 render이전에 호가를 갱신해야할 필요가 있다.
    useEffect(() => {
        const responseBid = newBid;
        SetBid(responseBid);
    }, [newBid]); //@ 호가가 변할때이다.

    useEffect(() => {
        const responseVolume = newVolume;
        SetVolume(responseVolume);
        return () => {};
    }, [newVolume]);

    function handleVolumeChange(e) {
        if (e.target.id === 'outlined-required') {
            SetVolume(e.target.value);
            SetFocus(true);
        }
    }
    function handleBidChange(e) {
        if (e.target.id === 'outlined-required') {
            SetBid(e.target.value);
            SetFocus(true);
        }
    }

    let costColor = {
        color:
            myWallet.myCash >= currentBid * currentVolume
                ? grey[700]
                : red[200],
    };

    function SetSellMaxCount() {
        SetVolume(Math.floor(myWallet.myCash / currentBid));
    }

    function SetBuyMaxCount() {
        SetVolume(myWallet.myCoin);
    }

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
            <SnackbarProvider maxSnack={7}>
                {buyStatus && buyStatus.status === 'lack' && (
                    <SnackAlertFunc
                        severity="warning"
                        message="보유 금액이 부족해요 😨"
                    />
                )}
                {buyStatus && buyStatus.status === 'invalid' && (
                    <SnackAlertFunc
                        severity="error"
                        message="유효하지 않은 값입니다."
                    />
                )}
                {buyStatus && buyStatus.status === 'request' && (
                    <SnackAlertFunc
                        severity="info"
                        message={
                            buyStatus.val +
                            ' 호가에 ' +
                            buyStatus.vol +
                            '개 [매수] 주문했어요! 📈'
                        }
                    />
                )}
                {buyStatus && buyStatus.status === 'done' && (
                    <SnackAlertFunc
                        severity="success"
                        message={
                            buyStatus.val +
                            ',' +
                            buyStatus.vol +
                            ' [매수] 주문이 체결되었어요! 🎁'
                        }
                    />
                )}
                {sellStatus && sellStatus.status === 'lack' && (
                    <SnackAlertFunc
                        severity="warning"
                        message="코인이 없는걸요? 😨"
                    />
                )}
                {sellStatus && sellStatus.status === 'invalid' && (
                    <SnackAlertFunc
                        severity="error"
                        message="유효하지 않은 값입니다."
                    />
                )}
                {sellStatus && sellStatus.status === 'request' && (
                    <SnackAlertFunc
                        severity="info"
                        message={
                            sellStatus.val +
                            ' 호가에 ' +
                            sellStatus.vol +
                            '개 [매도] 주문했어요! 📉'
                        }
                    />
                )}
                {sellStatus && sellStatus.status === 'done' && (
                    <SnackAlertFunc
                        severity="success"
                        message={
                            sellStatus.val +
                            ',' +
                            sellStatus.vol +
                            ' [매도] 주문이 체결되었어요! 💸'
                        }
                    />
                )}
            </SnackbarProvider>
            <Grid
                wrap="wrap"
                className={classes.paper}
                alignItems="stretch"
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ height: '100%' }}
            >
                <Grid container item justify="center">
                    <TextField
                        className="buysell"
                        id="outlined-required"
                        label="매매 호가 ▲▼"
                        size="small"
                        type="number"
                        style={{ width: '80%' }}
                        value={currentBid}
                        onChange={handleBidChange}
                    />
                    <ArrowButton
                        upEvent={() => BidUp(currentBid)}
                        downEvent={() => BidDown(currentBid)}
                    />
                </Grid>
                <Grid container item justify="center">
                    <TextField
                        className="count"
                        id="outlined-required"
                        label="수량 ◀▶"
                        type="number"
                        size="small"
                        style={{ width: '80%' }}
                        value={currentVolume}
                        onChange={handleVolumeChange}
                    />
                    <ArrowButton
                        upEvent={() => VolumeUp(currentVolume)}
                        downEvent={() => VolumeDown(currentVolume)}
                    />
                </Grid>
                <Grid container item justify="center" alignItems="start">
                    예상소요금액 :{' '}
                    <span style={costColor}>
                        {ExpBySymbol(parseWonToStr(currentVolume * currentBid))}
                    </span>
                </Grid>
                <Grid
                    container
                    item
                    justify="center"
                    style={{ width: '80%', margin: '0 10 0 1' }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                            setBuyStatus(Buy(currentBid, currentVolume));
                        }}
                    >
                        [A] 매수 확정
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setSellStatus(Sell(currentBid, currentVolume));
                        }}
                    >
                        {/* <KeyboardArrowRightIcon /> */}
                        [S] 매도 확정
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => RefreshBid()}
                    >
                        {/* <KeyboardArrowRightIcon /> */}
                        [D] 현재가 설정🔄
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => SetSellMaxCount()}
                    >
                        {/* <KeyboardArrowRightIcon /> */}
                        [Z] 최대 구매량 설정 📈
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => SetBuyMaxCount()}
                    >
                        {/* <KeyboardArrowRightIcon /> */}
                        [X] 최대 매도량 설정 📉
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
