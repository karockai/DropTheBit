import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, Popover,FormGroup,FormControlLabel } from '@material-ui/core';
import { Typography,Switch } from '@material-ui/core';
import KeyMapTemp from './images/KeyMap.png';
import MusicLeader from './MusicLeader';
import MusicMember from './MusicMember';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  typography: {
    padding: theme.spacing(2),
  },
}));
const PurpleSwitch = withStyles({
    switchBase: {
      color: purple[300],
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  
  function LobbyMusicOnOff(props) {
    const [state, setState] = React.useState(true);
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
      if (state) {
        setState(false);
        setState(false);
        props.MusicPause();
      }
      else {
          setState(true);
          props.MusicStart();
      }
    };
  
    return (
      <FormGroup>
        <FormControlLabel
          control={<PurpleSwitch checked={state} onChange={handleChange} name="checkedA" />}
        //   label="Custom color"
        />
      </FormGroup>
    );
  }


export default function LobbyTabs(props) {
  const classes = useStyles();
  const [keymap, setKeymap] = React.useState(props.roomLeader ? null : 'key_map');
  const [selectMusic, setSelectMusic] = React.useState(props.roomLeader ? 'select_music' : null);

  const handleKeymap = (event) => {
    console.log(event.currentTarget);
    setKeymap(event.currentTarget);
    console.log(keymap);
  };

  const handleSelectMusic = (event) => {
    console.log(event.currentTarget);
    setSelectMusic(event.currentTarget);
  };

  const handleClose = () => {
    setKeymap(null);
    setSelectMusic(null);
  };

  const openKey = Boolean(keymap);
  const openSelect = Boolean(selectMusic);

  const CheckLeader = () => {
    console.log(props.socket);
    if (props.roomLeader === props.socketId) {
        return (
            <>
                <MusicLeader
                    musicList={props.musicList}
                    roomID={props.roomID}
                    roomInfo={props.roomInfo}
                    socket={props.socket}
                    SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                    history={props.history}
                    MusicPause= {props.MusicPause}
                />
            </>
        );
    } else {
        return (
            <>
                <MusicMember
                    musicList={props.musicList}
                    roomID={props.roomID}
                    roomInfo={props.roomInfo}
                    socket={props.socket}
                    SetRoomIdAndInfo={props.SetRoomIdAndInfo}
                    history={props.history}
                    MusicPause= {props.MusicPause}
                />
            </>
        );
    }
};

  return (   
    <div>
        <Grid container justify={'space-around'} alignItems={'center'}>
            <Button id="key_map" onClick={handleKeymap} size="large">
            KEY MAP
            </Button>
            <Button id="select_music" onClick={handleSelectMusic} size="large">
            SELECT MUSIC
            </Button>
            <LobbyMusicOnOff MusicPause={props.MusicPause} MusicStart={props.MusicStart}/>
        </Grid>
        <Popover
            open={openKey}
            anchorEl={keymap}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            >
        <Typography className={classes.typography}>
            <img src={KeyMapTemp} style={{ width: '50vw' }} />  
        </Typography>
        </Popover>
        <Popover
            open={openSelect}
            anchorEl={selectMusic}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            >
        <Typography className={classes.typography}>
            <CheckLeader/>
        </Typography>
        </Popover>
        
    </div>
);
}







