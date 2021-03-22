import React, { useState, useRef } from 'react';
import { Button, Fab, Grid, Paper, makeStyles, TextField } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import SetPlayerName from './setPlayerName';
import Lobby from './Lobby';

export default function EnterRoom(props, {history}) {
    const [name, setName] = React.useState('');
    let textInput = useRef(null);
    
    const handleOnSave = (textInput) => {
        setName(textInput);
        // sendName();
    }

    // const sendName = (ev) => {
    //     ev.preventDefault();
    //     // console.log(message);
    //     textInput.current.value = '';
        
    //      // author: this.state.author,
    //     // props.socket.emit('message', message);
    //     // setMessage({ message: '' });
    // }

    const isName = (name === '');
    return(
        <>
        {isName&&
        <SetPlayerName onSave={handleOnSave} name={name} setName={setName} history={history}/>}
        {!isName&&
        <Lobby name={name} history={history}/>}
      </>
    );
}