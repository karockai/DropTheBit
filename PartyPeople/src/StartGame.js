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

// Music
import Deja_Vu from './audios/music/Deja_Vu.mp3';
import Dont_Stop_Me_Now from './audios/music/Dont_Stop_Me_Now.mp3';
import Gong from './audios/music/GONG.mp3';
import King_Conga from './audios/music/King_Conga.mp3';
import Mausoleum_Mash from './audios/music/Mausoleum_Mash.mp3';
import Without_Me from './audios/music/Without_Me.mp3';
import StormRoad from './audios/music/질풍가도.mp3';
import Beethven_Virus from './audios/music/Beethven_Virus.mp3';
import The_Wight_to_Remain from './audios/music/The_Wight_to_Remain.mp3';

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
    const [gameMusic, SetGameMusic] = useState(props.gameMusic);
    console.log(gameMusic);

    useEffect(() => {
        props.socket.once('publicGameStart', () => {
            console.log('get publicGameStart');
            console.log('@StartGame // gameMusic:', gameMusic);
            StartGameReq();
        });
    }, []);

    const StartGameReq = () => {
        console.log('get StartGameReq');
        const musicList = {
            Deja_Vu: Deja_Vu,
            Dont_Stop_Me_Now: Dont_Stop_Me_Now,
            Gong: Gong,
            King_Conga: King_Conga,
            Mausoleum_Mash: Mausoleum_Mash,
            Without_Me: Without_Me,
            질풍가도: StormRoad,
            Beethven_Virus: Beethven_Virus,
            The_Wight_to_Remain: The_Wight_to_Remain,
        };

        let gameAudio;
        let musicName = gameMusic;
        // random setting
        if (musicName === 'Random_Music') {
            const musicArray = [
                'Deja_Vu',
                'Dont_Stop_Me_Now',
                'Gong',
                'King_Conga',
                'Mausoleum_Mash',
                'Without_Me',
                '질풍가도',
                'Beethven_Virus',
                'The_Wight_to_Remain',
            ];

            musicName =
                musicArray[Math.floor(Math.random() * musicArray.length)];

            gameAudio = new Audio(musicList[musicName]);
        } else {
            gameAudio = new Audio(musicList[musicName]);
        }

        console.log(gameAudio);
        gameAudio.addEventListener('loadedmetadata', () => {
            const musicData = {
                musicName: musicName,
                gameTime: parseInt(gameAudio.duration),
            };

            props.socket.emit('startGame_Req', musicData);
            gameAudio.remove();
        });
    };

    let isSetUp = false;
    useEffect(() => {
        if (!isSetUp) {
            props.socket.off('startGame_Res').on('startGame_Res', (data) => {
                props.lobbyAudio.pause();
                props.lobbyAudio.currentTime = 0;
                // console.log(data);
                // if (data.musicName)
                props.history.push({
                    pathname: '/game',
                    state: {
                        musicName: data.musicName,
                        gameTime: data.gameTime,
                    },
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

    useEffect(() => {
        props.socket.once('settingsUpdate_Res', (data) => {
            SetGameMusic(data['musicName']);
        });
    }, []);

    // Step1. 공개 방이 경우
    // console.log('@StartGame // props.roomOnGame :', props.roomOnGame);
    if (props.roomID === 'EnjoyPublicGame') {
        console.log('Enter EnjoyPublicGame');
        console.log('@StartGame // roomOnGame:', props.roomOnGame);
        // Step1-1.방이 게임 중이 아닌 경우
        if (props.roomOnGame === false) {
            console.log('Enter EnjoyPublicGame // not playing');
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
        }
        // Step1-2. 방이 게임 중인 경우
        else {
            return (
                <>
                    <PurpleButton
                        variant="contained"
                        onClick={StartGameReq}
                        style={{
                            width: '80%',
                            height: '80%',
                            fontSize: '8vh',
                        }}
                        text
                    >
                        {'START'}
                    </PurpleButton>
                </>
            );
        }
    }
    // Step2. 사설 방인 경우
    else {
        // Step2-1. 방이 게임 중이 아닌 경우
        if (props.roomOnGame === false) {
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

        // Step2-2. 방이 게임 중인 경우
        else {
            return (
                <>
                    <PurpleButton
                        variant="contained"
                        onClick={StartGameReq}
                        style={{
                            width: '80%',
                            height: '80%',
                            fontSize: '8vh',
                        }}
                        text
                    >
                        {'START'}
                    </PurpleButton>
                </>
            );
        }
    }
}