import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
    IconButton,
    Button,
    TextField,
    Grid,
    Paper,
    makeStyles,
    withStyles,
} from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { grey, red } from '@material-ui/core/colors';
import { SnackAlertFunc } from './SnackAlert';
import { SnackbarProvider } from 'notistack';
// import {YellowShiningButton} from './ShiningButton';
import './ShiningButton.css';

// 음악
// Effect

import Buy100 from './audios/effect/Buy100.wav';
import BuyConfirm from './audios/effect/BuyConfirm.wav';
import BuyDone from './audios/effect/BuyDone.wav';

import Check from './audios/effect/Check.mp3';
import CurPrice from './audios/effect/CurPrice.wav';
import Enter from './audios/effect/Enter.wav';
import Error_Sound from './audios/effect/Error.mp3';
import ExEnroll from './audios/effect/ExEnroll.wav';

import Nope from './audios/effect/Nope.mp3';
import PriceDown from './audios/effect/PriceDown.wav';
import PriceUp from './audios/effect/PriceUp.wav';
import Result from './audios/effect/Result.mp3';
import Sell0 from './audios/effect/Sell0.wav';
import Sell50 from './audios/effect/Sell50.wav';
import Sell100 from './audios/effect/Sell100.wav';
import SellConfirm from './audios/effect/SellConfirm.wav';
import SellDone from './audios/effect/SellDone.wav';
import VolDown from './audios/effect/VolDown.wav';
import VolUp from './audios/effect/VolUp.wav';

// Module

// 음악

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#CDD7E0',
        },
        '& .MuiInputLabel-root': {
            color: '#CDD7E0',
        },
        '& .MuiInputBase-input': {
            color: '#CDD7E0',
            fontFamily: 'NEXON Lv1 Gothic OTF',
            fontSize: '2.5vw',
        },

        //   '& .MuiInput-underline:after': {
        //     borderBottomColor: 'white',
        //   },
        //   '& .MuiInput-underline:before': {
        //     borderBottomColor: 'white',
        //   },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    // button: {
    //     '& > *': {
    //         width: '42%',
    //         // textAlign: 'center',
    //         margin: theme.spacing(1),
    //     },
    // },
    paper: {
        // padding: theme.spacing(1),
        // textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },

    input: {
        // textAlign: 'left',
        color: '#CDD7E0',
    },

    // button_block: {
    //     width: '1vh',
    //     margin: '0 0 0.5vh 0',
    // },
    small_text: {
        margin: '0 0.5vw -0.5vh 0.5vw',
        fontSize: '1vw',
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
                className={classes.button_block}
                size="small"
                onClick={props.upEvent}
            >
                <ArrowDropUpIcon />
            </IconButton>
            <IconButton
                aria-label="delete"
                className={classes.button_block}
                size="small"
                onClick={props.downEvent}
            >
                <ArrowDropDownIcon />
            </IconButton>
        </Grid>
    );
}

