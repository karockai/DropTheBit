import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    Button,
    TextField,
    Fab,
    Grid,
    Paper,
    GridList,
    makeStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import LobbyPlayerCard from './LobbyPlayerCard';
import MusicLeader from './MusicLeader';
import MusicMember from './MusicMember';
import {SnackAlertBtn} from './SnackAlert';
import {SnackbarProvider} from 'notistack';
// 용기
// 용기

// 용기

function Lobby(props) {
    var IsLeader = true;
    const PutPlayer = (props) => {
        return (
            <Grid container justify="space-between">
                <LobbyPlayerCard
                    playerID={props.player.playerID}
                    cash={props.player.cash}
                    asset={props.player.asset}
                />
            </Grid>
        );
    };
    function CopyURL() {
        var copyText = document.getElementById('gameLink');
        copyText.select();
        document.execCommand('Copy');
        // alert('복사되었습니다.');
    }
    let [roomInfo, setRoomInfo] = useState('');
    const [roomLeader, setRoomLeader] = useState(props.socket.id); //props.roomInfo['roomLeader']
    const [socketId, setSocketId] = useState(props.socket.id);

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
        // let soc = props.socket;
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

            // ? PlayerList.forEach(player => console.log(player));
            let tmparr = [];
            for (let key in PlayerList) {
                tmparr.push(PlayerList[key]);
            }
            return (
                // ? PlayerList.forEach((player) => (<putPlayer player = {player}/>))
                <div>
                    {tmparr.map((player) => {
                        return <PutPlayer player={player} />;
                    })}
                </div>
            );
        }
    }
    const CheckLeader = (props) => {
        if (props.roomLeader === props.socketId) {
            return (
                <>
                    <MusicLeader
                        musicList={props.musicList}
                        roomID={props.roomID}
                        roomInfo={props.roomInfo}
                        time={props.time}
                        socket={props.socket}
                        SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                        history={props.history}
                        MusicPause= {props.MusicPause}
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
                        time={props.time}
                        socket={props.socket}
                        SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                        history={props.history}
                        MusicPause= {props.MusicPause}
                    />
                </>
            );
        }
    };
    return (
        <>
            <Grid
                container
                justify="center"
                style={{ height: '80vh', margin: '5vh 5vh 5vh 5vh' }}
            >
                <Grid style={{ width: '50%' }}>
                    <Paper style={{ width: '30%' }}>{props.name}</Paper>
                    <CheckLeader
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
                    />
                </Grid>
                <Grid style={{ width: '50%' }}>
                    {/* <Grid style={{ height: '80vh' }}>{Card()}</Grid> */}
                    <Grid style={{ width: '50%' }}>
                        <GridList>
                            <Grid style={{ height: '80vh' }}>{Card()}</Grid>
                        </GridList>
                        <Grid container justify="center">
                            <input
                                type="text"
                                id="gameLink"
                                className="form-control text-center fw-bold bg-white"
                                value={`${window.location.protocol}//${window.location.host}/?id=${props.roomID}`}
                                style={{ width: '70%' }}
                                readOnly
                            />
                            <SnackbarProvider maxSnack={3}>
                                <SnackAlertBtn
                                    className="btn btn-warning"
                                    severity="success"
                                    message="링크가 복사됐어요! 😚"
                                    label="게임 방 URL copy"
                                    onAlert= {true}
                                    type="button"
                                    onClick={CopyURL}
                                    id="copy"
                                />
                            </SnackbarProvider>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default withRouter(Lobby);
