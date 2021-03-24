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
import Test from './Test';


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

export default function SelectMusic(props) {
  const classes = useStyles();
  // 방장인데 선택X / 방장인데 선택O / 팀원인데 선택X / 팀원인데 선택 O
  /* ''  => 선택  /  roomInfo에 music 정보가 있으면 받아오고 없으면 '' */
  // var tmp_music =  props.time === 0 ? 'Select Music' : props.roomInfo['music'];
  const [music, setMusic] = React.useState('tmp_music');
  const [strTime, strSetTime] = React.useState('00 : 00');
  console.log(music);
  function MusicInput() {

    const handleChange = (event) => {
      console.log(props.roomInfo);
      setMusic(event.target.value);
      var tmp_roomInfo = props.roomInfo; 
      tmp_roomInfo['music'] = event.target.value;
      console.log(tmp_roomInfo);
      
      props.SetRoomIdAndInfo({roomID: props.roomID, roomInfo: tmp_roomInfo});
      let musicName = event.target.value;
      props.socket.emit('settingsUpdate_Req',
      {roomID : props.roomID, musicName : musicName});
    };


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

      return (
          <div>
          <FormControl className={classes.formControl} disabled>
            <InputLabel id="demo-simple-select-label">Select Music</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={music}
              onChange={handleChange}
            >
              <MenuItem value={'King_Conga.mp3'}>King_Conga.mp3</MenuItem>
              <MenuItem value={'Mausoleum_Mash.mp3'}>Mausoleum_Mash.mp3</MenuItem>
              <MenuItem value={'Deja_Vu.mp3'}>Deja_Vu.mp3</MenuItem>
            </Select>
          </FormControl>

          </div>
        );
      
  }
    
    
  function ShowMusic() {

  
      useEffect(() => {
          props.socket.on('settingsUpdate_Res', (data) => {
            let time = data;
            if (data) {
            props.setTime(time);
            console.log(time);
            var minute  = parseInt(time / 60);
            var second = time % 60;
            console.log(minute);
            console.log(second);
            strSetTime(String(minute)+' : '+String(second));
              }
          });
      }, []);

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


  
  return(
    <>
        <Grid>
            <MusicInput />
        </Grid>
        {/* <Test/> */}
        <Grid>
            <ShowMusic/>
        </Grid>
        </>
  );

}


