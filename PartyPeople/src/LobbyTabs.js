import React, { Component } from 'react';
import './ShiningButton.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Popover,
    FormGroup,
    FormControlLabel,
} from '@material-ui/core';
import { Typography, Switch } from '@material-ui/core';
import KeyMapTemp from './images/KeyMap.png';
import MusicLeader from './MusicLeader';
import MusicMember from './MusicMember';
import LobbyTutorial from './LobbyTutorial';
import { PurpleButton, PurpleSwitch } from './PurpleComponent';
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(1),
    },
    typography: {
        padding: theme.spacing(2),
    },
    paper: {
        textAlign: 'center',
        padding: theme.spacing(1),
        color: '#000000',
        backgroundColor: '#0C151C',
    },
}));

function LobbyMusicOnOff(props) {
    const [state, setState] = React.useState(true);

    const handleChange = (event, lobbyAudio) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if (state) {
            setState(false);
            setState(false);
            props.lobbyAudio.pause();
        } else {
            setState(true);
            props.lobbyAudio.play();
        }
    };

    return (
        <FormControlLabel
            control={
                <PurpleSwitch
                    checked={state}
                    onChange={handleChange}
                    name="checkedA"
                />
            }
            //   label="Custom color"
        />
    );
}

export default function LobbyTabs(props) {
    const classes = useStyles();
    // const keyMapButton = () => {<Button id="key_map" size="large">KEY MAP</Button>}
    const [keymap, setKeymap] = React.useState(null);
    // const [keymap, setKeymap] = React.useState(props.roomLeader ? null : 'key_map');
    // const [selectMusic, setSelectMusic] = React.useState(null);
    const [tutoToggle, setTutoToggle] = React.useState(null);
    // var tmp_music = props.roomInfo['music'];
    // var tmp_time = props.roomInfo['gameTime'];

    // var minute = parseInt(tmp_time / 60);
    // var second = tmp_time % 60;
    // minute = minute >= 10 ? String(minute) : '0' + String(minute);
    // second = second >= 10 ? String(second) : '0' + String(second);
    // const [music, setMusic] = React.useState(tmp_music);
    // const [strTime, strSetTime] = React.useState(minute + ' : ' + second);
    // const [time, setTime] = React.useState(props.musicTime);

    // const setMusicTime = (music, time) => {
    //     setMusic(music);
    //     var minute = parseInt(time / 60);
    //     var second = time % 60;
    //     strSetTime(String(minute) + ' : ' + String(second));
    //     setTime(time);
    // };

    const handleKeymap = (event) => {
        // console.log(event.currentTarget);
        setKeymap(event.currentTarget);
        // console.log(keymap);
    };

    // const handleSelectMusic = (event) => {
    //     // console.log(event.currentTarget);
    //     setSelectMusic(event.currentTarget);
    // };

    const handleSelectTuto = (event) => {
        setTutoToggle(true);
    };

    const handleClose = () => {
        setKeymap(null);
        // setSelectMusic(null);
        setTutoToggle(null);
    };

    const openKey = Boolean(keymap);
    // const openSelect = Boolean(selectMusic);dd
    const openTuto = Boolean(tutoToggle);

    // const CheckLeader = () => {
    //     // console.log(props.socket);
    //     if (props.roomLeader === props.socketId) {
    //         return (
    //             <>
    //                 <MusicLeader
    //                     musicList={props.musicList}
    //                     roomID={props.roomID}
    //                     roomInfo={props.roomInfo}
    //                     socket={props.socket}
    //                     SetRoomIdAndInfo={props.SetRoomIdAndInfo}
    //                     history={props.history}
    //                     music={music}
    //                     strTime={strTime}
    //                     time={time}
    //                     setMusicTime={setMusicTime}
    //                 />
    //             </>
    //         );
    //     } else {
    //         return (
    //             <>
    //                 <MusicMember
    //                     musicList={props.musicList}
    //                     roomID={props.roomID}
    //                     roomInfo={props.roomInfo}
    //                     socket={props.socket}
    //                     SetRoomIdAndInfo={props.SetRoomIdAndInfo}
    //                     history={props.history}
    //                     music={music}
    //                     strTime={strTime}
    //                     time={time}
    //                     setMusicTime={setMusicTime}
    //                 />
    //             </>
    //         );
    //     }
    // };
    // console.log(keymap, openKey);
    // console.log(selectMusic, openSelect);
    return (
        <>
            {/* <Grid
                container
                style={{ padding: '0 1vw 0 1vw' }}
                justify={'space-around'}
                alignItems={'center'}
            > */}
            <button
                    class="tutorial"
                    id="tutorials"
                    onClick={handleSelectTuto}
                    style={{ padding: '1vh 1vw 1vh 1vw', margin:'0.5vw' }}
                    size="large"
                >
                    Tutorial
                </button>
                <button
                    class="arrow"
                    id="key_map"
                    onClick={handleKeymap}
                    style={{ padding: '1vh 1vw 1vh 1vw', margin: '0.5vw' }}
                    size="large"
                >
                    KEY MAP
                </button>
                {/* <button
                    class="arrow"
                    id="select_music"
                    onClick={handleSelectMusic}
                    style={{ padding: '1vh 1vw 1vh 1vw' }}
                    size="large"
                >
                    SELECT MUSIC
                </button> */}
                <LobbyMusicOnOff lobbyAudio={props.lobbyAudio} />
            {/* </Grid> */}
            <Popover
                open={openKey}
                anchorEl={keymap}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography className={classes.typography}>
                    <img src={KeyMapTemp} style={{ width: '50vw' }} />
                </Typography>
            </Popover>
            <Popover
                open={tutoToggle}
                anchorEl={openTuto}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <LobbyTutorial onClose={handleClose}></LobbyTutorial>
            </Popover>
            {/* <Popover
                open={openSelect}
                anchorEl={selectMusic}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography className={classes.paper}>
                    <CheckLeader />
                </Typography>
            </Popover> */}
            </>
    );
}
