import React,{useState, makeStyle} from 'react';
import {IconButton ,Button, Box, TextField, Grid, Paper, makeStyles } from '@material-ui/core';
import Message from './Message';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *':{
            margin: theme.spacing(1),
            width: "100%",
            // float: 'auto',
            // height: "50%"
        }
    },
    button2: {
        '& > *':{
            width: "45%",
            // margin: theme.spacing(1),
            justify: 'space-between',
        }
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

export default function ChatRoom(props) {    
    console.log(props.socket);
    let testXs = 12;
    const classes =useStyles();

    const sendMessage = (ev) => {
        ev.preventDefault();
        this.socket.emit('message', {
            author: this.state.author,
            message: ev.target.value,
        })
        this.setState({ message: '' });
    }
    const getInputMessage = ev => {
        ev.preventDefault();
        this.setState({ message: ev.target.value });
    }


    return(
        <Grid container className={classes.button} justify="center" display="flex" alignItems="flex-end" style={{ height: '100%' }}>
            <Message getMessage={getInputMessage} sendMessage={sendMessage}/>
            <TextField id="standard-basic" label="메세지 보내기" variant="outlined" size="small"/>
        </Grid>
    );
}

// export default function AlignItems() {
//     return (
//       <div style={{ width: '100%' }}>
//         <Box
//           display="flex"
//           alignItems="flex-end"
//           p={1}
//           m={1}
//           bgcolor="background.paper"
//           css={{ height: 100 }}
//         >
//           <Box p={1} bgcolor="grey.300">
//             Item 1
//           </Box>
//         </Box>
//       </div>
//     );
//   }