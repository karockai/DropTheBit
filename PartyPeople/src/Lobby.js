import React, {Component} from 'react';
import { Button, Fab, Grid, Paper, makeStyles } from '@material-ui/core';
import {withRouter} from 'react-router-dom';

function Lobby(props) {

    return(
        <> 
        <Button variant="contained" color="primary" onClick={()=>props.history.push('/game')}> StartGame </Button> 
        <Paper>{props.name}</Paper>
        </>
    );
}

export default withRouter(Lobby);