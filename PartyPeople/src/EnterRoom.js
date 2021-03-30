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
// import { useSound } from './useSound';
import Tetris99 from './audios/music/Tetris99.mp3';

export default function EnterRoom(props, { history }) {


    const [name, setName] = React.useState('');
    const [player, setPlayer] = React.useState('');
    const [roomID, setRoomID] = React.useState(props.roomID);
    const [bgm_audio] = useState(new Audio(Tetris99));
    const [playing, setPlaying] = useState(true);

    const MusicPause = () => {
        setPlaying(false);
    }
    const MusicStart = () => {
        setPlaying(true);
    }
    useEffect(() => {
        playing ? bgm_audio.play() : bgm_audio.pause();
      },
    //  ?  [playing] 이 조건이 없으면 렌더가 불필요하게 많이 된다.
    // ? 그런데 있으면 렌더가 한 번 모자라서 음악이 안나옴
    );

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

    const isName = name === '';
    return (
        <>
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
                    MusicPause= {MusicPause}
                    MusicStart={MusicStart}
                />
            )}
        </>
    );
}
