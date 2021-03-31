import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper, Popover,FormGroup,FormControlLabel } from '@material-ui/core';
import { Typography,Switch } from '@material-ui/core';
import KeyMapTemp from './images/KeyMap.png';
import MusicLeader from './MusicLeader';
import MusicMember from './MusicMember';
import { purple, yellow } from '@material-ui/core/colors';

const PurpleButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    // backgroundColor: purple[500],
    backgroundColor: 'rgba(89, 32, 146, 0.37)',
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const PurpleSwitch = withStyles({
  switchBase: {
    color: yellow[300],
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
  // const keyMapButton = () => {<Button id="key_map" size="large">KEY MAP</Button>}
  const [keymap, setKeymap] = React.useState(null);
  // const [keymap, setKeymap] = React.useState(props.roomLeader ? null : 'key_map');
  const [selectMusic, setSelectMusic] = React.useState(null);
  
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
console.log(keymap, openKey);
console.log(selectMusic, openSelect);
  return (   
    <div>
        <Grid container justify={'space-around'} alignItems={'center'}>
            <PurpleButton id="key_map" color="transparent" onClick={handleKeymap} size="large">
            KEY MAP
            </PurpleButton>
            <PurpleButton id="select_music" onClick={handleSelectMusic} size="large">
            SELECT MUSIC
            </PurpleButton>
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







