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
import StockDoneList from './StockDoneList';

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
            // width: '45%',
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
    const [resMsg, setResMsg] = useState('');
    const [messages, setMessages] = useState(
        // author와 쌍으로 저장된 메시지
        [
        ]
    );
    const messagesEnd =  React.useRef(null);
    const [isChanged, setChanged]  = useState(true);
    let textInput = useRef(null);
    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView();
    }

    useEffect(() => {
        if(messages.length >= 15) messages.shift();
        setMessages([...messages, resMsg]);
        scrollToBottom();
    },[resMsg])

    useEffect(() => {
        props.socket.on('update', (data) => {
            if (data) {
                setResMsg(data);
            }
        })
    },[]);

    useEffect(() => {
        document.addEventListener('keyup', HandleKeyUp);
        return () => {
            document.removeEventListener('keyup', HandleKeyUp);
        };
    },);

    useEffect(() => {
        scrollToBottom();
    },[messages])
    
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

    let isFocus = false;

    function HandleKeyUp(e) {
        if (props.inputCtrl) return;
        if (e.keyCode === 123 || e.keyCode === 27) return; //_ 'F12' || 'esc'
        e.preventDefault();
        // if (props.socket == null || isBind === false) {
        //     props.requestSocket('TradeStock', props.socket);
        //     return;
        // }
        if (e.keyCode === 13) {
            //_ Enter
            if (document.activeElement !== textInput.current) {
                textInput.current.focus();
            }
            else if (textInput.current.value === '') {
                textInput.current.blur();
            }
            else {
                sendMessage();
            }
        }
    }

    function PrintMessage() {
        return <></>;
    }

    return (
        <>
        <Grid container
            direction={'column'}
            justify={'space-evenly'}
            >
        {/* <Grid
            container
            className={classes.button}
            // direction={'row'}
            // justify={'space-between'}
            wrap={'nowrap'}
            
        > */}
            <GridList item style={{width: '100%'}} wrap={'nowrap'} >
                <Grid>
                    {
                        messages.map( (message) => {
                            return (
                                <>
                                <pre>
                                    {message.author} : {message.message}
                                </pre>
                                </>
                            );
                        })
                    }
                </Grid>
                <Grid
                    style={{ float:"left", clear: "both", height: "0%" }}
                    ref={messagesEnd}>
                </Grid> 
            </GridList>
        {/* </Grid> */}
        <Grid
                    item
                    container
                    dirction="column"
                    style={{ padding: '2vh 0 0 0'}}
                    spacing={2}
                    justify={'center'}
                    alignItems="center"
                >
                    <Grid item style={{ margin: '10 0 0 0', width: '70%' }} >
                        <TextField
                            style={{ height: '70%', width:'100%' }}
                            id="standard-basic"
                            inputRef={textInput}
                            label="메세지 보내기 (15자 제한)"
                            onFocus={()=> {
                                isFocus = true;
                                props.SetInputCtrl(true)
                            }}
                            onBlur={()=> {
                                isFocus = false;
                                props.SetInputCtrl(false)
                            }}
                            onChange={handleOnChange}
                            variant="outlined"
                            size="small"
                            inputProps={{ 'maxlength': 15 }}
                        />
                    </Grid>
                    <Button
                        style={{ width: '20%' }}
                        variant="contained"
                        color="primary"
                        onClick={()=>{sendMessage()}}
                    >
                        전송
                    </Button>
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
