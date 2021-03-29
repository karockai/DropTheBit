import React, { useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Tetris99 from './audios/music/Tetris99.mp3';
import KeyMapTemp from './images/KeyMap.png';
import {
    Button,
    Fab,
    Grid,
    Paper,
    makeStyles,
    TextField,
} from '@material-ui/core';

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
export default function MusicMember(props) {
    const classes = useStyles();
    // 방장인데 선택X / 방장인데 선택O / 팀원인데 선택X / 팀원인데 선택 O
    /* ''  => 선택  /  roomInfo에 music 정보가 있으면 받아오고 없으면 '' */
    if (bgm_audio.paused) {
        bgm_audio.play();
        console.log('music played');
    }
    var tmp_music = props.roomInfo['music'];
    var tmp_time = props.roomInfo['gameTime'];

    var minute = parseInt(tmp_time / 60);
    var second = tmp_time % 60;
    minute = minute >= 10 ? String(minute) : '0' + String(minute);
    second = second >= 10 ? String(second) : '0' + String(second);
    const [music, setMusic] = React.useState(tmp_music);
    const [strTime, strSetTime] = React.useState(minute + ' : ' + second);
    function MusicInput() {
        return (
            <div>
                <FormControl className={classes.formControl} disabled>
                    <InputLabel id="demo-simple-select-label">
                        {music}
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                    >
                        <MenuItem value={'King_Conga.mp3'}>
                            King_Conga.mp3
                        </MenuItem>
                        <MenuItem value={'Mausoleum_Mash.mp3'}>
                            Mausoleum_Mash.mp3
                        </MenuItem>
                        <MenuItem value={'Deja_Vu.mp3'}>Deja_Vu.mp3</MenuItem>
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
                setMusic(musicName);
                // props.setTime(musicTime);
                // if (props.roomInfo) {
                var minute = parseInt(musicTime / 60);
                var second = musicTime % 60;
                var tmp_roomInfo = props.roomInfo;
                tmp_roomInfo['music'] = musicName;
                // props.SetRoomIdAndInfo({roomID: props.roomID, roomInfo: tmp_roomInfo});
                strSetTime(String(minute) + ' : ' + String(second));
                // MusicInput(musicName);
                // }
            });
        }, []);
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        label={strTime}
                        defaultValue={strTime}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </form>
        );
    }
    let isSetUp = false;
    useEffect(() => {
        if (!isSetUp) {
            props.socket.once('startGame_Res', (gameTime) => {
                bgm_audio.pause();
                // ? props.setTime(gameTime);  // 이미 저번 통신으로 저장한 정보임
                props.history.push({
                    pathname: '/game',
                    state: { gameTime: gameTime },
                });
            });
            console.log('무언가 반복이 되고');
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
            <Button variant="contained" color="primary" disabled>
                {' '}
                StartGame{' '}
            </Button>
            <img src={KeyMapTemp} style={{ width: '800px' }} />
        </>
    );
}
