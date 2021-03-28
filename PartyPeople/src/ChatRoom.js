import React, {
    useState,
    useRef,
    useEffect,
    makeStyle,
    useLayoutEffect,
} from 'react';
import {
    IconButton,
    Button,
    Box,
    TextField,
    Grid,
    Paper,
    makeStyles,
    GridList,
} from '@material-ui/core';
import Message from './Message';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *': {
            // margin: theme.spacing(1),
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
    const [message, setMessage] = useState(''); // 보낼 때의 메시지자체만 저장
    const [messages, setMessages] = useState(
        // author와 쌍으로 저장된 메시지
        [
        ]
    );
    const messagesEnd =  React.useRef(null);
    const [isChanged, setChanged]  = useState(true);
    let textInput = useRef(null);
    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        props.socket.once('update', (data) => {
            if (data) {
                addMessage(data);
            }
        })
    });

    useEffect(() => {
        scrollToBottom();
    },);
    
    // const socket_on = (async() => {
    //     await props.socket.on('update', (data) => {
    //         if (data) {
    //             console.log('update 3', messages);
    //             addMessage(data);
    //         }
    //     })
    // })()
    //
    const handleOnChange = (event) => {
        setMessage(event.target.value);
    };
    
    const sendMessage = () => {
        if (textInput.current.value) {
            // ev.preventDefault();
            textInput.current.value = '';
            // author: this.state.author,
            // console.log(message);
            props.socket.emit('message', {
                message: message,
                author: props.roomInfo[props.socket.id]['playerID'],
                roomID: props.roomID,
            });
            setMessage('');
        }
    };
    // * 서버에서 받아온 채팅메시지를 채팅창에 씀
    
    const addMessage = (data) => {
        // setMessages({ messages: [...messages, data['message']] });
        const new_messages = [...messages, data];
        setMessages(new_messages);
    };




    function PrintMessage() {
        return <></>;
    }

    return (
        <>
        <Grid
            container
            className={classes.button}
            style={{ height: '100%' }}
            justify={'space-between'}
        >
            <GridList item style={{ height: '29vh' }}>
                <Grid style={{ width: '100%'}}>
                    {messages.map((message) => {
                        return (
                            <>
                            <pre>
                                {message.author} : {message.message}
                            </pre>
                            </>
                        )
                    })}
                </Grid>
                <div
                    style={{ float:"left", clear: "both" }}
                    ref={messagesEnd}>
                </div> 
            </GridList>
            <Grid item>
                <Grid
                    item
                    container
                    wrap="wrap"
                    dirction="column"
                    style={{ height: '5vh' }}
                    spacing={1}
                    alignItems="flex-end"
                >
                    <Grid item style={{ margin: '0 0 0 -10', width: '70%' }}>
                        <TextField
                            style={{ height: '100%' }}
                            id="standard-basic"
                            inputRef={textInput}
                            label="메세지 보내기"
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                        />
                    </Grid>
                    <Grid item style={{ width: '20%' }}>
                        <Button
                            style={{ height: '100%' }}
                            variant="contained"
                            color="primary"
                            onClick={()=>{sendMessage()}}
                        >
                            전송
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
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