let startTime = null;

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
    const [myWallet, setWallet] = useState({
        myCash: 0,
        myAsset: 0,
        myCoin: 0,
    });
    const [isInit, setInit] = useState(false);

    if (!isBind) SetBind(true);
    if (!isInit) setInit(true);
    //@ 가정 => props에 socket이 전달되었어야함.
    useLayoutEffect(() => {
        startTime = new Date();
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

    function VolumeUp(volume) {
        // if (
        //     volume + Math.floor((myWallet.myCash / currentBid) * 0.1) >
        //     Math.floor(myWallet.myCash / currentBid)
        // )
        //     return;
        SetNewVolume(volume + Math.floor((myWallet.myCash / currentBid) * 0.1));
    }
    function VolumeDown(volume) {
        if (volume - Math.floor((myWallet.myCash / currentBid) * 0.1) <= 0) {
            SetNewVolume(1);
            return;
        }
        SetNewVolume(
            volume - Math.floor((myWallet.myCash / currentBid) * 0.1 + 1)
        );
    }
    function BidUp() {
        console.log('hi');
        SetBid(Number(currentBid) + Number(unitBid));
    }
    function BidDown() {
        SetBid(Number(currentBid) - Number(unitBid));
    }

    function RefreshBid_Req() {
        props.socket.emit('RefreshBid_Req', '예은아 부탁해');
        props.socket.once('RefreshBid_Res', (curPrice) => {
            console.log('RefreshBid_Req');
            SetBid(curPrice);
        });
    }

    // function RefreshBid_Res() {
    //     props.socket.once('RefreshBid_Res', (curPrice) => {
    //         SetBid(curPrice);
    //     });
    // }

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
            console.log(bbid);
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
            console.log(sbid);
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

    function HandleKeyUp(e) {
        if (props.inputCtrl) return;
        if (e.keyCode === 123 || e.keyCode === 27 || e.keyCode === 13) return; //_ 'F12' || 'esc' || 'enter'
        e.preventDefault();
        if (props.socket == null || isBind === false) {
            props.requestSocket('TradeStock', props.socket);
            return;
        }
        if(e.keyCode === 32) {
            new Audio(CurPrice).play();
            RefreshBid_Req(); 
        }   
        else if (e.keyCode === 37) {
            //_ LEFT ARROW
            new Audio(VolDown).play();
            VolumeDown(currentVolume);
        } else if (e.keyCode === 39) {
            //_ RIGHT ARROW
            new Audio(VolUp).play();
            VolumeUp(currentVolume);
        } else if (e.keyCode === 38) {
            //_ UP ARROW
            new Audio(PriceUp).play();
            BidUp();

            // console.log(e.key);
            // const key = document.getElementById(e.key);
            // if (key) key.classList.add("pressed");
        } else if (e.keyCode === 40) {
            //_ DOWN ARROW
            new Audio(PriceDown).play();
            BidDown();
        } else if (e.keyCode === 65) {
            //_ 'A' :
            new Audio(Buy100).play();
            SetBuyMaxCount();
        } else if (e.keyCode === 83) {
            //_ 'S'
            new Audio(Sell100).play();
            SetSellMaxCount();
        } else if (e.keyCode === 90) {
            //_ 'Z'
            new Audio(Check).play();
            setBuyStatus(Buy(currentBid, currentVolume));
        } else if (e.keyCode === 88) {
            //_ 'X'
            new Audio(Check).play();
            setSellStatus(Sell(currentBid, currentVolume));
        }
        console.log(e);
        const key = document.getElementById(e.key);
        // console.log(key);
        if (key) key.classList.add('pressed');
        console.log(key);
    }
    
    function HandleKeyDown(e) {
        if (props.inputCtrl) return;
        if (e.keyCode === 123 || e.keyCode === 27 || e.keyCode === 13) return; //_ 'F12' || 'esc' || 'enter'
        e.preventDefault();
        if (props.socket == null || isBind === false) {
            props.requestSocket('TradeStock', props.socket);
            return;
        }
        
        const key = document.getElementById(e.key);
        if (key) key.classList.remove("pressed");
        console.log(key);
    }

    useEffect(() => {
        props.socket.once('chart', (data) => {
            // coinName 추가
            SetUnit(data.priceUnit);
            SetBid(data.curPrice);
        });
    }, []);

    useEffect(() => {
        if (isFocus === true) {
            console.log('keydown event not working now!');
            return;
        }
        document.addEventListener('keyup', HandleKeyUp);
        document.addEventListener('keydown', HandleKeyDown);
        return () => {
            document.removeEventListener('keyup', HandleKeyUp);
            document.removeEventListener('keydown', HandleKeyDown);
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

    useEffect(() => {
        console.log(sellStatus, 'sellStatus');
        if (sellStatus !== null) setSellStatus(null);
    }, [sellStatus]);

    useEffect(() => {
        console.log(buyStatus, 'buy');
        if (buyStatus !== null) setBuyStatus(null);
    }, [buyStatus]);

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
        SetVolume(myWallet.myCoin);
    }

    function SetBuyMaxCount() {
        SetVolume(Math.floor(myWallet.myCash / currentBid));
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

    let dateString = new Date();
    dateString =
        '(' +
        dateString.getMinutes() +
        ':' +
        dateString.getSeconds() +
        '.' +
        dateString.getMilliseconds() +
        ') ';

    return (
        <>
            <SnackbarProvider maxSnack={15}>
                {buyStatus && buyStatus.status === 'lack' && (
                    <SnackAlertFunc
                        severity="warning"
                        message={dateString + ' 보유 금액이 부족해요 😨'}
                    />
                )}
                {buyStatus && buyStatus.status === 'invalid' && (
                    <SnackAlertFunc
                        severity="error"
                        message={dateString + ' 유효하지 않은 값입니다.'}
                    />
                )}
                {buyStatus && buyStatus.status === 'request' && (
                    <SnackAlertFunc
                        severity="info"
                        message={
                            dateString +
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
                            dateString +
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
                        message={dateString + '코인이 없는걸요? 😨'}
                    />
                )}
                {sellStatus && sellStatus.status === 'invalid' && (
                    <SnackAlertFunc
                        severity="error"
                        message={dateString + '유효하지 않은 값입니다.'}
                    />
                )}
                {sellStatus && sellStatus.status === 'request' && (
                    <SnackAlertFunc
                        severity="info"
                        message={
                            dateString +
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
                            dateString +
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
                direction="column"
                alignItems="flex-start"
                style={{ height: '100%', fontSize: '2vh' }}
            >
                <Grid container item direction="row" justify="space-between">
                    <span  className={classes.small_text}>매매호가</span>
                    {/* <span  className={classes.small_text}>현재가 [SPACE]</span> */}
                </Grid>
                <Grid
                    container
                    item
                    direction="row"
                    justify="space-between"
                    alignItems="flex-end"
                    style={{margin:'0 0 0.5vh 0'}}
                >
                    <Button
                        class="pulse"
                        onClick={() => {
                            new Audio(PriceUp).play();
                            BidUp();
                        }}
                        id="ArrowUp"
                    >
                        ▲
                    </Button>
                    <CssTextField
                        className={classes.input}
                        id="custom-css-standard-input"
                        // label="매매 호가 ▲ ▼"
                        size="small"
                        // type="number"
                        style={{ width: '50%' }}
                        value={currentBid}
                        onChange={handleBidChange}
                    />
                    <Button
                        class="pulse"
                        onClick={() => {
                            new Audio(PriceDown).play();
                            BidDown();
                        }}
                        id="ArrowDown"
                    >
                        ▼
                    </Button>
                </Grid>
                <span className={classes.small_text}>수량</span>
                <Grid
                    container
                    item
                    direction="row"
                    justify="space-between"
                    alignItems="flex-end"
                    style={{margin:'0 0 0.5vh 0'}}
                >
                    <Button
                        class="pulse"
                        onClick={() => {
                            new Audio(VolDown).play();
                            VolumeDown(currentVolume);
                        }}
                        id="ArrowLeft"
                    >
                        ◀
                    </Button>
                    <CssTextField
                        className="count"
                        id="outlined-required"
                        style={{ width: '50%', fontSize: 20 }}
                        value={currentVolume}
                        onChange={handleVolumeChange}
                    />
                    <Button
                        class="pulse"
                        onClick={() => {
                            new Audio(VolUp).play();
                            VolumeUp(currentVolume);
                        }}
                        id="ArrowRight"
                    >
                        ▶
                    </Button>
                </Grid>
                {/* <Grid container item justify="center" alignItems="start">
                    예상소요금액 :{' '}
                    <span style={costColor}>
                        {ExpBySymbol(parseWonToStr(currentVolume * currentBid))}
                    </span>
                </Grid> */}
                <Grid
                    container
                    item
                    direction={'column'}
                    justify="center"
                    style={{ width: '100%', margin: '0 10 0 1' }}
                >
                    <Grid
                        container
                        direction={'row'}
                        justify="space-between"
                        style={{ width: '100%', margin: '0 10 0 1' }}
                    >
                        <Button
                            style={{ width: '45%' }}
                            class="pulse"
                            onClick={() => {
                                new Audio(Buy100).play();
                                SetBuyMaxCount();
                                // setBuyStatus(Buy(currentBid, currentVolume));
                            }}
                            id="a"
                        >
                            [A] 매수 MAX
                        </Button>
                        <Button
                            style={{ width: '45%' }}
                            class="pulse"
                            onClick={() => {
                                new Audio(Sell100).play();
                                SetSellMaxCount();
                                // setSellStatus(Sell(currentBid, currentVolume));
                            }}
                            id="s"
                        >
                            {/* <KeyboardArrowRightIcon /> */}
                            [S] 매도 MAX
                        </Button>
                    </Grid>
                    <Grid
                        container
                        direction={'row'}
                        justify="space-between"
                        style={{ width: '100%', margin: '0 10 0 1' }}
                    >
                        <Button
                            style={{ width: '45%' }}
                            class="pulse"
                            onClick={() => {
                                new Audio(Check).play();
                                setBuyStatus(Buy(currentBid, currentVolume));
                            }}
                            id="z"
                        >
                            [Z] 매수
                        </Button>
                        <Button
                            style={{ width: '45%' }}
                            class="pulse"
                            onClick={() => {
                                new Audio(Check).play();
                                setSellStatus(Sell(currentBid, currentVolume));
                            }}
                            id="x"
                        >
                            {/* <KeyboardArrowRightIcon /> */}
                            [X] 매도
                        </Button>
                    </Grid>
                    <Grid
                        container
                        direction={'row'}
                        justify="space-between"
                        style={{ width: '100%', margin: '0 10 0 1' }}
                    >
                        <Button
                            style={{ width: '100%' }}
                            class="pulse"
                            onClick={() => {
                                new Audio(CurPrice).play();
                                RefreshBid_Req(); 
                            }}
                            id=" "
                        >
                            [SPACE] 현재가로 갱신
                        </Button>
                    </Grid>
                    {/* <Button
                        variant="contained"
                        color="info"
                        onClick={() => RefreshBid_Req()}
                    >
                        [D] 현재가 설정🔄
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => SetSellMaxCount()}
                    >
                        [Z] 최대 구매량 설정 📈
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => SetBuyMaxCount()}
                    >
                        [X] 최대 매도량 설정 📉
                    </Button> */}
                </Grid>
            </Grid>
        </>
    );
}
