import React, { useState, useRef } from 'react';
import { Button, Fab, Grid, Paper, makeStyles, TextField } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import SetPlayerName from './setPlayerName';
import Lobby from './Lobby';

export default function EnterRoom(props, {history}) {
    const [name, setName] = React.useState('');
    const [player, setPlayer] = React.useState('');
    const [roomId, setRoomId] = React.useState('');
    let textInput = useRef(null);
    
    const handleOnSave = (textInput) => {
        setName(textInput);
        sendName(textInput);
    }

    if(props.socket == null) {
        props.requestSocket('createPrivateRoom');
    }

    const sendName = (name) => {
        // ev.preventDefault();
        // console.log(name);
        // console.log(props.socket);
        props.socket.emit('createPrivateRoom_Req', {"playerID" : name});
        props.socket.on('createPrivateRoom_Res', (data)=>{
            console.log(data); 
        props.SetRoomIdAndInfo(data);
        setPlayer(data.roomInfo[props.socket.id]);
        setRoomId(data.roomId);
        // const MakeURL = (props, data) => {
        //     document.querySelector('#gameLink').value = `${window.location.protocol}//${window.location.host}/?id=${data.gameID}`;
        //     putPlayer(data.roomInfo[props.socket.id]); // playerInfo
        // }
        });
    }


    const isName = (name === '');
    return(
        <>
        {isName&&
        <SetPlayerName onSave={handleOnSave} name={name} setName={setName} history={history}/>}
        {!isName&&
        <Lobby name={name} history={history} roomId={roomId} player={player}/>}
      </>
    );
}