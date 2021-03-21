import React,{ useEffect, useState, makeStyle} from 'react';
import {IconButton ,Button, TextField, Grid, Paper, makeStyles } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *':{
            width: '42%',
            // textAlign: 'center',
            margin: theme.spacing(1),
        }
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

    return(
        <Grid className={classes.button_block} display="flex" justify="center" style={{ height: "100%" }}>
            <IconButton aria-label="delete" className={classes.margin} size="small" onClick = {props.upEvent}>
            <ArrowDropUpIcon  />
            </IconButton>
            <IconButton aria-label="delete" className={classes.margin} size="small" onClick = {props.downEvent}>
            <ArrowDropDownIcon  />
            </IconButton>
        </Grid>
    );
}

export default function TradeStock(props) {
    const classes = useStyles();

    const [currentBid, SetBid] = useState(0);
    const [newBid, SetNewBid] = useState(0);
    const [currentVolume, SetVolume] = useState(1);
    const [ratioBid, SetRatio] = useState(100);

    function VolumeUp() {
        SetVolume(currentVolume + 1);
    }
    function VolumeDown() {
        SetVolume(currentVolume - 1);
    }
    function BidUp() {
        SetBid(currentBid + ratioBid);
    }
    function BidDown() {
        SetBid(currentBid - ratioBid);
    }
    function Buy() {
        //@ Buy Emit
        console.log('[ 가격', currentBid,', 갯수', currentVolume ,'] 매수 주문이 체결되었습니다.')
        props.socket.emit('buy', { //@ reqJson.json 형식확인
            roomID : 0,
            playerID : 0,
            currentBid : currentBid,
            currentVolume: currentVolume,
        });
        props.socket.on('buy',(bid) =>{
            SetNewBid(bid)
            console.log('구매하고 매매 호가', bid)
        });
    }
    function Sell() {
        //@ Sell Emit
        console.log('[ 가격', currentBid,', 갯수', currentVolume ,'] 매도 주문이 체결되었습니다.');
        props.socket.emit('sell', {
            roomID : 0,
            playerID : 0,
            currentBid : currentBid,
            currentVolume: currentVolume,
        });
        props.socket.on('sell',(bid) =>{
            SetNewBid(bid)
            console.log('판매하고 호가 갱신',bid)
        });
    }

    function HandleKeyPress(e) {
        if(e.keyCode == 123) return; //_ 'F12' 개발자도구 ㅋ
        e.preventDefault();
        if(e.keyCode == 37){ //_ LEFT ARROW
            console.log(props);
            console.log('KeyCode > LEFT.');
            if( props.socket == null ) return;
            Buy()
        }
        else if(e.keyCode == 39) { //_ RIGHT ARROW
            console.log(props);
            console.log('KeyCode > RIGHT.')
            if( props.socket == null ) return;
            Sell();
        }
    };
    useEffect(() => {
        document.addEventListener("keydown", HandleKeyPress);
        return () => {
            document.removeEventListener("keydown", HandleKeyPress);
        }
    },[])
    //@ socket을 통해 정보가 변했음을 알고 render이전에 호가를 갱신해야할 필요가 있다.
    useEffect(() => {
        const responseBid = newBid;
        console.log('responseBid', responseBid);
        SetBid(responseBid);
    },[newBid]); //@ 호가가 변할때이다.

    let testXs = 12;
    return(
        <Grid wrap="wrap" className={classes.paper} alignItems="stretch" container direction="column" justify="center" alignItems="center" style={{ height: "100%" }}>
            <Grid container direction="row"  justify="center">
              <TextField TextField  id="outlined-required" label="매매 호가" size="small" style={{width: "80%"}} value ={currentBid}/>
              <ArrowButton upEvent = {BidUp} downEvent = {BidDown}/>
            </Grid>
            <Grid container direction="row" justify="center">
                <TextField  id="outlined-required" label="수량" size="small" style={{width: "80%"}} value ={currentVolume}/>
                <ArrowButton upEvent = {VolumeUp} downEvent = {VolumeDown}/>
            </Grid>
            <Grid className={classes.button} style={{width: "80%",}}>
                <Button variant="contained" color="primary" onClick={Buy} >
                    매수
                </Button>
                <Button variant="contained" color="secondary" onClick={Sell} >
                    매도
                </Button>
            </Grid>
        </Grid>
    );
}