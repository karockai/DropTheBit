import React, { useState, makeStyle, useLayoutEffect, useEffect } from 'react';
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

    function ExpBySymbol(value) {
        let ret = '';
        if (value.length >= 9) {
            // 199489230 -> 1억 9948만 9230
            ret += value.substring(0, value.length - 9 + 1) + '억 '; // 1억
            value = value.substring(value.length - 9 + 1);
        }
        if (value.length >= 5) {
            // value 99489230
            ret += value.substring(0, value.length - 5 + 1) + '만'; // 9948만
            value = value.substring(value.length - 5 + 1);
        }
        // ret += value;
        return ret;
    }

    const parseWonToStr = (won) => {
        if (typeof won == 'number') won = won.toString();
        return won;
    };

    let defaultPage = {
        playerID: '',
        asset: '',
    };
    const [myRankPage, setMyRankPage] = useState(defaultPage);
    const [myRank, setMyRank] = useState(null);

    function MyRank() {
        props.socket.once('MyRank', (myRankPage, myRank) => {
            setMyRankPage(myRankPage);
            setMyRank(myRank);
        });
        return (
            <div>
                <Paper
                    className={classes.paper}
                    style={{
                        height: '90%',
                        border: 'solid',
                        borderColor: '#0066bb',
                        margin: '0 0 10px 0',
                        boxShadow: '12px 12px 2px 1px #ffffff',
                    }}
                >
                    <Grid container direction="row" alignItems="center">
                        <Grid
                            style={{ width: '20%', height: '100%' }}
                            className="score"
                        >
                            {'현재 '}
                            {myRank}
                            {'위'}
                        </Grid>
                        <Grid
                            style={{ width: '80%', height: '100%' }}
                            container
                            direction="column"
                            className="score"
                        >
                            <Grid alignItems="right">
                                {myRankPage.playerID}
                            </Grid>
                            <Grid alignItems="right">
                                {ExpBySymbol(parseWonToStr(myRankPage.asset))}원
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }

    return (
        <>
            <MyRank />
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
                            ? blue[200]
                            : '#ffffff';
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
                                        {'위'}
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
                                            {ExpBySymbol(
                                                parseWonToStr(player.asset)
                                            )}
                                            원
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
