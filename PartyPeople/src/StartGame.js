import React, { useEffect, useState } from 'react';
import './ShiningButton.css';
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
import Gaza from './audios/music/Gaza.mp3';
import Another_One_Bites_The_Dust from './audios/music/Another_One_Bites_The_Dust.mp3';
import Can_You_Dig_It from './audios/music/Can_You_Dig_It.mp3';
import Csikos_Post from './audios/music/Csikos_Post.mp3';
import Dont_Stop_Me from './audios/music/날_막지마.mp3';

import TestMusic from './audios/music/TestMusic.mp3';

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
    const [gameMusic, SetGameMusic] = useState(props.gameMusic);

    useEffect(() => {
        props.socket.on('settingsUpdate_Res', (data) => {
            SetGameMusic(data.musicName);
        });
    }, []);

    useEffect(() => {}, []);

    const StartGameReq = () => {
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
            가즈아: Gaza,
            Another_One_Bites_The_Dust: Another_One_Bites_The_Dust,
            Can_You_Dig_It: Can_You_Dig_It,
            우편마차: Csikos_Post,
            날_막지마: Dont_Stop_Me,
            TestMusic: TestMusic,
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
                'Gaza',
                'Another_One_Bites_The_Dust',
                'Can_You_Dig_It',
                'Csikos_Post',
                '날_막지마',
            ];

            musicName =
                musicArray[Math.floor(Math.random() * musicArray.length)];

            gameAudio = new Audio(musicList[musicName]);
        } else {
            gameAudio = new Audio(musicList[musicName]);
        }

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
                console.log('다시게임으로간다');
                props.lobbyAudio.pause();
                props.lobbyAudio.currentTime = 0;
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
        props.socket.once('settingsUpdate_Res', (data) => {
            SetGameMusic(data['musicName']);
        });
    }, []);

    // Step2-1. 방이 게임 중이 아닌 경우
    if (props.roomOnGame === false) {
        return (
            <>
                {props.isLeader && (
                    <Button
                        class="start"
                        onClick={StartGameReq}
                        style={{
                            width: '80%',
                            height: '17vh',
                            fontSize: '10vh',
                        }}
                        text
                    >
                        {'START'}
                    </Button>
                )}
                {!props.isLeader && (
                    <button
                        style={{
                            width: '90%',
                            height: '17vh',
                            fontSize: '5vh',
                        }}
                        text
                        disabled
                    >
                        {'방장이 게임을 시작합니다.'}
                    </button>
                )}
            </>
        );
    }

    // Step2-2. 방이 게임 중인 경우
    else {
        return (
            <>
                <Button
                    class="start"
                    onClick={StartGameReq}
                    style={{
                        width: '80%',
                        height: '18vh',
                        fontSize: '10vh',
                    }}
                    text
                >
                    {'START'}
                </Button>
            </>
        );
    }
}
