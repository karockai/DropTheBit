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
        console.log(props);
        //@ Buy Emit
        console.log(
            '[ 가격',
            bid,
            ', 갯수',
            volume,
            '] 매수 주문이 체결되었습니다.'
        );
        props.socket.emit('buy_Req', {
            //@ reqJson.json 형식확인
            roomID: props.roomID,
            socketID: props.socket.id,
            currentBid: bid,
            currentVolume: volume,
        });
        props.socket.on('buy_Res', (bbid) => {
            console.log(bbid.curPrice);
            SetNewBid(bbid.curPrice);
            console.log('구매하고 매매 호가', bbid);
        });
    }
    function Sell(bid, volume) {
        //@ Sell Emit
        console.log(props);
        console.log(
            '[ 가격',
            bid,
            ', 갯수',
            volume,
            '] 매도 주문이 체결되었습니다.'
        );
        props.socket.emit('sell_Req', {
            roomID: props.roomID,
            socketID: props.socket.id,
            currentBid: bid,
            currentVolume: volume,
        });
        //@ 중복 문제가 발생한다.
        props.socket.on('sell_Req', (sbid) => {
            SetNewBid(sbid);
            console.log('판매하고 호가 갱신', sbid);
        });
    }

    function HandleKeyPress(e) {
        if (e.keyCode == 123) return; //_ 'F12' 개발자도구 ㅋ
        e.preventDefault();
        if (e.keyCode == 37) {
            //_ LEFT ARROW
            console.log(props);
            console.log('KeyCode > LEFT.');
            playSound(DrumUp, 1).play();
            if (props.socket == null || isBind == false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            Buy(currentBid, currentVolume);
        } else if (e.keyCode == 39) {
            //_ RIGHT ARROW
            console.log(props);
            console.log('KeyCode > RIGHT.');
            playSound(Drum, 1).play();
            if (props.socket == null || isBind == false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            Sell(currentBid, currentVolume);
        }

        if (e.keyCode === 38) {
            //_ UP ARROW
            console.log('KeyCode > UP.');
            playSound(Drum, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            VolumeUp(currentVolume);
        } else if (e.keyCode === 40) {
            //_ DOWN ARROW
            console.log('KeyCode > DOWN.');
            playSound(Drum, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            VolumeDown(currentVolume);
        }
    }

    useLayoutEffect(() => {
        document.addEventListener('keydown', HandleKeyPress);
        return () => {
            document.removeEventListener('keydown', HandleKeyPress);
        };
    }, [currentVolume, currentBid, isBind]);

    //@ socket을 통해 정보가 변했음을 알고 render이전에 호가를 갱신해야할 필요가 있다.
    useLayoutEffect(() => {
        const responseBid = newBid;
        console.log('responseBid', responseBid);
        SetBid(responseBid);
    }, [newBid]); //@ 호가가 변할때이다.

    useLayoutEffect(() => {
        const responseVolume = newVolume;
        console.log('responseVolume', responseVolume);
        SetVolume(responseVolume);
        return () => {};
    }, [newVolume]);

    let testXs = 12;
    return (
        <Grid
            wrap="wrap"
            className={classes.paper}
            alignItems="stretch"
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ height: '100%' }}
        >
            <Grid container direction="row" justify="center">
                <TextField
                    TextField
                    id="outlined-required"
                    label="매매 호가"
                    size="small"
                    style={{ width: '80%' }}
                    value={currentBid}
                />
                <ArrowButton
                    upEvent={() => BidUp(currentBid)}
                    downEvent={() => BidDown(currentBid)}
                />
            </Grid>
            <Grid container direction="row" justify="center">
                <TextField
                    id="outlined-required"
                    label="수량"
                    size="small"
                    style={{ width: '80%' }}
                    value={currentVolume}
                />
                <ArrowButton
                    upEvent={() => VolumeUp(currentVolume)}
                    downEvent={() => VolumeDown(currentVolume)}
                />
            </Grid>
            <Grid className={classes.button} style={{ width: '80%' }}>
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
