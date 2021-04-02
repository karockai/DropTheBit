import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tetris99 from './audios/music/Tetris99.mp3';
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
export default function MusicLeader(props) {
    const classes = useStyles();
    // let tmp_music = props.roomInfo['music'];
    // let tmp_time =props.roomInfo['gameTime'];

    // var minute = parseInt(tmp_time / 60);
    // var second = tmp_time % 60;
    // minute = minute >= 10 ? String(minute) : '0' + String(minute);
    // second = second >= 10 ? String(second) : '0' + String(second);
    // const [music, setMusic] = React.useState(tmp_music);
    // const [strTime, strSetTime] = React.useState(minute + ' : ' + second);
    // const [music, setMusic] = React.useState(tmp_music);
    // const [strTime, strSetTime] = React.useState(tmp_time);

    // if (typeof strTime === 'number') {
    //     let minute = parseInt(strTime / 60);
    //     let second = strTime % 60;
    //     minute = minute >= 10 ? String(minute) : '0' + String(minute);
    //     second = second >= 10 ? String(second) : '0' + String(second);

    //     strSetTime(minute + ' : ' + second);
    // }

    function MusicInput() {
        const handleChange = (event) => {
            const musicName = event.target.value;
            // props.setMusic(musicName);
            props.socket.emit('settingsUpdate_Req', {
                roomID: props.roomID,
                musicName: musicName,
            });
        };
        /*  music select 현재 하드코딩 상태에서 동적으로 구현할 함수..!
      function MusicMenu() {
          return (
              <>
              {props.musicList.map((music) => {
                      console.log(music);
                  return (
                  (<MenuItem
                      value={music}>{music}
                  </MenuItem>)
                  );
              })}
              </>
          );
      }
*/
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
                        <MenuItem value={'King_Conga.mp3'}>
                            King_Conga.mp3
                        </MenuItem>
                        <MenuItem value={'Mausoleum_Mash.mp3'}>
                            Mausoleum_Mash.mp3
                        </MenuItem>
                        <MenuItem value={'Deja_Vu.mp3'}>Deja_Vu.mp3</MenuItem>
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
                // setMusic(musicName);

                var minute = parseInt(musicTime / 60);
                var second = musicTime % 60;
                // var tmp_roomInfo = props.roomInfo;
                // tmp_roomInfo['music'] = musicName;
                // strSetTime(String(minute) + ' : ' + String(second));
                // SetRoomIdAndInfo();
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
