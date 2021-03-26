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

    const [currentBid, SetBid] = useState(1);
    const [newBid, SetNewBid] = useState(1); //props.APIdata.curPrice
    const [currentVolume, SetVolume] = useState(0);
    const [newVolume, SetNewVolume] = useState(0);
    const [unitBid, SetUnit] = useState(0); // props.APIdata.priceUnit
    const [isBind, SetBind] = useState(false);
    const [isFocus, SetFocus] = useState(false);
    if(!isBind) SetBind(true);
    function VolumeUp(volume) {
        SetNewVolume(volume + 1);
    }
    function VolumeDown(volume) {
        if (volume <= 0) return;
        SetNewVolume(volume - 1);
    }
    function BidUp() {
        SetBid(currentBid + unitBid);
    }
    function BidDown() {
        SetBid(currentBid - unitBid);
    }

    function RefreshBid() {
        props.socket.emit('refresh_bid' , "호가랑 호가단위를 받고 싶어요.")
        props.socket.once('refresh_bid', (data)=> {
            SetBid(data.bid)
            SetUnit(data.unit)
        }); 
    }

    function Buy(bid, volume) {
        if (bid === 0 || volume === 0) {
            alert('호가 및 수량이 부적절합니다. (ex. "0")');
            return;
        }
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
        if (bid === 0 || volume === 0) {
            alert('호가 및 수량이 부적절합니다. (ex. "0")');
            return;
        }
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
        if (e.keyCode === 123 || e.keyCode === 27 || e.keyCode === 13) return; //_ 'F12' || 'esc' || 'enter'
        e.preventDefault();
        if (e.keyCode === 37) {
            //_ LEFT ARROW
            playSound(HatUp, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            VolumeDown(currentVolume);
        } else if (e.keyCode === 39) {
            //_ RIGHT ARROW
            playSound(HatDown, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            VolumeUp(currentVolume);
        }

        else if (e.keyCode === 38) {
            //_ UP ARROW
            playSound(HatUp, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            BidUp();
        } else if (e.keyCode === 40) {
            //_ DOWN ARROW
            playSound(HatDown, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            BidDown();
        } else if (e.keyCode === 65) {
            //_ 'A'
            playSound(DrumUp, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            Buy(currentBid, currentVolume);
        } else if (e.keyCode === 83) {
            //_ 'S'
            playSound(DrumDown, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            Sell(currentBid, currentVolume);
        } else if (e.keyCode === 68) {
            //_ 'D'
            playSound(DrumDown, 1).play();
            if (props.socket == null || isBind === false) {
                props.requestSocket('TradeStock', props.socket);
                return;
            }
            RefreshBid();
        }


    }

    useEffect(() => {
        // SetBid(props.APIdata.curPrice);
        // SetRatio(props.APIdata.priceUnit);
    }, [])

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
            <Grid item  justify="center"  style={{ width: '80%', margin: '0 10 0 1' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => Buy(currentBid, currentVolume)}
                >
                    {/* <KeyboardArrowLeftIcon /> */}
                    <>"A" </>
                    매수
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => Sell(currentBid, currentVolume)}
                >
                    {/* <KeyboardArrowRightIcon /> */}
                    <>"S" </>
                    매도
                </Button>
                <Button
                    variant="contained"
                    color="info"
                    onClick={() => RefreshBid()}
                >
                    {/* <KeyboardArrowRightIcon /> */}
                    <>"D" 🔄</>
                </Button>
            </Grid>
        </Grid>
    );
}
