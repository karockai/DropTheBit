import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    Button,
    Fab,
    Grid,
    Paper,
    makeStyles,
    withStyles,
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
import Zapaguri from './audios/music/짜파구리.mp3';

import TestMusic from './audios/music/TestMusic.mp3';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            // width: '10vw',
        },
        '& .MuiInputBase-root': {
            // margin: theme.spacing(1),
            // width: '25ch',
            fontSize: '1.5vw',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        width: '90%',

    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        '&:before': {
            borderColor: 'red',
        },
    },
    icon: {
        fill: 'red',
    },
}));

export default function MusicLeader(props) {
    const classes = useStyles();

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
        짜파구리: Zapaguri,
        TestMusic: TestMusic,
    };

    function MusicInput() {
        const handleChange = (event) => {
            const musicName = event.target.value;
            if (musicName === 'Random_Music') {
                props.socket.emit('settingsUpdate_Req', {
                    roomID: props.roomID,
                    musicName: musicName,
                    gameTime: 0,
                });
            } else {
                let tmpAudio = new Audio(musicList[musicName]);
                tmpAudio.addEventListener('loadedmetadata', () => {
                    let gameTime = parseInt(tmpAudio.duration);
                    props.socket.emit('settingsUpdate_Req', {
                        roomID: props.roomID,
                        musicName: musicName,
                        gameTime: gameTime,
                    });
                    tmpAudio.remove();
                });
            }
        };

        return (
            // <div>
            // <TextField
            // className={classes.formControl}
            //     style={{width:'5vw', }}
            //     InputLabelProps={{
            //         style: { color: '#fff', },
            //     }}
            //     id="standard-read-only-input"
            //     label="Play Time"
            //     defaultValue={props.strTime}
            //     InputProps={{
            //         readOnly: true,
            //         style: { color: '#fff',fontSize:'1.5vw' },
            //     }}
            // />

            <Grid style={{ width: '70%' }}>
                <FormControl className={classes.formControl}>
                    <InputLabel
                        style={{ color: '#fff', }}
                        id="demo-simple-select-label"
                        InputLabelProps={{
                            style: { color: '#fff',fontFamily: 'NEXON Lv1 Gothic OTF', },
                        }}
                    >
                        음악 제목
                    </InputLabel>
                    <Select
                        className={classes.select}
                        inputProps={{
                            classes: {
                                select: classes.select,
                                icon: classes.icon,
                            },
                            style: { color: '#fff', },
                        }}
                        style={{ color: '#ffffff', fontSize: '1.5vw',}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.music}
                        onChange={handleChange}
                    >
                    
                        <MenuItem value={'Random_Music'} style={{fontFamily: 'NEXON Lv1 Gothic OTF',}}>Random_Music</MenuItem>
                        <MenuItem value={'Dont_Stop_Me_Now'}>
                            Dont_Stop_Me_Now
                        </MenuItem>
                        <MenuItem value={'King_Conga'}>King_Conga</MenuItem>
                        <MenuItem value={'Mausoleum_Mash'}>
                            Mausoleum_Mash
                        </MenuItem>
                        <MenuItem value={'Deja_Vu'}>Deja_Vu</MenuItem>
                        <MenuItem value={'Without_Me'}>Without_Me</MenuItem>
                        <MenuItem value={'질풍가도'}>질풍가도</MenuItem>
                        <MenuItem value={'Beethven_Virus'}>
                            Beethven_Virus
                        </MenuItem>
                        <MenuItem value={'The_Wight_to_Remain'}>
                            The_Wight_to_Remain
                        </MenuItem>
                        <MenuItem value={'가즈아'}>가즈아</MenuItem>
                        <MenuItem value={'Another_One_Bites_The_Dust'}>
                            Another_One_Bites_The_Dust
                        </MenuItem>
                        <MenuItem value={'Can_You_Dig_It'}>
                            Can_You_Dig_It
                        </MenuItem>
                        <MenuItem value={'우편마차'}>우편마차</MenuItem>
                        <MenuItem value={'날_막지마'}>날_막지마</MenuItem>
                        <MenuItem value={'짜파구리'}>짜파구리</MenuItem>
                        <MenuItem value={'TestMusic'}>TestMusic</MenuItem>
                        {/* <>
              {props.musicList.map((music) => {
                  return (
                  (<MenuItem
                      value={music}>{music}
                  </MenuItem>)
                  );
              })}
              </> */}
                    </Select>
                </FormControl>
            </Grid>
            // </div>
        );
    }
    function ShowMusic() {
        useEffect(() => {
            props.socket.once('settingsUpdate_Res', (data) => {
                const musicName = data.musicName;
                const musicTime = data.musicTime;
                props.setMusicTime(musicName, musicTime);
            });
        }, []);

        return (
            <>
                <Grid style={{ width: '30%' }}>
                    <TextField
                        className={classes.formControl}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                        id="standard-read-only-input"
                        label="음악 시간"
                        defaultValue={props.strTime}
                        InputProps={{
                            readOnly: true,
                            style: { color: '#fff', fontSize: '1.5vw' },
                        }}
                    />
                </Grid>
            </>

        );
    }
    // const StartGameReq = () => {
    //     if (music === '') {
    //         return alert('음악을 선택해주세요');
    //     } else {
    //         props.socket.emit('startGame_Req', props.roomID);
    //     }
    // };

    return (
        <>
            <h5 style={{ margin: '1vh 0 1.5vh 0' }}>음악을 선택해주세요</h5>
            <Grid container direction={'row'} justify={'space-between'}>
                <ShowMusic />
                <MusicInput />
            </Grid>
        </>
    );
}
