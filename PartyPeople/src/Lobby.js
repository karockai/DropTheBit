import React, { useEffect,useLayoutEffect, useState } from 'react';
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
import MusicLeader from './MusicLeader';
import MusicMember from './MusicMember';
import Test from './Test';



function Lobby(props) {
    // const [IsLeader, setIsLeader] = useState(true);
    // if (props.roomInfo) {
    //     setIsLeader(props.roomInfo['roomLeader'] === props.socket.id);
    // }
    // console.log(IsLeader);
    console.log(props);
    var IsLeader = true;
    const PutPlayer = (props) => {
        return (
                
            <Grid container justify='space-between'>
                <LobbyPlayerCard 
                playerID ={props.player.playerID}
                cash ={props.player.cash}
                asset ={props.player.asset}
                />
            </Grid>

        );
    };
    function CopyURL() {
        var copyText = document.getElementById('gameLink');
        copyText.select();
        document.execCommand('Copy');
        alert('복사되었습니다.');
    }
    let [roomInfo, setRoomInfo] = useState('');
    const [roomLeader, setRoomLeader] = useState(props.socket.id); //props.roomInfo['roomLeader']
    const [socketId, setSocketId] = useState(props.socket.id);

        let soc = props.socket;
        useLayoutEffect(()=>{
            if (soc) {
                soc.on('joinRoom_Res', (room) => {    // 사람이 들어올 때마다 roomInfo 갱신
                    setRoomInfo(room.roomInfo);
                    props.SetRoomIdAndInfo(room);
                    setRoomLeader(room.roomInfo['roomLeader']);
                    setSocketId(soc.id);
                });
            }
        }, []); 
    
        useLayoutEffect(()=> {
            // let soc = props.socket;
            if (soc) {
                soc.on('disconnect', (roomInfo) => {    // 사람이 나갈 때마다 roomInfo 갱신
                    setRoomInfo(roomInfo);
                    props.SetRoomIdAndInfo({roomID : props.roomID, roomInfo : roomInfo});
                    setRoomLeader(roomInfo['roomLeader']);
                    setSocketId(soc.id);
                });
            }
        });
    
    const Card = () => {
        if (roomInfo != '') {
            return (<PutNewCard roomInfo={roomInfo} socket={props.socket}/>);
        }
        return (<PutPlayer player={props.player}/>);
    }
    
    function getPlayersList(roomInfo) {
        // let keyList = Object.keys(roomInfo).filter((key) => key.length === 20);
        let playerList = [];
        for(const [key, value] of Object.entries(roomInfo)) {
            if (key.length === 20){
                playerList[key] = value;
            }
        }
        return playerList;
    }  

    function PutNewCard (props) {
        if (props.roomInfo != '') {
            let PlayerList = getPlayersList(props.roomInfo);

            // ? PlayerList.forEach(player => console.log(player));
            let tmparr = [];
            for(let key in PlayerList) {
                tmparr.push(PlayerList[key]);
            }
            return (
                // ? PlayerList.forEach((player) => (<putPlayer player = {player}/>))
                <div>
                {tmparr.map((player) => {
                    return (     
                        (<PutPlayer player={player}/>)
                    );
                })}
                </div>
            );
        }
    }
    const CheckLeader = (props)=> {
        if (props.roomLeader === props.socketId) {
            return (
                <>
                <MusicLeader 
                    musicList={props.musicList} 
                    roomID={props.roomID}
                    roomInfo={props.roomInfo}
                    time={props.time}
                    setTime={props.setTime}
                    socket={props.socket}
                    SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                    history={props.history}
                    />
                </>
            );
        }
        else {
            return(
                <>
                <MusicMember
                musicList={props.musicList} 
                roomID={props.roomID}
                roomInfo={props.roomInfo}
                time={props.time}
                setTime={props.setTime}
                socket={props.socket}
                SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                history={props.history}
                />
                </>
            );
        }
    }
    return(
        <> 
        <Grid container justify='center' style= {{height: '80vh', margin: '5vh 5vh 5vh 5vh'}}>
            <Grid style= {{width: '50%'}} >
                <Paper style={{width: '30%'}}>{props.name}</Paper>
                <CheckLeader roomLeader={roomLeader} socketId={socketId}
                    musicList={props.musicList} 
                    roomID={props.roomID}
                    roomInfo={props.roomInfo}
                    time={props.time}
                    setTime={props.setTime}
                    socket={props.socket}
                    SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                    history={props.history}
                />
                
            </Grid>
            <Grid style= {{width: '50%'}}>
                <Grid style={{height: '80vh'}}>
                    {Card()}
                </Grid>
                <Grid container justify='center'>
                    <input type="text" id="gameLink" className="form-control text-center fw-bold bg-white"
                            value={`${window.location.protocol}//${window.location.host}/?id=${props.roomID}`} style={{width: "70%"}} readOnly />
                    <Button class="btn btn-warning" type="button" onClick={CopyURL} id="copy">Copy Link</Button>
                </Grid>
            </Grid>
        </Grid>
        </>
    );
}

export default withRouter(Lobby);
