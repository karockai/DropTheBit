import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TradeStock from './TradeStock';
import MyAsset from './MyAsset';
import BidTab from './bidTab';
import ChatRoom from './ChatRoom';
import PlayerList from './PlayerList';
import ChartComponent from './ChartComponent';
import ChartTitle from './ChartTitle';
import { useSound, playSound, getDuration } from './useSound';
import King_Conga from './audios/music/King_Conga.mp3';
import Mausoleum_Mash from './audios/music/Mausoleum_Mash.mp3';
import Deja_Vu from './audios/music/Deja_Vu.mp3';
import GameOverModal from './GameOverModal';
import StockDoneList from './StockDoneList';
import { red } from '@material-ui/core/colors';
// import ThreeSecTimer from './ThreeSecTimer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

export default function LayoutGrid(props) {
    const classes = useStyles();
    let testXs = 12;
    let leftSm = 2;
    let middleSm = 7;
    let rightSm = 3;
    
    const musicList = {
        Deja_Vu : Deja_Vu,
        King_Conga: King_Conga,
        Mausoleum_Mash :Mausoleum_Mash,
    };

    const SpecificMusic = musicList[props.roomInfo['music'].split('.')[0]];
    useSound(SpecificMusic, 0.7, 2000);


    useEffect(() => {
        console.log('layoutGrid rendered....!');
    })

    useEffect(() => {
        props.socket.on('gameOver', (readerBoard) => {
            if (readerBoard) {
                GameOver(readerBoard);
            }
        });
    }, []);

    const GameOver = (readerBoard) => {
        // modal 띄울 함수 호출

        return (
            <>
                <GameOverModal />
            </>
        );
    };

    const [APIdata, setAPI] = useState(null);
    let setCurrentAPIData = (data) => {
        setAPI(data);
    } 
    let getCurrentAPIData = () => {
        return APIdata;
    }

    return (
        <React.Fragment >
            <CssBaseline />
            <Container  maxWidth="lg">
                <Typography component="div" style={{ padding: '0 0 0 0' }}>
                    <Grid
                        style={{ height: '100vh' }}
                        wrap="wrap"
                        container
                        direction="row"
                        justify="center"
                        alignItems="stretch"
                        spacing={1}
                    >
                        <Grid className="playerListGrid" item xs={leftSm}>
                            {/* <Paper style={{ height: "100%" }} className={classes.paper}> */}
                            <PlayerList
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                                roomID={props.roomID}
                                roomInfo={props.roomInfo}
                            />
                            {/* </Paper> */}
                        </Grid>
                        <Grid
                            className="stockTradeGrid"
                            container
                            item
                            xs={middleSm}
                            wrap="wrap"
                            alignContents="stretch"
                        >
                            <Grid
                                style={{ height: '90vh' }}
                                item
                                wrap="wrap"
                                alignContents="stretch"
                                alignItems="stretch"
                                container
                                direction="column"
                                justify="center"
                                spacing={1}
                            >
                                <Grid
                                    style={{ height: '45vh' }}
                                    item
                                    alignItems="stretch"
                                >
                                    <Paper
                                        style={{ height: '44vh' }}
                                        className={classes.paper}
                                    >
                                        <ChartComponent
                                            socket={props.socket}
                                            requestSocket={props.requestSocket}
                                            setAPIData={setCurrentAPIData}
                                            APIdata={APIdata}
                                            display="flex"
                                            justify-content="center"
                                            align-items="center"
                                            time={props.time}
                                        />
                                    </Paper>
                                </Grid>
                                <Grid style={{ height: '18vh' }}>
                                    <Grid
                                        style={{ height: '100%' }}
                                        wrap="wrap"
                                        alignItems="stretch"
                                        container
                                        direction="row"
                                        justify="space-around"
                                    >
                                        <Grid
                                            style={{
                                                width: '45%',
                                                height: '100%',
                                            }}
                                            item
                                        >
                                            <Paper
                                                style={{ height: '17vh' }}
                                                className={classes.paper}
                                            >
                                                <StockDoneList socket={props.socket} requestSocket = {props.requestSocket} isMine = {true}/>
                                            </Paper>
                                        </Grid>
                                        <Grid
                                            style={{
                                                width: '55%',
                                                height: '100%',
                                            }}
                                            item
                                        >
                                            <Paper
                                                style={{ height: '17vh' }}
                                                className={classes.paper}
                                            >
                                                <StockDoneList socket={props.socket} requestSocket = {props.requestSocket} isMine = {false}/>
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid style={{ height: '27vh' }} item>
                                    <Grid
                                        style={{ height: '100%' }}
                                        wrap="wrap"
                                        alignItems="stretch"
                                        container
                                        direction="row"
                                        justify="space-around"
                                    >
                                        <Grid
                                            style={{
                                                width: '45%',
                                                height: '22vh',
                                            }}
                                            item
                                        >
                                            {/* <Paper style={{ height: "100%" }} > */}
                                            <MyAsset
                                                roomID={props.roomID}
                                                socket={props.socket}
                                                requestSocket={
                                                    props.requestSocket
                                                }
                                            />
                                            {/* </Paper> */}
                                        </Grid>
                                        <Grid
                                            style={{
                                                width: '50%',
                                                height: '22vh',
                                                margin: '0 0 0 0',
                                            }}
                                            item
                                        >
                                            <Paper
                                                style={{ height: '100%' }}
                                                className={classes.paper}
                                            >
                                                <TradeStock
                                                    roomID={props.roomID}
                                                    APIdata={APIdata}
                                                    socket={props.socket}
                                                    requestSocket={
                                                        props.requestSocket
                                                    }
                                                />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="bidChatGrid" item xs={rightSm}>
                            <Grid
                                style={{ height: '90vh' }}
                                wrap="wrap"
                                alignItems="stretch"
                                container
                                direction="column"
                                justify="center"
                                spacing={2}
                            >
                                <Grid
                                    style={{ height: '45vh' }}
                                    item
                                    alignItems="stretch"
                                >
                                    <Paper
                                        style={{ height: '44vh' }}
                                        className={classes.paper}
                                    >
                                        <BidTab
                                            socket={props.socket}
                                            requestSocket={props.requestSocket}
                                        />
                                    </Paper>
                                </Grid>
                                <Grid style={{ height: '45vh' }} item>
                                    <Paper
                                        style={{ height: '40vh' }}
                                        className={classes.paper}
                                    >
                                        <ChatRoom
                                            roomInfo={props.roomInfo}
                                            roomID={props.roomID}
                                            socket={props.socket}
                                            chat={props.chat}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
