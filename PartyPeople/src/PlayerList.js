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
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.primary,
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
                console.log(playerArray);
                setPlayers(playerArray);
            });
        }
    }, [isInit]);

    return (
        <Grid
            wrap="wrap"
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={2}
        >
            {players.map((player, index) => {
                return (
                    <Grid item xs={testXs}>
                        <Paper
                            style={{ height: '9.8vh' }}
                            className={classes.paper}
                        >
                            <Grid container direction="row" alignItems="center">
                                <Grid
                                    style={{ width: '20%', height: '5vh' }}
                                    className="score"
                                >
                                    {'No.'}
                                    {index + 1}
                                </Grid>
                                <Grid>
                                    <Grid
                                        container
                                        direction="col"
                                        className="score"
                                    >
                                        <Grid alignItems="right">
                                            {player.playerID}
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        container
                                        direction="col"
                                        className="score"
                                    >
                                        <Grid alignItems="right">
                                            {player.asset}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                );
            })}
        </Grid>
    );
}
