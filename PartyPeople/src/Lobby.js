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
    const PutPlayer = (props) => {
        console.log(props);
        return (
            <>
                <Paper>
                    {props.player.playerID}
                    {props.player.cash}
                    {props.player.asset}
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
    // console.log(props.socket);
    let [accept, setAccept] = useState(false);
    let [playerInfo, setplayerInfo] = useState('');
    let [roomInfo, setRoomInfo] = useState('');

    // 기존리스트에 새로운 플레이어 추가
    // let ret = (<div> aaa </div>);
    useEffect(()=>{
        let soc = props.socket;
        if (soc) {
            // ! 주석풀고 확인
            soc.on('joinRoom_Res', (roomInfo) => {    // 사람이 들어올 때마다 roomInfo 갱신
                console.log('joinRoom_Res');
                setAccept(true);
                setRoomInfo(roomInfo);
                // console.log(roomInfo);
                // players.forEach((player) => putPlayer(player)));
            });
            // ! 
        }
    }, []); 
    const Card = () => {
        console.log(accept);
        // if (accept == true) {
        if (playerInfo != '' || roomInfo != '') {
            return (<PutNewCard playerInfo={playerInfo} roomInfo={roomInfo}  socket={props.socket}/>);
        }
        return (<PutPlayer player={props.player}/>);
    }
    
    function getPlayersList(roomInfo) {
        let keyList = Object.keys(roomInfo).filter((key) => key.length === 20);
        let playerList = [];
        for(const [key, value] of Object.entries(roomInfo)) {
            if (key.length === 20){
                playerList[key] = value;
            }
        }
        return playerList;
    }  

    function PutNewCard (props) {
        // ! 주석 풀고 확인
        if (props.roomInfo != '') {
            let PlayerList = getPlayersList(props.roomInfo);

            // ? PlayerList.forEach(player => console.log(player));
            let tmparr = [];
            for(let key in PlayerList) {
                tmparr.push(PlayerList[key]);
            }
            console.log(tmparr);
            return (
                // PlayerList.forEach((player) => putPlayer(player))
                // ? PlayerList.forEach((player) => (<putPlayer player = {player}/>))
                <div>
                {tmparr.map((player) => {
                    return (     
                        <Paper>
                            {player.playerID}
                            {player.cash}
                            {player.asset}
                        </Paper>
                    );
                })}
                </div>
            );
        }
        // ! 
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
            {Card()}
        </Grid>
        </>
    );
}

export default withRouter(Lobby);
