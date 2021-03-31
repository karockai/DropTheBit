import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    Button,
    Grid,
    Paper,
    GridList,
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
import {SnackAlertBtn} from './SnackAlert';
import {SnackbarProvider} from 'notistack';
// 용기
// 용기

import ChatRoom from './ChatRoom';
import { ChatFeed, Message } from 'react-chat-ui';
import LobbyTabs from './LobbyTabs'
import './Lobby.css';
import StartGame from './StartGame';



const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        // padding: theme.spacing(3),
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
        color: "white",
    },
}));

function Lobby(props) {
    let leftSm = 3;
    let middleSm = 5;
    let rightSm = 3;
    const [roomLeader, setRoomLeader] = useState(props.socket.id); //props.roomInfo['roomLeader']
    const [socketId, setSocketId] = useState(props.socket.id);

    const classes = useStyles();
    const PutPlayer = (props) => {
        return (
            <Grid container justify="space-between" style={{margin:'2vh 0 0 0'}}>
                <LobbyPlayerCard
                    playerID={props.player.playerID}
                    roomLeader={roomLeader}
                />
            </Grid>
        );
    };

    const [inputCtrl, setInputCtrl] = useState(false);
    const SetInputCtrl =  (isChat) => {
        setInputCtrl(isChat);
    };

    function CopyURL() {
        var copyText = document.getElementById('gameLink');
        copyText.select();
        document.execCommand('Copy');
        // alert('복사되었습니다.');
    }
    let [roomInfo, setRoomInfo] = useState('');
    let soc = props.socket;
    useLayoutEffect(() => {
        if (soc) {
            soc.on('joinRoom_Res', (room) => {
                // 사람이 들어올 때마다 roomInfo 갱신
                setRoomInfo(room.roomInfo);
                props.SetRoomIdAndInfo(room);
                setRoomLeader(room.roomInfo['roomLeader']);
                setSocketId(soc.id);
            });
        }
    }, []);

    useLayoutEffect(() => {
        if (soc) {
            soc.on('disconnect', (roomInfo) => {
                // 사람이 나갈 때마다 roomInfo 갱신
                setRoomInfo(roomInfo);
                props.SetRoomIdAndInfo({
                    roomID: props.roomID,
                    roomInfo: roomInfo,
                });
                setRoomLeader(roomInfo['roomLeader']);
                setSocketId(soc.id);
            });
        }
    });

    const Card = () => {
        if (roomInfo != '') {
            return <PutNewCard roomInfo={roomInfo} socket={props.socket} />;
        }
        return <PutPlayer player={props.player} />;
    };

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

    function PutNewCard(props) {
        if (props.roomInfo != '') {
            let PlayerList = getPlayersList(props.roomInfo);

            let tmparr = [];
            for (let key in PlayerList) {
                tmparr.push(PlayerList[key]);
            }
            return (
                <div>
                    {tmparr.map((player) => {
                        return <PutPlayer player={player} />;
                    })}
                </div>
            );
        }
    }
    return (
 
        // <><Container maxWidth="xl">
        // <Typography component="div" >
            <Grid
                style={{ height: '100vh', }}
                // wrap="wrap"
                container
                // direction="row"
                justify="center"
                // spacing={1}
            >
                <Grid className="playerListGrid" item xs={leftSm}>
                        <Grid >{Card()}</Grid>
                </Grid>
                <Grid
                    className="stockTradeGrid"
                    container
                    item
                    direction={'column'}
                    alignItems={'center'}
                    justify={'space-around'}
                    xs={middleSm}
                    // alignContents="stretch"
                >
                    <Grid style={{height:'20vh'}}>

                    </Grid>
                    <StartGame
                        roomID={props.roomID}
                        socket={props.socket}
                        history={props.history}
                        MusicPause= {props.MusicPause}

                    />
                </Grid>
                <Grid className="bidChatGrid" item xs={rightSm} 
                        alignItems="stretch"
                        container
                        direction="column"
                        // justify="space-between" //? 있으면 스크롤 생기고 없으면 배치 망함
                        style={{margin:'2vh 2vw 10vh 2vw'}}
                       >
                            <LobbyTabs
                                roomLeader={roomLeader}
                                socketId={socketId}
                                musicList={props.musicList}
                                roomID={props.roomID}
                                roomInfo={props.roomInfo}
                                time={props.time}
                                socket={props.socket}
                                SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                                history={props.history}
                                MusicPause= {props.MusicPause}
                                MusicStart={props.MusicStart}
                            />
                            <Grid container direction ={'column'} justify={'flex-end'}>
                                <Grid style={{margin:'0 0 10px 0'}} container justify={'space-between'} >
                                    <TextField
                                        type="text"
                                        id="gameLink"
                                        className="form-control text-center fw-bold bg-transparent"
                                        value={`${window.location.protocol}//${window.location.host}/?id=${props.roomID}`}
                                        InputProps={{
                                            className: classes.input,
                                        }}
                                        style={{ width: '80%',}}
                                        readOnly
                                    />
                                    <SnackbarProvider maxSnack={5}>
                                        <SnackAlertBtn
                                            class="btn btn-warning"
                                            severity="success"
                                            message="링크가 복사됐어요! 😚"
                                            // label="게임 방 URL copy"
                                            label="LINK"
                                            onAlert= {true}
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
            </Grid>
        // </Typography>
    // </Container>
        // </>

    );
}

export default withRouter(Lobby);
