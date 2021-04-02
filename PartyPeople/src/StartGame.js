import React, { useEffect, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { PurpleButton } from './PurpleComponent';
import {
    Button,
    Fab,
    Grid,
    Paper,
    makeStyles,
    TextField,
} from '@material-ui/core';
import Sound from './Sound';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function StartGame(props) {
    const classes = useStyles();
    const [restReadyTime, SetRestTime] = useState(null);

    const StartGameReq = () => {
        props.socket.emit('startGame_Req', props.roomID);
    };

    let isSetUp = false;
    useEffect(() => {
        if (!isSetUp) {
            props.socket
                .off('startGame_Res')
                .on('startGame_Res', (data) => {
                    props.lobbyAudio.pause();
                    console.log(data);
                    // if (data.musicName)
                        props.history.push({
                            pathname: '/game',
                            state: { 
                                musicName: data.musicName,
                                gameTime: data.gameTime },
                        });
                });
            isSetUp = true;
        }
    }, []);

    useEffect(() => {
        props.socket.on('restReadyTime', (restTime) => {
            SetRestTime(restTime);
        });
    });

    if (props.roomID === 'AAAAAAAAAAAAAAA') {
        return (
            <>
                {props.isLeader && (
                    <PurpleButton
                        variant="contained"
                        style={{
                            width: '80%',
                            height: '20vh',
                            fontSize: '8vh',
                        }}
                        text
                    >
                        {' '}
                        {restReadyTime}
                    </PurpleButton>
                )}
                {!props.isLeader && (
                    <PurpleButton
                        variant="contained"
                        style={{
                            width: '80%',
                            height: '20vh',
                            fontSize: '8vh',
                        }}
                        text
                    >
                        {' '}
                        {restReadyTime}
                    </PurpleButton>
                )}
            </>
        );
    } else {
        return (
            <>
                {props.isLeader && (
                    <PurpleButton
                        variant="contained"
                        onClick={StartGameReq}
                        style={{
                            width: '80%',
                            height: '20vh',
                            fontSize: '8vh',
                        }}
                        text
                    >
                        {'START'}
                    </PurpleButton>
                )}
                {!props.isLeader && (
                    <PurpleButton
                        variant="contained"
                        style={{
                            width: '80%',
                            height: '20vh',
                            fontSize: '8vh',
                        }}
                        text
                        disabled
                    >
                        {'START'}
                    </PurpleButton>
                )}
            </>
        );
    }
}
