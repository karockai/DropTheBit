import React, { useState, useRef, useEffect, makeStyle } from 'react';
import {
    IconButton,
    Button,
    Box,
    TextField,
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';
import Message from './Message';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
            // float: 'auto',
            // height: "50%"
        },
    },
    button2: {
        '& > *': {
            width: '45%',
            // margin: theme.spacing(1),
            justify: 'space-between',
        },
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function ChatRoom(props) {
    // console.log(props.socket);
    let testXs = 12;
    const classes = useStyles();
    let [message, setMessage] = useState('');
    let [messages, setMessages] = useState({
        messages: [
            new Message({
                // id: 1,
                message: "I'm the recipient! (The person you're talking to)",
            }), // Gray bubble
            new Message({ message: "I'm you -- the blue bubble!" }), // Blue bubble
        ],
    });
    let textInput = useRef(null);

    useEffect(() => {
        return () => {
            props.socket.on('update', function (data) {
                console.log(data);
                if (data) {
                    addMessage(data);
                }
            });
        };
    }, []);

    const handleOnChange = (event) => {
        setMessage({
            author: props.playerID,
            message: event.target.value,
        });
        // { message: ev.target.value }
    };

    const sendMessage = (ev) => {
        ev.preventDefault();
        console.log(message);
        textInput.current.value = '';

        // author: this.state.author,
        props.socket.emit('message', message);
        setMessage({ message: '' });
    };
    // * 서버에서 받아온 채팅메시지를 채팅창에 씀

    const addMessage = (data) => {
        // console.log('ddddddddd');
        setMessages({ messages: [...messages, data] });
    };

<<<<<<< HEAD
    return(
        <Grid container className={classes.button} display="flex" alignItems="flex-end" style={{ height: '100%' }}>
            <Grid item style={{height: '80%'}}>

            </Grid>
            <Grid item container wrap='wrap' dirction='column' style={{height: '5vh'}} spacing = {1}>
                <Grid item style={{margin: '0 0 0 -10', width: '80%'}}>
                    <TextField style={{height: '100%'}}  id="standard-basic" inputRef={textInput} label="메세지 보내기" onChange={handleOnChange} variant="outlined" size="small"/>
                </Grid>
                <Grid item style={{width: '20%'}}>
                    <Button style={{height: '100%'}} variant="contained" color="primary" onClick={sendMessage}> 전송 </Button>
                </Grid>
            </Grid>
            {/* <Message getMessage={getInputMessage} sendMessage={sendMessage}/> */}
=======
    return (
        <Grid
            container
            className={classes.button}
            justify="center"
            display="flex"
            alignItems="flex-end"
            style={{ height: '100%' }}
        >
            {/* <Message getMessage={getInputMessage} sendMessage={sendMessage}/> */}
            <TextField
                id="standard-basic"
                inputRef={textInput}
                label="메세지 보내기"
                onChange={handleOnChange}
                variant="outlined"
                size="small"
            />
            <Button variant="contained" color="primary" onClick={sendMessage}>
                {' '}
                전송{' '}
            </Button>
>>>>>>> a976a85e856c2a492bdfd8e250f85fb40d53539e
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
