import React, { useState, useRef, useEffect } from 'react';
import {
    Button,
    Fab,
    Grid,
    Paper,
    makeStyles,
    TextField,
} from '@material-ui/core';
import {Router, Route, Switch,Redirect,  useHistory } from 'react-router-dom';
import SetPlayerName from './setPlayerName';
import Lobby from './Lobby';
import Sound from './Sound';
import backgroundImg from './videos/LobbyImage3.gif';
// import Tetris99 from './audios/music/Tetris99.mp3';
export default function EnterRoom(props) {
    // const history = useHistory();
    const [name, setName] = React.useState('');
    const [player, setPlayer] = React.useState('');
    const [roomID, setRoomID] = React.useState(props.roomID);
    // const [bgm_audio] = useState(new Audio(Tetris99));
    const [playing, setPlaying] = useState(true);
    const history = useHistory();
    // const MusicPause = () => {
    //     setPlaying(false);
    // }
    // const MusicStart = () => {
    //     setPlaying(true);
    // }
    // useEffect(() => {
    //     playing ? bgm_audio.play() : bgm_audio.pause();
    //   },
    //  ?  [playing] 이 조건이 없으면 렌더가 불필요하게 많이 된다.
    // ? 그런데 있으면 렌더가 한 번 모자라서 음악이 안나옴
    // );

    let musicList = [];
    const handleOnSave = (textInput) => {
        setName(textInput);
        sendName(textInput);
    };
    if (props.socket == null) {
        props.requestSocket('createPrivateRoom');
    }

    const sendName = (name) => {
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
        } else {
            // 방장
            props.socket.emit('createPrivateRoom_Req', { playerID: name });
            props.socket.on('createPrivateRoom_Res', (data, useSound) => {
                props.SetRoomIdAndInfo(data);
                musicList = data.musicList;
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
    const [audio, SetAudio] = useState(null);
    const sendAudio = (audio) => {
        SetAudio(audio);
    };

    if(props.roomInfo) {
        gotoLobby();
    }
    return (
        <>
        <div style={{backgroundImage: `url(${backgroundImg})`,  backgroundSize: 'cover'}} > 
                    <Sound
                soundName={'lobbyMusic'}
                soundType={'music'}
                soundVol={0.3}
                action={'play'}
                sendAudio={sendAudio}
            />
            {
                <SetPlayerName
                    onSave={handleOnSave}
                    name={name}
                    setName={setName}
                    // history={history}
                />
            }
        </div>
        </>
    );
}
