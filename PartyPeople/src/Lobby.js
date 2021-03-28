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
import MusicLeader from './MusicLeader';
import MusicMember from './MusicMember';
import Test from './Test';



function Lobby(props) {
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
    // console.log(props.socket);
    let [accept, setAccept] = useState(false);
    let [roomInfo, setRoomInfo] = useState('');

    useEffect(()=>{
        let soc = props.socket;
        if (soc) {
            soc.on('joinRoom_Res', (room) => {    // 사람이 들어올 때마다 roomInfo 갱신
                setRoomInfo(room.roomInfo);
                props.SetRoomIdAndInfo(room);
            });
        }
    }, []); 

    useEffect(()=> {
        let soc = props.socket;
        if (soc) {
            soc.on('disconnect', (room) => {    // 사람이 나갈 때마다 roomInfo 갱신
                console.log('client disconnect------');
                setRoomInfo(room.roomInfo);
                props.SetRoomIdAndInfo(room);
            });
        }
    })

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
            // console.log(tmparr);
            return (
                // PlayerList.forEach((player) => putPlayer(player))
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

    // const MusicList = () => {
    //     return(//props.musicList
    //         <Grid >
    //             {/* <SelectMusic 
    //             musicList={props.musicList} 
    //             roomID={props.roomID}
    //             setTime={props.setTime}
    //             /> */}
    //         </Grid>
    //     );

    // }
    var isLeader = true;
    if(props.roomInfo){
        isLeader = props.roomInfo['roomLeader'] === props.socket.id;
    }
    // const isLeader = true;
    return(
        <> 
        <Grid container justify='center' style= {{height: '80vh', margin: '5vh 5vh 5vh 5vh'}}>
            <Grid style= {{width: '50%'}} >
                <Paper style={{width: '30%'}}>{props.name}</Paper>
                {(isLeader &&
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
                )}
                {(!isLeader &&
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
                )}
                {/* <Test musicList={props.musicList} 
                roomID={props.roomID}
                setTime={props.setTime}/> */}
                
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
