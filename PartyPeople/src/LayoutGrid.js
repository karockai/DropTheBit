import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TradeStock from './TradeStock';
import MyAsset from './MyAsset';
import ChatRoom from './ChatRoom';
import PlayerList from './PlayerList';
import ChartComponent from './ChartComponent';
import ChartTitle from './ChartTitle';
import GameOverModal from './GameOverModal';
import StockDoneList from './StockDoneList';
import { red } from '@material-ui/core/colors';
import ThreeSecTimer from './ThreeSecTimer';
import GameMusicStart from './MusicStart';
import { Howl, Howler } from 'howler';
import Result from './audios/effect/Result.mp3';

import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    useHistory,
} from 'react-router-dom';
import TabPanel from './TabControl';

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

export default function LayoutGrid(props) {
    const classes = useStyles();
    let leftSm = 2;
    let middleSm = 7;
    let rightSm = 3;

    const location = useLocation();
    const gameTime = location.state.gameTime;
    const [timerTime, setTimerTime] = useState(gameTime);
    const [inputCtrl, setInputCtrl] = useState(false);

    const SetInputCtrl = (isChat) => {
        setInputCtrl(isChat);
    };

    useEffect(() => {
        // console.log('layoutGrid rendered....!');
    });

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
    console.log(props.roomInfo);
    console.log(props.roomInfo.gaming);
    return (
        <>
            {over && (
                <GameOverModal
                    leaderBoard={over}
                    setLeaderBoard={setOver}
                    socket={props.socket}
                    roomID={props.roomID}
                    // roomInfo={props.roomInfo}
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
                    item
                    xs={leftSm}
                    style={{
                        width: '100%',
                        height: '100%',
                        padding:'0.3vh 0.3vw 0.3vh 0.3vw'
                    }}
                >
                    <PlayerList
                        socket={props.socket}
                        requestSocket={props.requestSocket}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                    />
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
                    <Grid className="차트컴퍼넌트" item style={{ width: '100%', height: '50%',padding:'0.3vh 0.3vw 0.3vh 0.3vw' }}>
                        <Paper
                            style={{ height: '100%' }}
                            className={classes.paper}
                        >
                            <ChartComponent
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                                setAPIData={setCurrentAPIData}
                                APIdata={APIdata}
                                display="flex"
                                // time={props.time}
                                isStart={props.isStart}
                                time={timerTime}
                            />
                        </Paper>
                    </Grid>
                    <Grid
                        className ="지갑및호가거래"
                        container
                        style={{ width: '100%', height: '50%', }}
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
                            className ="지갑컴퍼넌트"
                                style={{
                                    width: '100%',
                                    height: '60%',
                                }}
                                container
                                item
                                alignItems="stretch"
                                justify="flex-start"
                                wrap="wrap"
                                direction="row"
                            >
                                <MyAsset
                                    roomID={props.roomID}
                                    socket={props.socket}
                                    requestSocket={props.requestSocket}
                                />
                            </Grid>
                            <Grid
                            className="거래내역컴퍼넌트"
                                style={{
                                    width: '100%',
                                    height: '40%',
                                    padding:'0.3vh 0.3vw 0.3vh 0.3vw'
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
                            </Grid>
                        </Grid>
                        <Grid
                            className="주식거래컴퍼넌트"
                            container
                            item
                            style={{ height: '100%', width: '50%', padding:'0.3vh 0.3vw 0.3vh 0.3vw' }}
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
                                        style={{ height: '100%' }}
                                        className={classes.paper}
                                    >
                                        <TradeStock
                                            inputCtrl={inputCtrl}
                                            roomID={props.roomID}
                                            APIdata={APIdata}
                                            socket={props.socket}
                                            requestSocket={props.requestSocket}
                                        />
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
                    style={{ height: '100%', width: '100%', padding:'0.3vh 0.3vw 0.3vh 0.3vw' }}
                    alignItems="flex-end"
                    container
                    direction="column"
                    justify="space-between"
                >
                    <Grid className="매수매도호가테이블" style={{ height: '50%', width: '100%' ,padding:'0.3vh 0.3vw 0.3vh 0.3vw' }} item>
                        <Paper
                            className={classes.paper}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <TabPanel
                                inputCtrl={inputCtrl}
                                roomID={props.roomID}
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                            />
                        </Paper>
                    </Grid>
                    <Grid className="채팅방" style={{ height: '50%', width: '100%',padding:'0.3vh 0.3vw 0.3vh 0.3vw' }} item>
                        <Paper
                            className={classes.paper}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <ChatRoom
                                SetInputCtrl={SetInputCtrl}
                                roomInfo={props.roomInfo}
                                roomID={props.roomID}
                                socket={props.socket}
                                chat={props.chat}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
