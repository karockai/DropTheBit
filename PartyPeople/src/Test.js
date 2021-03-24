import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Test() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Ten'}>Ten</MenuItem>
          <MenuItem value={'Twenty'}>Twenty</MenuItem>
          <MenuItem value={'Thirty'}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
// import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/TextField';
// import Test from './Test';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function SelectMusic(props) {
//   const classes = useStyles();

//   function MusicInput(props) {
//     const [music, setMusic] = React.useState('');
//     const [open, setOpen] = React.useState(false);

//     const handleChange = (event) => {
//         setMusic(event.target.value);
//         props.socket.emit('settingsUpdate_Req',
//         {roomID : props.roomID, musicName : music});
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleOpen = () => {
//         setOpen(true);
//     };

//     function MusicMenu() {
//         return (
//             <>
//             {props.musicList.map((music) => {
//                     console.log(music);
//                 return (
//                 (<MenuItem
//                     value={music}>{music}
//                 </MenuItem>)
//                 );
//             })}
//             </>
//         );
//     }
//     return (
//         <FormControl className={classes.formControl}>
//           <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
//           <Select
//             labelId="demo-controlled-open-select-label"
//             id="demo-controlled-open-select"
//             open={open}
//             onClose={handleClose}
//             onOpen={handleOpen}
//             value={music}
//             onChange={handleChange}
//           >
//             <MenuItem value="">
//               <em>None</em>
//             </MenuItem>
//             <MenuItem value={10}>Ten</MenuItem>
//             <MenuItem value={20}>Twenty</MenuItem>
//             <MenuItem value={30}>Thirty</MenuItem>
//           </Select>
//         </FormControl>
  
//       );
    
// }
  
  
// function ShowMusic(props) {
//     const [strTime, strSetTime] = React.useState('00 : 00');
 
//     useEffect(() => {
//         props.socket.on('settingsUpdate_Res', (data) => {
//             if (data) {
//                 props.setTime(data);
//                 let minute  = data / 60;
//                 let second = data - minute;
//                 strSetTime(String(minute)+' : '+String(second));
//             }
//         });
//     }, []);

//     return (
//         <form className={classes.root} noValidate autoComplete="off">
//         <div>
//             <TextField
//             id="standard-read-only-input"
//             label="Read Only"
//             defaultValue={strTime}
//             // value={time}
//             InputProps={{
//                 readOnly: true,
//             }}
//             />
//         </div>
//         </form>
//     );
// }
//   return(
//     <Grid>
//         <Grid>
//             <MusicInput 
//             socket={props.socket} 
//             roomID={props.roomID} 
//             musicList={props.musicList} 
//         />
//         </Grid>

//         <Grid>
//             <ShowMusic
//                 socket={props.socket}
//                 setTime={props.setTime}
//             />
//         </Grid>
//     </Grid>
//   );

// }





