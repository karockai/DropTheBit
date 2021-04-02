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
    withStyles,
    makeStyles,
    GridList,
} from '@material-ui/core';
import Message from './Message';
import StockDoneList from './StockDoneList';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#CDD7E0',
        },
        '& .MuiInputLabel-root': {
            color: '#CDD7E0',
            fontSize: '0.8vw',
        },
        '& .MuiInputBase-input': {
            color: '#CDD7E0',
            fontSize: '0.9vw',
        },
        '& .MuiInputBase-formControl': {
            color: '#CDD7E0',
            fontSize: '0.9vw',
            height: '50%',
        },
        //   '& .MuiInput-underline:after': {
        //     borderBottomColor: 'white',
        //   },
        //   '& .MuiInput-underline:before': {
        //     borderBottomColor: 'white',
        //   },
        '& .MuiOutlinedInput-root': {
            '& .MuiInputBase-input': {
                color: '#CDD7E0',
            },
            '& .MuiInputLabel-root': {
                color: '#CDD7E0',
                fontStyle: 'italic',
            },
            '& fieldset': {
                borderColor: '#2D4053',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#635ee7',
            },
        },
    },
})(TextField);

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
            {
                author: 'SERVER',
                message: '게임이 시작됩니다.',
            },
        ]
    );
    const messagesEnd = React.useRef(null);
    const [isChanged, setChanged] = useState(true);
    let textInput = useRef(null);
    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView();
    };

    useEffect(() => {
        if (messages.length >= 15) messages.shift();
        setMessages([...messages, resMsg]);
        scrollToBottom();
    }, [resMsg]);

    useEffect(() => {
        props.socket.on('update', (data) => {
            if (data) {
                setResMsg(data);
            }
        });
    }, []);

    useEffect(() => {
        document.addEventListener('keyup', HandleKeyUp);
        return () => {
            document.removeEventListener('keyup', HandleKeyUp);
        };
    });

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

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
            } else if (textInput.current.value === '') {
                textInput.current.blur();
            } else {
                sendMessage();
            }
        }
    }

    function PrintMessage() {
        return <></>;
    }

    return (
        <>
            {/* <Grid
            container
            className={classes.button}
            direction={'row'}
            justify={'space-between'}
            wrap={'nowrap'}
            
        > */}
            <GridList style={{ width: '100%', height: '100%' }} wrap={'wrap'}>
                <Grid
                    container
                    direction={'column'}
                    justify={'flex-start'}
                    alignItems={'stretch'}
                    style={{ width: '100%', height: '80%' }}
                >
                    {messages.map((message) => {
                        console.log(messages);
                        if (message === '') return;
                        return (
                            <Grid
                                item
                                style={{
                                    color: 'white',
                                    width: '100%',
                                    height: '1vh',
                                    fontSize: '0.8vw',
                                }}
                                wrap={'wrap'}
                            >
                                {message.author} : {message.message}
                            </Grid>
                        );
                    })}
                    <Grid
                        style={{ float: 'left', clear: 'both', height: '0%' }}
                        ref={messagesEnd}
                    ></Grid>
                </Grid>
            <Grid
                item
                container
                dirction="row"
                style={{ width: '100%', height: '20%' }}
            >
                <Grid item style={{ width: '70%', height: '100%' }}>
                    <CssTextField
                        style={{ width: '100%', height: '100%' }}
                        id="standard-basic"
                        inputRef={textInput}
                        label="메세지 보내기 (최대 20자)"
                        onFocus={() => {
                            isFocus = true;
                            props.SetInputCtrl(true);
                        }}
                        onBlur={() => {
                            isFocus = false;
                            props.SetInputCtrl(false);
                        }}
                        onChange={handleOnChange}
                        variant="outlined"
                        size="small"
                        inputProps={{ maxlength: 20 }}
                    />
                </Grid>
                <Grid item style={{ width: '20%', height: '100%' }}>
                    <button
                        style={{
                            width: '100%',
                            height: '50%',
                            backgroundColor: '#635ee7',
                            fontSize: '0.9vw',
                            color: 'white',
                        }}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            sendMessage();
                        }}
                        label="전송"
                    >
                        전송
                    </button>
                </Grid>
            </Grid>
            </GridList>
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
