import React, { useState } from 'react';
import { Button, Fab, Grid, Paper, makeStyles, TextField } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';


function SetPlayerName(props) {
    // const socket = io();
    const params = window.location.toString().substring(window.location.toString().indexOf('?'));
    const searchParams = new URLSearchParams(params);
    // const [name, setName] = React.useState('');
    const [tmp, setTemp] = React.useState('');
    const handleChange = (event) => {
        setTemp(event.target.value);
    }

    const handleOnSave =(event) => {
        event.preventDefault();
        props.onSave(tmp);
    }

    let buttonMsg ='';
    if (searchParams.has('id')) {   // 초대링크 받아서 온 사람
        buttonMsg = 'Join Room'
    }
    else{                           // 방장
        buttonMsg = 'Create Private Room'
    }
    return(
        <>
            <Grid >
                <TextField id="standard-basic" label="Name" inputRef={props.textInput} onChange={handleChange} variant="outlined" size="large"/>
            </Grid>
            <Grid>
              <Button variant="contained" color="primary" onClick={handleOnSave}> {buttonMsg} </Button>
            </Grid>
        </>
    );
}
export default withRouter(SetPlayerName);
