import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/TextField';
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

function MusicInput(props) {
    const classes = useStyles();
    const [music, setMusic] = React.useState('');
    const handleChange = (event) => {
        setMusic(event.target.value);
        props.socket.emit('settingsUpdate_Req',
        {roomID : props.roomID, musicName : music});
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
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Music</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={music}
            onChange={handleChange}
          >
            <MusicMenu/>
          </Select>
          <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
      </div>
    );
}
  
  
function ShowMusic(props) {
    const classes = useStyles();
    const [strTime, strSetTime] = React.useState('00 : 00');
 
    useEffect(() => {
        props.socket.on('settingsUpdate_Res', (data) => {
            if (data) {
                props.setTime(data);
                let minute  = data / 60;
                let second = data - minute;
                strSetTime(String(minute)+' : '+String(second));
            }
        });
    }, []);

    return (
        <form className={classes.root} noValidate autoComplete="off">
        <div>
            <TextField
            id="standard-read-only-input"
            label="Read Only"
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

export default function SelectMusic(props) {
  const classes = useStyles();

  return(
    <Grid>
        <Grid>
            <MusicInput 
            socket={props.socket} 
            roomID={props.roomID} 
            musicList={props.musicList} 
        />
        </Grid>
        <Grid>
            <ShowMusic
                socket={props.socket}
                setTime={props.setTime}
            />
        </Grid>
    </Grid>
  );

}


