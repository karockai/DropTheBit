import React, {Component} from 'react';
import { Button, TextField, Fab, Grid, Paper, makeStyles } from '@material-ui/core';
import {withRouter} from 'react-router-dom';

function Lobby(props) {
    const putPlayer = (player) => {
        return(
            <Paper>
                {player.playerID}
                {player.cash}
                {player.asset}
            </Paper>
        );
    }
    // const MakeURL = (props) => {
        if (props.roomID) {
        console.log(window.location.protocol);
        console.log(window.location.host);
        console.log(props.roomID);
        // document.querySelector('#gameLink').value = `${window.location.protocol}//${window.location.host}/?id=${props.roomID}`;
        putPlayer(props.player); // playerInfo
    }
    // }
    function CopyURL(){
        var copyText = document.getElementById('gameLink');
        copyText.select();
        document.execCommand("Copy");
        alert('복사되었습니다.');
    }

    function PutNewCard (props) {
        // 기존리스트에 새로운 플레이어 추가 
        console.log(props.socket);
           props.socket.on('NewbieInRoom', (roomInfo) =>{
               putPlayer(roomInfo[props.socket.id]);
           });
           props.socket.on('loadOtherPlayer', (players) => 
           players.forEach((player) => putPlayer(player)));
    }


    return(
        <> 
        <Button variant="contained" color="primary" onClick={()=>props.history.push('/game')}> StartGame </Button> 
        <Grid style= {{height: '50vh'}}>
            <Paper>{props.name}</Paper>
        </Grid>
        <Grid container justify='center'>
            <input type="text" id="gameLink" class="form-control text-center fw-bold bg-white"
                    value={`${window.location.protocol}//${window.location.host}/?id=${props.roomID}`} style={{width: "80%"}} readonly />
            <Button class="btn btn-warning" type="button" onClick={CopyURL} id="copy">Copy Link</Button>
            <PutNewCard/>
        </Grid>
        </>
    );
}

export default withRouter(Lobby);