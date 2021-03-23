import React, { useEffect, useState } from 'react';
import {
    Button,
    TextField,
    Fab,
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

function Lobby(props) {
    const putPlayer = (props) => {
        return (
            <>
                <Paper>
                    {props.playerID}
                    {props.cash}
                    {props.asset}
                </Paper>
            </>
        );
    };
    // const MakeURL = (props) => {
    // if (props.roomID) {
    //     console.log(window.location.protocol);
    //     console.log(window.location.host);
    //     console.log(props.roomID);
    //     // document.querySelector('#gameLink').value = `${window.location.protocol}//${window.location.host}/?id=${props.roomID}`;
    //     putPlayer(props.player); // playerInfo
    // }
    // }
    function CopyURL() {
        var copyText = document.getElementById('gameLink');
        copyText.select();
        document.execCommand('Copy');
        alert('복사되었습니다.');
    }
    console.log(props.socket);
    let [accept, setAccept] = useState(false);
    let [roomInfo, setRoomInfo] = useState('');
    let [players, setPlayers] = useState('');

    // 기존리스트에 새로운 플레이어 추가
    // let ret = (<div> aaa </div>);
    useEffect(()=>{
        let soc = props.socket;
        // console.log(roomID);
        if (soc) {
            soc.on('NewbieInRoom', (roomInfo) =>{
                console.log('NewbieInRoom');
                setAccept(true);
                setRoomInfo(roomInfo);
                // ret = <putPlayer player={roomInfo[soc.id]}/>;
            });
            soc.on('loadOtherPlayer', (players) => {
                console.log('loadOtherPlayer');
                setAccept(true);
                setPlayers(players);
                // players.forEach((player) => putPlayer(player)));
            });
        }
    }, []); 
    const test = () => {
        console.log(accept);
        if (accept == true) {
            return (<PutNewCard roomInfo={roomInfo} players={players} socket={props.socket}/>);
        }
        return (<> aaa </>);
    }

    function PutNewCard (props) {
        if (props.roomInfo != null) {
            return(
                <putPlayer player={props.roomInfo[props.socket.id]}/>
            );
        }
        else if (props.players != null) {
            return (
                props.players.map((player) => (
                    <Paper>
                        {player.playerID}
                        {player.cash}
                        {player.asset}
                    </Paper>
                // players.forEach((player) => putPlayer(player));
                )));
        }
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
        </Grid>
        <Grid id="playerList">
            {/* <PutNewCard socket={props.socket}/> */}
            {test()}
        </Grid>
            
        </>
    );
}

export default withRouter(Lobby);
