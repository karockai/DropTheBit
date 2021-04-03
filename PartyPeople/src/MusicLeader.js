import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

export default function MusicLeader(props) {
    const classes = useStyles();

    const musicList = {
        Deja_Vu: Deja_Vu,
        Dont_Stop_Me_Now: Dont_Stop_Me_Now,
        Gong: Gong,
        King_Conga: King_Conga,
        Mausoleum_Mash: Mausoleum_Mash,
        Without_Me: Without_Me,
        StormRoad: StormRoad,
        Beethven_Virus: Beethven_Virus,
        The_Wight_to_Remain: The_Wight_to_Remain,
    };

    function MusicInput() {
        const handleChange = (event) => {
            const musicName = event.target.value;
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
        };

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                        Select Music
                        {/* {props.music} */}
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.music}
                        onChange={handleChange}
                    >
                        <MenuItem value={'Dont_Stop_Me_Now'}>
                            Dont_Stop_Me_Now
                        </MenuItem>
                        <MenuItem value={'King_Conga'}>King_Conga</MenuItem>
                        <MenuItem value={'Mausoleum_Mash'}>
                            Mausoleum_Mash
                        </MenuItem>
                        <MenuItem value={'Deja_Vu'}>Deja_Vu</MenuItem>
                        <MenuItem value={'Without_Me'}>Without_Me</MenuItem>
                        <MenuItem value={'StormRoad'}>StormRoad</MenuItem>
                        <MenuItem value={'Beethven_Virus'}>
                            Beethven_Virus
                        </MenuItem>
                        <MenuItem value={'The_Wight_to_Remain'}>
                            The_Wight_to_Remain
                        </MenuItem>

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
            </div>
        );
    }
    function ShowMusic() {
        useEffect(() => {
            props.socket.once('settingsUpdate_Res', (data) => {
                const musicName = data.musicName;
                const musicTime = data.musicTime;
                // var tmp_roomInfo = props.roomInfo;
                // tmp_roomInfo['music'] = musicName;
                // strSetTime(String(minute) + ' : ' + String(second));
                // props.SetRoomIdAndInfo({roomID: props.roomID, roomInfo : tmp_roomInfo});
                props.setMusicTime(musicName, musicTime);
            });
        }, []);
        // }
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="standard-read-only-input"
                        label="Play Time"
                        defaultValue={props.strTime}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </form>
        );
    }
    // const StartGameReq = () => {
    //     if (music === '') {
    //         return alert('음악을 선택해주세요');
    //     } else {
    //         props.socket.emit('startGame_Req', props.roomID);
    //     }
    // };

    // let isSetUp = false;
    // useEffect(() => {
    //     if (!isSetUp) {
    //         props.socket.off('startGame_Res').once('startGame_Res', (gameTime) => {
    //             props.MusicPause();
    //             props.history.push({
    //                 pathname: '/game',
    //                 state: { gameTime: gameTime },
    //             });
    //         });
    //         isSetUp = true;
    //     }
    // }, []);
    return (
        <>
            <Grid>
                <MusicInput />
            </Grid>
            <Grid>
                <ShowMusic />
            </Grid>
            {/* <Button variant="contained" color="primary" onClick={StartGameReq}>
                {' '}
                StartGame{' '}
            </Button> */}
        </>
    );
}
