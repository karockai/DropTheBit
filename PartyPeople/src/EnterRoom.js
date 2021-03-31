import React, { useState, useRef, useEffect } from 'react';
import {
    Button,
    Fab,
    Grid,
    Paper,
    makeStyles,
    TextField,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import SetPlayerName from './setPlayerName';
import Lobby from './Lobby';
import Sound from './Sound';
import backgroundImg from './videos/LobbyImage3.gif';

export default function EnterRoom(props, { history }) {
    const [name, setName] = React.useState('');
    const [player, setPlayer] = React.useState('');
    const [roomID, setRoomID] = React.useState(props.roomID);

    let textInput = useRef(null);
    let musicList = [];
    const handleOnSave = (textInput) => {
        setName(textInput);
        sendName(textInput);
    };
    if (props.socket == null) {
        props.requestSocket('createPrivateRoom');
    }

    const sendName = (name) => {
        // ev.preventDefault();
        // console.log(props.socket);
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
            setRoomID(searchParams.get('id'));
            setPlayer(name);
        } else {
            // 방장
            props.socket.emit('createPrivateRoom_Req', { playerID: name });
            props.socket.on('createPrivateRoom_Res', (data, useSound) => {
                props.SetRoomIdAndInfo(data);
                setPlayer(data.roomInfo[props.socket.id]);
                setRoomID(data.roomID);
                musicList = data.musicList;
            });
        }
    };

    const [audio, SetAudio] = useState(null);
    const sendAudio = (audio) => {
        SetAudio(audio);
    };

    const isName = name === '';
    return (
        <>
            <Sound
                soundName={'lobbyMusic'}
                soundType={'music'}
                soundVol={0.3}
                action={'play'}
                sendAudio={sendAudio}
            />
            <div
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                }}
            >
                {isName && (
                    <SetPlayerName
                        onSave={handleOnSave}
                        name={name}
                        setName={setName}
                        history={history}
                    />
                )}
                {!isName && (
                    <Lobby
                        name={name}
                        socket={props.socket}
                        history={history}
                        roomID={roomID}
                        player={player}
                        SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                        roomInfo={props.roomInfo}
                        musicList={musicList}
                        time={props.time}
                        audio={audio}
                    />
                )}
            </div>
        </>
    );
}
