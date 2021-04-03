import React, { useState, useRef, useEffect } from 'react';
import {
    Button,
    Fab,
    Grid,
    Paper,
    makeStyles,
    TextField,
} from '@material-ui/core';
import { Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import SetPlayerName from './setPlayerName';
import Lobby from './Lobby';
// import Sound from './Sound';
import backgroundImg from './videos/LobbyImage3.gif';
import LobbyMusic from './audios/music/Tetris99.mp3';
export default function EnterRoom(props) {
    // const history = useHistory();
    const [name, setName] = React.useState('');
    const [player, setPlayer] = React.useState('');
    const [roomID, setRoomID] = React.useState(props.roomID);
    const [lobbyAudio] = useState(new Audio(LobbyMusic));
    const [playing, setPlaying] = useState(true);
    const history = useHistory();

    const MusicStart = () => {
        setPlaying(true);
    };

    useEffect(
        () => {
            console.log(lobbyAudio);
            lobbyAudio.loop = true;
            playing ? lobbyAudio.play() : lobbyAudio.pause();
            props.sendAudio(lobbyAudio);
        }
        //  ?  [playing] 이 조건이 없으면 렌더가 불필요하게 많이 된다.
        // ? 그런데 있으면 렌더가 한 번 모자라서 음악이 안나옴
    );

    const handleOnSave = (textInput, flag) => {
        setName(textInput);
        sendName(textInput, flag);
    };

    if (props.socket == null) {
        props.requestSocket('createPrivateRoom');
    }

    const sendName = (name, flag) => {
        const params = window.location
            .toString()
            .substring(window.location.toString().indexOf('?'));
        const searchParams = new URLSearchParams(params);
        if (searchParams.has('id')) {
            // 초대링크 받아서 온 사람
            props.socket.emit('joinRoom_Req', {
                playerID: name,
                roomID: searchParams.get('id'),
            });
            props.socket.on('joinRoom_Res', (room) => {
                props.SetRoomIdAndInfo(room);
            });
        } else if (flag === 0) {
            // Private Room 방장
            props.socket.emit('createPrivateRoom_Req', { playerID: name });
            props.socket.on('createPrivateRoom_Res', (data) => {
                props.SetRoomIdAndInfo(data);
            });
        } else {
            // flag === 1, joinPublic

            props.socket.emit('joinPublic_Req', { playerID: name });
            props.socket.on('createPublic_Res', (data) => {
                props.SetRoomIdAndInfo(data);
            });
            props.socket.on('joinRoom_Res', (data) => {
                props.SetRoomIdAndInfo(data);
            });
        }
    };

    const gotoLobby = () => {
        let path = '/lobby';
        history.push({
            pathname: '/lobby',
            state: { playerID: name },
        });
    };

    if (props.roomInfo) {
        gotoLobby();
    }
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                }}
            >
                {
                    <SetPlayerName
                        onSave={handleOnSave}
                        name={name}
                        setName={setName}
                    />
                }
            </div>
        </>
    );
}
