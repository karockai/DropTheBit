import React, { useState } from 'react';
import { Button, Fab, Grid, Paper, makeStyles, TextField } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import SetPlayerName from './setPlayerName';
import Lobby from './Lobby';

export default function EnterRoom({history}) {
    const [name, setName] = React.useState('');
    const handleOnSave = (textInput) => {
        setName(textInput);
    }
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