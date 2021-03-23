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
import LobbyPlayerCard from './LobbyPlayerCard';

function Lobby(props) {
    const PutPlayer = (props) => {
        console.log(props);
        return (
            <>
                {/* <Paper style= {{width: '40%'}} >
                    {props.player.playerID}
                    {props.player.cash}
                    {props.player.asset}
                </Paper> */}
                <LobbyPlayerCard 
                playerID ={props.player.playerID}
                cash ={props.player.cash}
                asset ={props.player.asset}
                />
            </>
        );
    };
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
                        {/* <Paper>
                            {player.playerID}
                            {player.cash}
                            {player.asset}
                        </Paper> */}
                        (<PutPlayer player={player}/>)
                    );
                })}
                </div>
            );
        }
        // ! 
    }


    return(
        <> 
        <Grid container justify='center' style= {{height: '80vh', margin: '5vh 5vh 5vh 5vh'}}>
            <Grid style= {{width: '50%'}} >
                <Paper style={{width: '30%'}}>{props.name}</Paper>
                <Button variant="contained" color="primary" onClick={()=>props.history.push('/game')}> StartGame </Button> 
            </Grid>
            <Grid style= {{width: '50%'}}>
                <Grid style={{height: '80vh'}}>
                    {Card()}
                </Grid>
                <Grid container justify='center'>
                    <input type="text" id="gameLink" class="form-control text-center fw-bold bg-white"
                            value={`${window.location.protocol}//${window.location.host}/?id=${props.roomID}`} style={{width: "70%"}} readonly />
                    <Button class="btn btn-warning" type="button" onClick={CopyURL} id="copy">Copy Link</Button>
                </Grid>
            </Grid>
        </Grid>
        </>
    );
}

export default withRouter(Lobby);
