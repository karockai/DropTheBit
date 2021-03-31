import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tetris99 from './audios/music/Tetris99.mp3';
import {PurpleButton} from './PurpleComponent';
import {
    Button,
    Fab,
    Grid,
    Paper,
    makeStyles,
    TextField,
} from '@material-ui/core';

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

    const StartGameReq = () => {
        // if (music === '') {
        //     return alert('음악을 선택해주세요');
        // } else {
            props.socket.emit('startGame_Req', props.roomID);
        // }
    };


    let isSetUp = false;
    useEffect(() => {
        if (!isSetUp) {
            props.socket.off('startGame_Res').once('startGame_Res', (gameTime) => {
                props.MusicPause();
                props.history.push({
                    pathname: '/game',
                    state: { gameTime: gameTime },
                });
            });
            isSetUp = true;
        }
    }, []);

    return(
        <PurpleButton 
        variant="contained" 
        color="primary" 
        onClick={StartGameReq}
        style={{width:"80%", height:"20vh",fontSize:"8vh"}}
        text
        >
        {' '}
        Start Game{' '}
        </PurpleButton>
    );
}