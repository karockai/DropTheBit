import React, { useState, makeStyle, useLayoutEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {
    IconButton,
    Button,
    Box,
    TextField,
    GridList,
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const greenTheme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(1),
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
    score: {},
}));

function MakePlayerPaper(props) {
    const classes = useStyles(greenTheme);

    return (
        <Paper style={{ height: '9.8vh' }} className={classes.paper}>
            <Grid container direction="row" alignItems="center">
                <Grid style={{ width: '20%', height: '5vh' }} className="score">
                    {props.index}
                </Grid>
                <Grid>
                    <Grid container direction="col" className="score">
                        <Grid>{props.player.playerID}</Grid>
                    </Grid>
                    <Grid container direction="col" className="score">
                        <Grid>{props.player.asset}</Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default function PlayerList(props) {
    const classes = useStyles(greenTheme);
    const testXs = 12;
    const [players, setPlayers] = useState([
        {
            socketID: 'socketID',
            playerID: 'playerID',
            asset: 'asset',
        },
    ]);
    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    useLayoutEffect(() => {
        if (props.socket == null) {
            props.requestSocket('MakePlayerPaper', props.socket);
            setInit(true);
        } else {
            props.socket.on('roomRank', (playerArray) => {
                // console.log(playerArray)
                setPlayers(playerArray);
            });
        }
    }, [isInit]);

    return (
        <>
            {players.map((player, index) => {
                if (player.socketID === props.socket.id) {
                    return (
                        <div>
                            <Paper
                                className={classes.paper}
                                style={{
                                    height: '90%',
                                    border: 'solid',
                                    borderColor: '#2D4053',
                                    margin: '0 0 10px 0',
                                    // boxShadow: '12px 12px 2px 1px #ffffff',
                                }}
                            >
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Grid
                                        style={{ width: '20%', height: '100%' }}
                                        className="score"
                                    >
                                        {index + 1}
                                        {'위.'}
                                    </Grid>
                                    <Grid
                                        style={{ width: '80%', height: '100%' }}
                                        container
                                        direction="column"
                                        className="score"
                                    >
                                        <Grid alignItems="right">{player.playerID}</Grid>
                                        <Grid alignItems="right">{player.asset}</Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>
                    );
                }
            })}

            <Grid
                wrap="wrap"
                container
                direction="column"
                justify="center"
                alignItems="stretch"
                spacing={2}
            >
                {players.map((player, index) => {
                    const myColor =
                        player.socketID === props.socket.id
                            ? '#2D4053'
                            : '#0C151C';
                    const myFont =
                        player.socketID === props.socket.id ? 'bold' : 'normal';
                    return (
                        <Grid item xs={testXs}>
                            <Paper
                                style={{
                                    height: '9.8vh',
                                    backgroundColor: myColor,
                                    fontWeight: myFont,
                                }}
                                className={classes.paper}
                            >
                                <Grid
                                    container
                                    direction="row"
                                    alignItems="center"
                                >
                                    <Grid
                                        style={{ width: '20%', height: '100%' }}
                                        className="score"
                                    >
                                        {index + 1}
                                        {'위.'}
                                    </Grid>
                                    <Grid
                                        style={{ width: '80%', height: '100%' }}
                                        container
                                        direction="column"
                                        className="score"
                                    >
                                        <Grid alignItems="right">
                                            {player.playerID}
                                        </Grid>
                                        <Grid alignItems="right">
                                            {player.asset}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
}
