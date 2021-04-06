import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import MenuIcon from '@material-ui/icons/Menu';
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Grid,
    GridList,
    Paper,
    makeStyles,
    Typography,
    Container,
    TextField,
} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import { withRouter } from 'react-router-dom';
import LobbyPlayerCard from './LobbyPlayerCard';
import MusicLeader from './MusicLeader';
import MusicMember from './MusicMember';
import { SnackAlertBtn } from './SnackAlert';
import { SnackbarProvider } from 'notistack';

import ChatRoom from './ChatRoom';
import { ChatFeed, Message } from 'react-chat-ui';
import LobbyTabs from './LobbyTabs';
import './Lobby.css';
import StartGame from './StartGame';
import backgroundImg from './videos/LobbyVideo2.mp4';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0vh 0vw 2vh 0vw',
    },

    paper: {
        textAlign: 'center',
        padding: theme.spacing(1),
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
    button: {
        // color: theme.palette.getContrastText
        backgroundColor: '#0069d9',
    },
    input: {
        color: 'white',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Lobby(props) {
    console.log(props.roomInfo);
    let leftSm = 3;
    let middleSm = 5;
    let rightSm = 3;
    // const [roomLeader, setRoomLeader] = useState(props.roomInfo['roomLeader']); //props.roomInfo['roomLeader']
    // const [socketId, setSocketId] = useState(props.socket.id);
    // console.log(props.socket.id);
    // console.log(props);
    const classes = useStyles();

    const [inputCtrl, setInputCtrl] = useState(false);
    const SetInputCtrl = (isChat) => {
        setInputCtrl(isChat);
    };

    function CopyURL() {
        var copyText = document.getElementById('gameLink');
        copyText.select();
        document.execCommand('Copy');
    }
    let soc = props.socket;
    useLayoutEffect(() => {
        if (soc) {
            soc.on('joinRoom_Res', (room) => {
                // 사람이 들어올 때마다 roomInfo 갱신
                // setRoomInfo(room.roomInfo);
                props.SetRoomIdAndInfo(room);
                // setRoomLeader(room.roomInfo['roomLeader']);
                // setSocketId(soc.id);
            });
        }
    }, []);

    useLayoutEffect(() => {
        if (soc) {
            soc.on('disconnect', (roomInfo) => {
                // 사람이 나갈 때마다 roomInfo 갱신
                // setRoomInfo(roomInfo);
                props.SetRoomIdAndInfo({
                    roomID: props.roomID,
                    roomInfo: roomInfo,
                });
                // setRoomLeader(roomInfo['roomLeader']);
                // setSocketId(soc.id);
            });
        }
    });

    function PutNewCard(props) {
        // console.log(props.roomInfo);
        if (props.roomInfo !== '') {
            let PlayerList = getPlayersList(props.roomInfo);
            const playerCount = Object.keys(PlayerList).length;
            let tmparr = [];
            for (let key in PlayerList) {
                tmparr.push([key, PlayerList[key]]);
            }
            // let wid = val + '%'
            return (
                <>
                    {tmparr.map(([socketID, player]) => {
                        return (
                            <>
                                <LobbyPlayerCard
                                    playerID={player.playerID}
                                    roomLeader={props.roomInfo['roomLeader']}
                                    socketID={socketID}
                                    playerCount={playerCount}
                                />{' '}
                                {/*//?*/}
                            </>
                        );
                    })}
                </>
            );
        }
    }

    // const Card = () => {
    //     return <PutNewCard roomInfo={props.roomInfo} socket={props.socket} />;
    // };

    function getPlayersList(roomInfo) {
        // let keyList = Object.keys(roomInfo).filter((key) => key.length === 20);
        let playerList = [];
        for (const [key, value] of Object.entries(roomInfo)) {
            if (key.length === 20) {
                playerList[key] = value;
            }
        }
        return playerList;
    }
    return (
        <>
            <video className="videoTag" autoPlay loop muted>
                <source src={backgroundImg} type="video/mp4" />
            </video>
            <Grid
                className="전체그리드"
                container
                direction={'column'}
                alignItems={'stretch'}
                className={classes.root}
            >
                <Grid
                    className="상단메뉴바"
                    item
                    style={{ height: '7vh', opacity: 0.9 }}
                >
                    <AppBar
                        position="static"
                        style={{ backgroundColor: '#0C151C' }}
                    >
                        <Toolbar variant="dense">
                            <Grid xs={8} align="left">
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    <MenuIcon />
                                    <span style={{ fontSize: '2vw' }}>
                                        {props.roomInfo[
                                            props.roomInfo['roomLeader']
                                        ]['playerID'] + ' 님의 단타방 📊'}
                                    </span>
                                </IconButton>
                            </Grid>
                            <Grid xs={4}>
                                <LobbyTabs
                                    roomLeader={props.roomInfo['roomLeader']}
                                    socketId={props.socket.id}
                                    musicList={props.musicList}
                                    roomID={props.roomID}
                                    roomInfo={props.roomInfo}
                                    time={props.time}
                                    socket={props.socket}
                                    SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                                    history={props.history}
                                    lobbyAudio={props.lobbyAudio}
                                />
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid className="하단컨텐츠그리드" container direction={'row'}>
                    <Grid
                        className="채팅창제외좌측그리드"
                        item
                        xs={8}
                        container
                        direction={'column'}
                        alignItems={'stretch'}
                    >
                        <Grid
                            className="플레이어리스트"
                            style={{
                                height: '70vh',
                                padding: '1vw 1vw 1vw 1vw',
                            }}
                            container
                            item
                            direction={'row'}
                            justify={'flex-start'}
                        >
                            {' '}
                            <PutNewCard
                                roomInfo={props.roomInfo}
                                socket={props.socket}
                            />
                        </Grid>
                        <Grid
                            className="하단게임메뉴들"
                            style={{ height: '20vh' }}
                            item
                            container
                            direction={'row'}
                            alignItmes={'stretch'}
                        >
                            <Grid
                                alignItems="center"
                                className="게임방메타데이터"
                                item
                                xs={5}
                            >
                                <TextField
                                    type="text"
                                    id="gameLink"
                                    className="form-control text-center fw-bold bg-transparent"
                                    value={`${window.location.protocol}//${window.location.host}/?id=${props.roomID}`}
                                    InputProps={{
                                        className: classes.input,
                                    }}
                                    style={{ width: '70%', height: '100%' }}
                                    readOnly
                                />
                                <SnackbarProvider maxSnack={1}>
                                    <SnackAlertBtn
                                        class="btn btn-warning"
                                        severity="success"
                                        message="링크가 복사됐어요! 😚"
                                        label="LINK"
                                        onAlert={true}
                                        type="button"
                                        onClick={CopyURL}
                                        id="copy"
                                    />
                                </SnackbarProvider>
                            </Grid>
                            <Grid className="스타트버튼" item xs={7}>
                                {' '}
                                <StartGame
                                    roomID={props.roomID}
                                    music={props.roomInfo['music']}
                                    socket={props.socket}
                                    history={props.history}
                                    lobbyAudio={props.lobbyAudio}
                                    roomOnGame={props.roomInfo['gaming']}
                                    gameMusic={props.roomInfo['music']}
                                    isLeader={
                                        props.roomInfo['roomLeader'] ===
                                        props.socket.id
                                    }
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        className="우측레이아웃"
                        container
                        item
                        xs={4}
                        style={{
                            width: '100%',
                            height: '90vh',
                            padding: '1vh 1vw 1vh 1vw',
                        }}
                        direction={'column'}
                    >
                        <Grid
                            className="방랭킹창"
                            style={{
                                width: '100%',
                                height: '60%',
                                opacity: '0.8',
                                padding: '1vh 1vw 1vh 1vw',
                            }}
                            item
                        >
                            <Paper
                                className={classes.paper}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '1vw 1vw 1vw 1vw',
                                }}
                            >
                                최근 게임 기록
                            </Paper>
                        </Grid>
                        <Grid
                            className="채팅창"
                            style={{
                                width: '100%',
                                height: '40%',
                                opacity: '0.8',
                                padding: '1vh 1vw 1vh 1vw',
                            }}
                            item
                        >
                            <Paper
                                className={classes.paper}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    padding: '1vw 1vw 1vw 1vw',
                                }}
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
            </Grid>
            {/* <Grid style={{ height: '100vh' }} container justify="center">
                <Grid
                    className="playerListGrid"
                    item
                    xs={leftSm}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <PutNewCard
                        roomInfo={props.roomInfo}
                        socket={props.socket}
                    />
                </Grid>
                <Grid
                    className="stockTradeGrid"
                    container
                    item
                    direction={'column'}
                    alignItems={'center'}
                    justify={'space-around'}
                    xs={middleSm}
                >
                    <Grid style={{ height: '25vh' }}></Grid>
                    <StartGame
                        roomID={props.roomID}
                        music={props.roomInfo['music']}
                        socket={props.socket}
                        history={props.history}
                        lobbyAudio={props.lobbyAudio}
                        isLeader={
                            props.roomInfo['roomLeader'] === props.socket.id
                        }
                        roomOnGame={props.roomInfo['gaming']}
                        gameMusic={props.roomInfo['music']}
                    />
                </Grid>
                <Grid
                    className="bidChatGrid"
                    item
                    xs={rightSm}
                    alignItems="stretch"
                    container
                    direction="column"
                    justify="space-between"
                    style={{ margin: '2vh 2vw 14vh 2vw' }}
                >
                    <LobbyTabs
                        roomLeader={props.roomInfo['roomLeader']}
                        socketId={props.socket.id}
                        musicList={props.musicList}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                        time={props.time}
                        socket={props.socket}
                        SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                        history={props.history}
                        lobbyAudio={props.lobbyAudio}
                    />
                    <Grid container direction={'column'} justify={'flex-end'}>
                        <Grid
                            style={{ margin: '0 0 10px 0' }}
                            container
                            justify={'space-between'}
                        >
                            <TextField
                                type="text"
                                id="gameLink"
                                className="form-control text-center fw-bold bg-transparent"
                                value={`${window.location.protocol}//${window.location.host}/?id=${props.roomID}`}
                                InputProps={{
                                    className: classes.input,
                                }}
                                style={{ width: '80%' }}
                                readOnly
                            />
                            <SnackbarProvider maxSnack={5}>
                                <SnackAlertBtn
                                    class="btn btn-warning"
                                    severity="success"
                                    message="링크가 복사됐어요! 😚"
                                    label="LINK"
                                    onAlert={true}
                                    type="button"
                                    onClick={CopyURL}
                                    id="copy"
                                />
                            </SnackbarProvider>
                        </Grid>
                        <Paper
                            style={{ height: '40vh' }}
                            className={classes.paper}
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
            </Grid> */}
        </>
    );
}

export default withRouter(Lobby);
