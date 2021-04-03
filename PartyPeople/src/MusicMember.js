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
    // var tmp_music = props.roomInfo['music'];
    // var tmp_time = props.roomInfo['gameTime'];

    // var minute = parseInt(tmp_time / 60);
    // var second = tmp_time % 60;
    // minute = minute >= 10 ? String(minute) : '0' + String(minute);
    // second = second >= 10 ? String(second) : '0' + String(second);
    // const [music, setMusic] = React.useState(tmp_music);
    // const [strTime, strSetTime] = React.useState(minute + ' : ' + second);
    
    function MusicInput() {
        return (
            <div>
                <FormControl className={classes.formControl} disabled>
                    <InputLabel id="demo-simple-select-label">
                        {props.music}
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
                var tmp_roomInfo = props.roomInfo;
                tmp_roomInfo['music'] = musicName;
                // strSetTime(String(minute) + ' : ' + String(second));
                props.SetRoomIdAndInfo({roomID: props.roomID, roomInfo : tmp_roomInfo});
                props.setMusicTime(musicName, musicTime);
            });
        }, []);
        return (
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <TextField
                        label={props.strTime}
                        defaultValue={props.strTime}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </form>
        );
    }
    // let isSetUp = false;
    // useEffect(() => {
    //     if (!isSetUp) {
    //       props.socket.off('startGame_Res').once('startGame_Res', (gameTime) => {
    //           props.MusicPause();
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
            {/* <Button variant="contained" color="primary" disabled>
                {' '}
                StartGame{' '}
            </Button> */}
        </>
    );
}
