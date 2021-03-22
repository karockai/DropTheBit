import React, { useState } from 'react';
import { Button, Fab, Grid, Paper, makeStyles, TextField } from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';


function SetPlayerName(props) {
    // const socket = io();
    // const [name, setName] = React.useState('');
    const [tmp, setTemp] = React.useState('');
    const handleChange = (event) => {
        setTemp(event.target.value);
    }

    const handleOnSave =(event) => {
        event.preventDefault();
        props.onSave(tmp);
    }
    return(
        <>
            <Grid >
                <TextField id="standard-basic" label="Name" inputRef={props.textInput} onChange={handleChange} variant="outlined" size="large"/>
            </Grid>
            <Grid>
              <Button variant="contained" color="primary" onClick={handleOnSave}> {props.buttonMsg} </Button>
            </Grid>
        </>
    );
}
export default withRouter(SetPlayerName);
