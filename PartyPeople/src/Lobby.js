import React, { useEffect, useLayoutEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import {
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Paper,
    makeStyles,
    TextField,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import LobbyPlayerCard from './LobbyPlayerCard';
import MusicLeader from './MusicLeader';
import MusicMember from './MusicMember';
import { SnackAlertBtn } from './SnackAlert';
import { SnackbarProvider } from 'notistack';

import ChatRoom from './ChatRoom';
import LobbyTabs from './LobbyTabs';
import './Lobby.css';
import StartGame from './StartGame';
import backgroundImg from './videos/LobbyVideo2.mp4';
import LeaderBoard from './LeaderBoard';
import GameGoal from './images/GameGoal.png';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '0vh 0vw 3vh 0vw',
    },

    paper: {
        textAlign: 'center',
        padding: theme.spacing(1),
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
        boxShadow: '',
    },
    button: {
        // color: theme.palette.getContrastText
        backgroundColor: '#0069d9',
    },
    input: {
        color: 'black',
        backgroundColor: 'white',
        fontFamily: 'NEXON Lv1 Gothic OTF',
        // opacity: 0.8,
        // width: '4vw',
        // wordSpacing: '16px',
        borderRadius: '10px',
        padding: '0 0 0 0.5vw',
        height: '5vh',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

function Lobby(props) {
    const location = useLocation();
    const [roomLeader,setRoomLeader] = useState(location.state.roomLeader);
    // const []
    const gaming = location.state.gaming;
    const [isGaming, setIsGaming] = useState(props.roomInfo['gaming']);
    const [roomInfo, setRoomInfo] = useState(props.roomInfo);
    const classes = useStyles();

    function CopyURL() {
        var copyText = document.getElementById('gameLink');
        copyText.select();
        document.execCommand('Copy');
    }
    let soc = props.socket;
    useLayoutEffect(() => {
        if (soc) {
            soc.on('joinRoom_Res', (room) => {
                props.SetRoomIdAndInfo(room);
            });
        }
    }, []);

    useEffect(() => {
        if (soc) {
            soc.off('disconnection').once('disconnection', (roomInfo, roomLeader) => {
                setRoomLeader(roomLeader);
                setRoomInfo(roomInfo);
                console.log(roomInfo);

                props.SetRoomIdAndInfo({
                    roomID: props.roomID,
                    roomInfo: roomInfo,
                });
            });
        }
    });
    // useEffect(()=>{
    //     if (roomInfo != props.roomInfo)
    //     //setPlayerCard 다시하기
    // }, [roomInfo]);
    var tmp_music = props.roomInfo['music'];
    var tmp_time = props.roomInfo['gameTime'];

    var minute = parseInt(tmp_time / 60);
    var second = tmp_time % 60;
    minute = minute >= 10 ? String(minute) : '0' + String(minute);
    second = second >= 10 ? String(second) : '0' + String(second);
    const [music, setMusic] = React.useState(tmp_music);
    const [strTime, strSetTime] = React.useState(minute + ' : ' + second);
    const [time, setTime] = React.useState(props.musicTime);
    
    const setMusicTime = (music, time) => {
        setMusic(music);
        var minute = parseInt(time / 60);
        var second = time % 60;
        strSetTime(String(minute) + ' : ' + String(second));
        setTime(time);
    };

    if (roomLeader != null && roomLeader != props.roomInfo['roomLeader']) {
        const tmp_roomInfo = props.roomInfo;
        tmp_roomInfo['roomLeader'] = roomLeader;
        props.SetRoomIdAndInfo({
            roomID: props.roomID,
            roomInfo: tmp_roomInfo,
        });
    }

    // useEffect(()=>{
    props.socket.once('gameOver', (leaderBoard) => {
        setIsGaming(false);
    });
    // },);

    useEffect(()=>{
        const tmp_roomInfo = props.roomInfo;
        tmp_roomInfo['gaming'] =  isGaming;

        props.SetRoomIdAndInfo({
            roomID: props.roomID,
            roomInfo: tmp_roomInfo,
        });
    }, isGaming);

    useEffect(()=>{
        setRoomInfo(props.roomInfo);
    },[props.roomInfo]);
    
    const CheckLeader = () => {
        if (props.roomInfo['roomLeader'] === props.socket.id) {
            return (
                <>
                    <MusicLeader
                        musicList={props.musicList}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                        socket={props.socket}
                        SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                        history={props.history}
                        music={music}
                        strTime={strTime}
                        time={time}
                        setMusicTime={setMusicTime}
                    />
                </>
            );
        } else {
            return (
                <>
                    <MusicMember
                        musicList={props.musicList}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                        socket={props.socket}
                        SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                        history={props.history}
                        music={music}
                        strTime={strTime}
                        time={time}
                        setMusicTime={setMusicTime}
                    />
                </>
            );
        }
    };
    console.log(props.roomInfo);
    function PutNewCard(props) {
        console.log(props.roomInfo);
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
                            </>
                        );
                    })}
                </>
            );
        }
    }

    // console.log('props gaming', props.roomInfo['gaming']);
    // console.log('GameOver를 받을 때 셋 되는 isGaming',isGaming);
    // console.log('backToLobby에서 받아옴', gaming);
    function getPlayersList(roomInfo) {
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
            <video
                style={{ opacity: 0.7 }}
                className="videoTag"
                autoPlay
                loop
                muted
            >
                <source src={backgroundImg} type="video/mp4" />
            </video>
            {/* <img
                src={clubWallpaper}
                className="videoTag"
                style={{ opacity: 0.6 }}
            /> */}
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
                            <Grid style={{ width: '33%' }} align="left">
                                <IconButton
                                    edge="start"
                                    className={classes.menuButton}
                                    color="inherit"
                                    aria-label="menu"
                                >
                                    {/* <MenuIcon /> */}
                                    <span
                                        style={{
                                            fontSize: '2vw',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {props.roomInfo[
                                            props.roomInfo['roomLeader']
                                        ]['playerID'] + ' 님의 단타방 📊'}
                                    </span>
                                </IconButton>
                            </Grid>
                            <Grid
                                container
                                style={{ width: '35%' }}
                                alignItems="center"
                                justify="space-between"
                            >
                                <Grid
                                    container
                                    style={{ width: '90%' }}
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <TextField
                                        type="text"
                                        id="gameLink"
                                        className="form-control text-center fw-bold bg-transparent"
                                        // className= {classes.input}
                                        value={`${window.location.protocol}//${window.location.host}/?id=${props.roomID}`}
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        style={{ width: '70%', height: '10%' }}
                                        readOnly
                                    />
                                    {'   '}
                                    <SnackbarProvider maxSnack={1}>
                                        <SnackAlertBtn
                                            class="link"
                                            severity="success"
                                            message="링크가 복사됐어요! 😚"
                                            label="초대 링크"
                                            onAlert={true}
                                            type="button"
                                            onClick={CopyURL}
                                            id="copy"
                                            height="10%"
                                            width="27%"
                                            padding='1vh 1vw'

                                        />
                                    </SnackbarProvider>
                                </Grid>
                            </Grid>
                            <Grid
                                style={{ width: '27%' }}
                                direction={'row'}
                                contianer
                                justify="flex-start"
                                alignItems="flex-start"
                                style={{
                                    padding: '0 1vw 0 1vw',
                                    textAlign: 'right',
                                }}
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
                                height: '65vh',
                                padding: '1vw 1vw 1vw 1vw',
                            }}
                            container
                            item
                            direction={'row'}
                            justify={'flex-start'}
                            alignItems={'stretch'}
                        >
                            {' '}
                            <PutNewCard
                                // roomInfo={props.roomInfo}
                                roomInfo={roomInfo}
                                socket={props.socket}
                            />
                        </Grid>
                        <Grid
                            className="하단게임메뉴들"
                            style={{ height: '25vh' }}
                            item
                            container
                            direction={'row'}
                            alignItmes={'stretch'}
                        >
                            <Grid
                                contianer
                                direction="row"
                                justify="center"
                                alignItems="flex-end"
                                // className="게임방메타데이터"
                                className="음악선택창"
                                item
                                xs={6}
                                style={{
                                    width: '100%',
                                    height: '24vh',
                                    opacity: '0.8',
                                    padding: '1vh 2vw',
                                }}
                            >
                                <Paper
                                    className={classes.paper}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        padding: '1vw 1vw 1vw 1vw',
                                        // margin: '0vw 2vw 2vw 2vw',
                                    }}
                                >
                                    <CheckLeader />
                                </Paper>
                            </Grid>
                            <Grid
                                container
                                className="스타트버튼"
                                xs={6}
                                justify="center"
                                alignItems="flex-end"
                                style={{ height: '24vh', width: '100%' }}
                            >
                                <StartGame
                                    roomID={props.roomID}
                                    music={props.roomInfo['music']}
                                    socket={props.socket}
                                    history={props.history}
                                    lobbyAudio={props.lobbyAudio}
                                    roomOnGame={
                                        gaming === false? gaming :
                                        isGaming
                                    }
                                    // roomOnGame={
                                    //     props.roomInfo['gaming']
                                    // }
                                    // roomOnGame={
                                    //     gaming
                                    //         ? gaming
                                    //         : props.roomInfo['gaming']
                                    // }
                                    gameMusic={props.roomInfo['music']}
                                    isLeader={
                                        props.roomInfo['roomLeader'] ===
                                        props.socket.id
                                    }
                                    style={{ padding: '1vw 1vw 1vw 1vw' }}
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
                                <LeaderBoard socket={props.socket} />
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
        </>
    );
}

export default withRouter(Lobby);
