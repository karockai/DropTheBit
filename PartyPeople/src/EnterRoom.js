import React, { useState, useRef } from 'react';
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

export default function EnterRoom(props, { history }) {
    const [name, setName] = React.useState('');
    const [player, setPlayer] = React.useState('');
    const [roomID, setRoomID] = React.useState('');
    let textInput = useRef(null);

    const handleOnSave = (textInput) => {
        setName(textInput);
        sendName(textInput);
    };

    if (props.socket == null) {
        props.requestSocket('createPrivateRoom');
    }

    
    const sendName = (name) => {
        // ev.preventDefault();
        // console.log(name);
        // console.log(props.socket);
        const params = window.location
            .toString()
            .substring(window.location.toString().indexOf('?'));
        const searchParams = new URLSearchParams(params);
        if (searchParams.has('id')) {   // 초대링크 받아서 온 사람
            props.socket.emit('joinRoom_Req', {"playerID" : name , "roomID": searchParams.get('id')});
        }
        else {                           // 방장
            props.socket.emit('createPrivateRoom_Req', {"playerID" : name});
            props.socket.on('createPrivateRoom_Res', (data)=>{
                console.log(data); 
                props.SetRoomIdAndInfo(data);
                setPlayer(data.roomInfo[props.socket.id]);
                setRoomId(data.roomID);
            });
        }

    }

    const isName = (name === '');
    console.log(roomID);
    console.log(props.socket);
    return(
        <>
        {isName&&
        <SetPlayerName onSave={handleOnSave} name={name} setName={setName} history={history}/>}
        {!isName&&
        <Lobby name={name} socket={props.socket} history={history} roomID={roomID} player={player}/>}
      </>
    );
}
