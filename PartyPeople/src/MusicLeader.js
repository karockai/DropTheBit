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
import KeyMapTemp from './images/KeyMap.png';
import Test from './Test';

const bgm_audio = new Audio(Tetris99);

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
    // 방장인데 선택X / 방장인데 선택O / 팀원인데 선택X / 팀원인데 선택 O
    /* ''  => 선택  /  roomInfo에 music 정보가 있으면 받아오고 없으면 '' */
    var tmp_music = props.roomInfo ? props.roomInfo['music'] : 'King_Conga.mp3';
    var tmp_time = props.roomInfo ? props.roomInfo['gameTime'] : '02 : 25';
    const [music, setMusic] = React.useState(tmp_music);
    const [strTime, strSetTime] = React.useState(tmp_time);

    function MusicInput() {
        const handleChange = (event) => {
            const musicName = event.target.value;
            setMusic(musicName);
            // var tmp_roomInfo = props.roomInfo;
            // tmp_roomInfo['music'] = musicName;
            // props.SetRoomIdAndInfo({roomID: props.roomID, roomInfo: tmp_roomInfo});
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
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={music}
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
        // {musicName : musicName, musicTime : musicTime}
        // if (props.roomInfo) {
        useEffect(() => {
            props.socket.once('settingsUpdate_Res', (data) => {
                const musicName = data.musicName;
                const musicTime = data.musicTime;

                if (props.roomInfo) {
                    // props.setTime(musicTime);

                    var minute = parseInt(musicTime / 60);
                    var second = musicTime % 60;
                    minute =
                        minute >= 10 ? String(minute) : '0' + String(minute);
                    second =
                        second >= 10 ? String(second) : '0' + String(second);

                    var tmp_roomInfo = props.roomInfo;
                    tmp_roomInfo['music'] = musicName;
                    // props.SetRoomIdAndInfo({roomID: props.roomID, roomInfo: tmp_roomInfo});
                    strSetTime(minute + ' : ' + second);
                }
            });
        }, []);
        // }
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        id="standard-read-only-input"
                        label="Play Time"
                        defaultValue={strTime}
                        // value={time}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </form>
        );
    }
    const StartGameReq = () => {
        if (music === '') {
            return alert('음악을 선택해주세요');
        } else {
            props.socket.emit('startGame_Req', props.roomID);
        }
        // props.history.push('/game');
    };

    // useEffect(() => {
    //     props.socket.once('startGame_Res', (gameTime) => {
    //         // ? props.setTime(gameTime);  // 이미 저번 통신으로 저장한 정보임
    //         props.history.push({
    //             pathname: '/game',
    //             state: { gameTime: gameTime },
    //         });
    //     });
    // }, []);
    // return (
    //     <>
    //         <Grid>
    //             <MusicInput />
    //         </Grid>
    //         <Grid>
    //             <ShowMusic />
    //         </Grid>
    //         <Button variant="contained" color="primary" onClick={StartGameReq}>
    //             {' '}
    //             StartGame{' '}
    //         </Button>
    //         <Grid style={{ width: '50%' }}>
    //             <img src={KeyMapTemp} width={'800'} />
    //         </Grid>
    let isSetUp = false;

    useEffect(() => {
        if (!isSetUp) {
            props.socket.off('startGame_Res').once('startGame_Res', (gameTime) => {
                // bgm_audio.pause();
                // console.log(props.audio);
                // console.log(props.PauseAudio);
                props.MusicPause();
                // props.PauseAudio(props.audio);
                // ? props.setTime(gameTime);  // 이미 저번 통신으로 저장한 정보임
                props.history.push({
                    pathname: '/game',
                    state: { gameTime: gameTime },
                });
            });
            isSetUp = true;
        }
    }, []);
    return (
        <>
            <Grid>
                <MusicInput />
            </Grid>
            <Grid>
                <ShowMusic />
            </Grid>
            <Button variant="contained" color="primary" onClick={StartGameReq}>
                {' '}
                StartGame{' '}
            </Button>

            <img src={KeyMapTemp} style={{ width: '800px' }} />
        </>
    );
}
