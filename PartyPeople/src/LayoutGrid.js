import React from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
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
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='lg' >
                <Typography component="div" style={{  margin: '2vh 0 0 0' }}>
                    <Grid style={{ height: "100%" }} wrap="wrap" container direction="row" justify="center" alignItems="stretch" spacing={2} >
                        <Grid className="playerListGrid" item xs={leftSm} >
                            {/* <Paper style={{ height: "100%" }} className={classes.paper}> */}
                              <PlayerList roomId={props.roomId} roomInfo={props.roomInfo}/>
                            {/* </Paper> */}
                        </Grid>
                        <Grid className="stockTradeGrid" item xs={middleSm}>
                                <Grid style={{ height: "100%" }} wrap="wrap" alignItems="stretch" container direction="column" justify="center" spacing={2}>
                                    <Grid style={{ height: "60%"}} item>
                                     <Paper style={{ height: "100%" }} className={classes.paper}>
                                        <ChartComponent socket={props.socket} requestSocket={props.requestSocket}/>
                                     </Paper>
                                    </Grid>
                                    <Grid style={{ height: "40%" }} item>
                                        <Grid style={{ height: "100%", }} wrap="wrap" alignItems="stretch" container direction="row" justify="space-around">
                                            <Grid style={{ width: "45%", height: "100%"}} item >
                                                {/* <Paper style={{ height: "100%" }} > */}
                                                    <MyAsset socket ={props.socket} requestSocket={props.requestSocket}/>
                                               {/* </Paper> */}
                                            </Grid>
                                            <Grid style={{ width: "50%", height: "100%", margin: '0 0 0 2vh'}} item > 
                                                <Paper style={{ height: "100%" }} className={classes.paper}>
                                                    <TradeStock socket ={props.socket}  requestSocket={props.requestSocket}/>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                        </Grid>
                        <Grid className="bidChatGrid" item xs={rightSm}>
                                <Grid style={{ height: "100%" }} wrap="wrap" alignItems="stretch" container direction="column" justify="center"spacing={2}>
                                    <Grid style={{ height: "60%" }} item >
                                    <Paper style={{ height: "100%"}} className={classes.paper}>
                                        <BidTab/>
                                    </Paper>
                                    </Grid>
                                    <Grid style={{ height: "40%" }} item>
                                    <Paper style={{ height: "100%"}} className={classes.paper}>
                                        <ChatRoom socket={props.socket} chat={props.chat}/>
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