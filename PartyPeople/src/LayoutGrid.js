import React, {useEffect} from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TradeStock from './TradeStock';
import MyAsset from './MyAsset';
import BidTab from './bidTab';
import ChatRoom from './ChatRoom';
import PlayerList from './PlayerList';
import ChartComponent from './ChartComponent';
import ChartTitle from './ChartTitle';
import { useSound, playSound } from './useSound';
import Bit from './audios/music/King_Conga.mp3';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

export default function LayoutGrid(props) {
    const classes = useStyles();
    let testXs = 12;
    let leftSm = 2;
    let middleSm = 7;
    let rightSm = 3;
    useSound(Bit, 0.7, 2000);


    useEffect(() => {
        props.socket.on('gameOver', (readerBoard) => {
            if (readerBoard) {
                GameOver(readerBoard);
            }
        });
    }, []);

    const GameOver = (readerBoard) => {
        // modal 띄울 함수 호출
        console.log(readerBoard);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ margin: '2vh 0 0 0' }}>
                    <Grid
                        style={{ height: '100vh' }}
                        wrap="wrap"
                        container
                        direction="row"
                        justify="center"
                        alignItems="stretch"
                        spacing={2}
                    >
                        <Grid className="playerListGrid" item xs={leftSm}>
                            {/* <Paper style={{ height: "100%" }} className={classes.paper}> */}
                            <PlayerList
                                socket={props.socket}
                                requestSocket={props.requestSocket}
                                roomID={props.roomID}
                                roomInfo={props.roomInfo}
                            />
                            {/* </Paper> */}
                        </Grid>
                        <Grid
                            className="stockTradeGrid"
                            container
                            item
                            xs={middleSm}
                            wrap="wrap"
                            alignContents="stretch"
                        >
                            <Grid
                                style={{ height: '90vh' }}
                                item
                                wrap="wrap"
                                alignContents="stretch"
                                alignItems="stretch"
                                container
                                direction="column"
                                justify="center"
                                spacing={2}
                            >
                                <Grid
                                    style={{ height: '50vh' }}
                                    item
                                    alignItems="stretch"
                                >
                                    <Paper
                                        style={{ height: '45vh' }}
                                        className={classes.paper}
                                    >
                                        <ChartComponent
                                            socket={props.socket}
                                            requestSocket={props.requestSocket}
                                            display="flex"
                                            justify-content="center"
                                            align-items="center"
                                        />
                                    </Paper>
                                </Grid>
                                <Grid style={{ height: '40vh' }} item>
                                    <Grid
                                        style={{ height: '100%' }}
                                        wrap="wrap"
                                        alignItems="stretch"
                                        container
                                        direction="row"
                                        justify="space-around"
                                    >
                                        <Grid
                                            style={{
                                                width: '45%',
                                                height: '40vh',
                                            }}
                                            item
                                        >
                                            {/* <Paper style={{ height: "100%" }} > */}
                                            <MyAsset
                                                roomID={props.roomID}
                                                socket={props.socket}
                                                requestSocket={
                                                    props.requestSocket
                                                }
                                            />
                                            {/* </Paper> */}
                                        </Grid>
                                        <Grid
                                            style={{
                                                width: '50%',
                                                height: '40vh',
                                                margin: '0 0 0 2vh',
                                            }}
                                            item
                                        >
                                            <Paper
                                                style={{ height: '40vh' }}
                                                className={classes.paper}
                                            >
                                                <TradeStock
                                                    roomID={props.roomID}
                                                    socket={props.socket}
                                                    requestSocket={
                                                        props.requestSocket
                                                    }
                                                />
                                            </Paper>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid className="bidChatGrid" item xs={rightSm}>
                            <Grid
                                style={{ height: '90vh' }}
                                wrap="wrap"
                                alignItems="stretch"
                                container
                                direction="column"
                                justify="center"
                                spacing={2}
                            >
                                <Grid
                                    style={{ height: '50vh' }}
                                    item
                                    alignItems="stretch"
                                >
                                    <Paper
                                        style={{ height: '45vh' }}
                                        className={classes.paper}
                                    >
                                        <BidTab
                                            socket={props.socket}
                                            requestSocket={props.requestSocket}
                                        />
                                    </Paper>
                                </Grid>
                                <Grid style={{ height: '40vh' }} item>
                                    <Paper
                                        style={{ height: '40vh' }}
                                        className={classes.paper}
                                    >
                                        <ChatRoom
                                            roomID={props.roomID}
                                            socket={props.socket}
                                            chat={props.chat}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </React.Fragment>
    );
}
