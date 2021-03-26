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

export default function TradeStock(props) {
    const classes = useStyles();

    const [currentBid, SetBid] = useState(46000);
    const [newBid, SetNewBid] = useState(46000);
    const [currentVolume, SetVolume] = useState(1);
    const [newVolume, SetNewVolume] = useState(1);
    const [ratioBid, SetRatio] = useState(100);
    const [isBind, SetBind] = useState(false);
    const [isFocus, SetFocus] = useState(false);

    if(!isBind) SetBind(true);
    function VolumeUp(volume) {
        SetNewVolume(volume + 1);
    }
    function VolumeDown(volume) {
        if (volume === 0) return;
        SetNewVolume(volume - 1);
    }
    function BidUp() {
        SetBid(currentBid + ratioBid);
    }
    function BidDown() {
        SetBid(currentBid - ratioBid);
    }
    function Buy(bid, volume) {
        //@ Buy Emit
        console.log(
            '[ 가격',
            bid,
            ', 갯수',
            volume,
            '] 매수 주문을 요청합니다.'
        );
        props.socket.emit('buy_Req', {
            //@ reqJson.json 형식확인
            roomID: props.roomID,
            socketID: props.socket.id,
            currentBid: bid,
            currentVolume: volume,
        });
        props.socket.once('buyDone', (bbid) => {
            SetNewBid(bbid.price);
        });
    }
    function Sell(bid, volume) {
        //@ Sell Emit
        console.log(
            '[ 가격',
            bid,
            ', 갯수',
            volume,
            '] 매도 주문을 요청합니다.'
        );
        props.socket.emit('sell_Req', {
            roomID: props.roomID,
            socketID: props.socket.id,
            currentBid: bid,
            currentVolume: volume,
        });
        //@ 중복 문제가 발생한다.
        props.socket.once('sellDone', (sbid) => {
            SetNewBid(sbid.price);
        });
    }

    function HandleKeyPress(e) {
        if (e.keyCode === 123) return; //_ 'F12' 개발자도구 ㅋ
        e.preventDefault();
        if (e.keyCode === 37) {
            //_ LEFT ARROW
            playSound(DrumUp, 1).play();
            if (props.socket == null || isBind == false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            Buy(currentBid, currentVolume);
        } else if (e.keyCode === 39) {
            //_ RIGHT ARROW
            playSound(DrumDown, 1).play();
            if (props.socket == null || isBind == false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            Sell(currentBid, currentVolume);
        }

        if (e.keyCode === 38) {
            //_ UP ARROW
            playSound(HatUp, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            VolumeUp(currentVolume);
        } else if (e.keyCode === 40) {
            //_ DOWN ARROW
            playSound(HatDown, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            VolumeDown(currentVolume);
        }
    }

    useEffect(() => {
        if(isFocus === true) {
            console.log('keydown event not working now!')
            return ;
        }
        document.addEventListener('keyup', HandleKeyPress);
        return () => {
            document.removeEventListener('keyup', HandleKeyPress);
        };
    }, [currentVolume, currentBid, isBind, isFocus]);

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

    function handleVolumeChange (e) {
        if(e.target.id === "outlined-required") {
            SetVolume(e.target.value);
            SetFocus(true);
        }
    }
    function handleBidChange (e) {
        if(e.target.id === "outlined-required"){
            SetBid(e.target.value);
            SetFocus(true);
        }
    }

    return (
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
                    label="매매 호가"
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
            <Grid container item  justify="center">
                <TextField
                    className="count"
                    id="outlined-required"
                    label="수량"
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
            <Grid item  justify="center" className={classes.button} style={{ width: '80%' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => Buy(currentBid, currentVolume)}
                >
                    <KeyboardArrowLeftIcon />
                    매수
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => Sell(currentBid, currentVolume)}
                >
                    <KeyboardArrowRightIcon />
                    매도
                </Button>
            </Grid>
        </Grid>
    );
}
