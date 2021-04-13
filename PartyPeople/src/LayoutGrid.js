import React, { useEffect, useState } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import TradeStock from './TradeStock';
import MyWallet from './MyWallet';
import MyRank from './MyRank';
import ChartComponent from './ChartComponent';
import GameOverModal from './GameOverModal';
import Result from './audios/effect/Result.mp3';

import RoomAction from './RoomAction';
import Timer from './Timer';

import RefreshGraph from './RefreshGraph';
import { createMuiTheme } from '@material-ui/core/styles';
import { red, blue, purple, grey } from '@material-ui/core/colors';
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    useHistory,
} from 'react-router-dom';
import RacingLeaderBoard from './RacingLeaderBoard';
import KeyMap from './images/KeyMap.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: blue,
        // secondary: red,
    },
});

export default function LayoutGrid(props) {
    const classes = useStyles();
    let leftSm = 2;
    let middleSm = 7;
    let rightSm = 3;

    const location = useLocation();
    const [inputCtrl, setInputCtrl] = useState(false);
    const [bid, SetBid] = useState(0);

    const SetInputCtrl = (isChat) => {
        setInputCtrl(isChat);
    };

    const [over, setOver] = useState(false);

    useEffect(() => {
        props.socket.once('gameOver', (leaderBoard) => {
            // console.log('gameover');
            let tmpAudio = new Audio(Result);
            tmpAudio.play();
            if (leaderBoard) {
                setOver(leaderBoard);
            }
            tmpAudio.remove();
        });
    }, []);

    const [APIdata, setAPI] = useState(null);
    let setCurrentAPIData = (data) => {
        setAPI(data);
    };
    let getCurrentAPIData = () => {
        return APIdata;
    };

    return (
        <>
            {over && (
                <GameOverModal
                    leaderBoard={over}
                    setLeaderBoard={setOver}
                    socket={props.socket}
                    roomID={props.roomID}
                    lobbyAudio={props.lobbyAudio}
                />
            )}

            <Grid
                className="전체그리드"
                style={{
                    padding: '3vh 3vw 3vh 3vw',
                    width: '100vw',
                    height: '100vh',
                }}
                wrap="wrap"
                container
                direction="row"
                justify="space-between"
                alignItems="stretch"
            >
                <Grid
                    className="플레이어리스트그리드"
                    container
                    item
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                    xs={leftSm}
                    style={{
                        width: '100%',
                        height: '100%',
                        padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                    }}
                >
                    <Grid
                        item
                        style={{
                            width: '100%',
                            height: '25%',
                        }}
                    >
                        {props.isStart && <Timer socket={props.socket} />}
                    </Grid>
                    <Grid
                        item
                        style={{
                            width: '100%',
                            height: '75%',
                        }}
                    >
                        <MyRank
                            isStart={props.isStart}
                            socket={props.socket}
                            requestSocket={props.requestSocket}
                            roomID={props.roomID}
                            roomInfo={props.roomInfo}
                        />
                        <RacingLeaderBoard socket={props.socket} />
                    </Grid>
                </Grid>
                <Grid
                    className="차트및거래및지갑"
                    item
                    xs={middleSm}
                    container
                    wrap="wrap"
                    direction="column"
                    alignItems="stretch"
                    justify="space-between"
                >
                    <Grid
                        className="차트컴퍼넌트"
                        item
                        style={{
                            width: '100%',
                            height: '67%',
                            padding: '0.3vh 0vw 0.3vh 0.3vw',
                        }}
                    >
                        <Paper
                            style={{ height: '100%',
                            border: 'solid',                        
                            borderColor: '#2D4053', }}
                            className={classes.paper}
                        >
                            <ChartComponent
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                                setAPIData={setCurrentAPIData}
                                APIdata={APIdata}
                                display="flex"
                                isStart={props.isStart}
                                bid={bid}
                            />
                        </Paper>
                    </Grid>
                    <Grid
                        className="지갑및호가거래"
                        container
                        style={{ width: '100%', height: '33%' }}
                        item
                        wrap="wrap"
                        direction="row"
                        alignItems="stretch"
                        justify="space-between"
                    >
                        <Grid
                            style={{ height: '100%', width: '50%' }}
                            direction="column"
                            container
                            item
                            alignItems="stretch"
                            justify="flex-start"
                        >
                            <Grid
                                className="지갑컴퍼넌트"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                                container
                                item
                                alignItems="stretch"
                                justify="flex-start"
                                wrap="wrap"
                                direction="row"
                            >
                                <MyWallet
                                    roomID={props.roomID}
                                    socket={props.socket}
                                    requestSocket={props.requestSocket}
                                />
                            </Grid>
                            {/* <Grid
                                className="거래내역컴퍼넌트"
                                style={{
                                    width: '100%',
                                    height: '40%',
                                    padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                                }}
                                item
                            >
                                <Paper
                                    className={classes.paper}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    <StockDoneList
                                        socket={props.socket}
                                        requestSocket={props.requestSocket}
                                    />
                                </Paper>
                            </Grid> */}
                        </Grid>
                        <Grid
                            className="주식거래컴퍼넌트"
                            container
                            item
                            style={{
                                height: '100%',
                                width: '50%',
                                padding: '0.3vh 0vw 0.3vh 0.3vw',
                            }}
                        >
                            <Grid
                                style={{ height: '100%' }}
                                wrap="wrap"
                                alignItems="stretch"
                                container
                                item
                                direction="row"
                                justify="space-between"
                            >
                                <Grid
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    item
                                >
                                    <Paper
                                        style={{ height: '100%',                         border: 'solid',
                        borderColor: '#2D4053', }}
                                        className={classes.paper}

                                    >
                                        {/* <ThemeProvider theme={theme}> */}
                                        <TradeStock
                                            // theme={theme}
                                            SetBid={SetBid}
                                            inputCtrl={inputCtrl}
                                            roomID={props.roomID}
                                            APIdata={APIdata}
                                            socket={props.socket}
                                            requestSocket={props.requestSocket}
                                        />
                                        {/* </ThemeProvider> */}
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    className="매수매도호가및채팅"
                    item
                    xs={rightSm}
                    style={{
                        height: '100%',
                        width: '100%',
                        padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                    }}
                    alignItems="flex-end"
                    container
                    direction="column"
                    justify="space-between"
                >
                    <Grid
                        className="매수매도호가테이블"
                        style={{
                            height: '60%',
                            width: '100%',
                            padding: '0.3vh 0.3vw 0.5vh 0.3vw',
                        }}
                        item
                    >
                        <Paper
                            className={classes.paper}
                            style={{
                                height: '50%',
                                padding: '2vh',
                                width: '100%',
                                border: 'solid',
                                borderColor: '#2D4053',
                            }}
                        >
                            <RefreshGraph socket={props.socket} />
                        </Paper>
                        <Paper
                            className={classes.paper}
                            style={{
                                height: '50%',
                                margin: '0.6vh 0px 0px 0px',
                                padding: '2vh',
                                width: '100%',
                                fontSize: '1vw',
                                                        border: 'solid',
                        borderColor: '#2D4053',
                            }}
                        >
                            {/* <TabPanel
                                inputCtrl={inputCtrl}
                                roomID={props.roomID}
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                            /> */}
                            플레이어들의 행동
                            <RoomAction socket={props.socket} />
                        </Paper>
                    </Grid>
                    <Grid
                        className="채팅방"
                        style={{
                            height: '40%',
                            width: '100%',
                            padding: '0.8vh 0.3vw 0vh 0.3vw',
                            
                        }}
                        item
                    >
                        <Paper
                            className={classes.paper}
                            style={{ height: '100%', width: '100%',                        border: 'solid',
                            borderColor: '#2D4053', }}
                        >
                            <img
                                src={KeyMap}
                                // style={{}}></img>
                                style={{ height: '100%', width: '100%',objectFit:'contain' }}
                            />
                            {/* <ChatRoom
                                SetInputCtrl={SetInputCtrl}
                                roomInfo={props.roomInfo}
                                roomID={props.roomID}
                                socket={props.socket}
                                chat={props.chat}
                            /> */}
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
