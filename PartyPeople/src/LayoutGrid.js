import React from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ChartComponent from './ChartComponent';
import ChartTitle from './ChartTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

export default function LayoutGrid(props) {
    console.log(props);
    const classes = useStyles();
    let testXs = 12;
    let leftSm = 2;
    let middleSm = 6;
    let rightSm = 4;
    return (
        <React.Fragment>
            <CssBaseline />
                <Paper style={{backgroundColor: '(0, 0, 0, 0.5)', padding:'15px 0 15px 0', margin: '0 0 2vh 0' }} className={classes.paper}>
                    navigation Bar
                </Paper>
            <Container maxWidth='lg' >
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '90vh' }}>
                    <Grid style={{ height: "100%" }} wrap="wrap" container direction="row" justify="center" alignItems="stretch" spacing={3} >
                        <Grid style={{ height: "100%" }} className="playerListGrid" item xs={leftSm} >
                            <Paper style={{ height: "100%" }} className={classes.paper}>
                                <Grid wrap="wrap" container direction="column" justify="center" alignItems="stretch" spacing={3}>
                                    <Grid item xs={testXs}>
                                        <Paper className={classes.paper}>
                                            content
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={testXs}>
                                        <Paper className={classes.paper}>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={testXs}>
                                        <Paper className={classes.paper}>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={testXs}>
                                        <Paper className={classes.paper}>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid className="stockTradeGrid" item xs={middleSm}>
                            <Paper style={{ height: "100%" }} className={classes.paper}>
                                <Grid style={{ height: "100%" }} wrap="wrap" alignItems="stretch" container direction="column" justify="center"spacing={3}>
                                    <Grid className="chartComponent" style={{ height: "15%" }} item >
                                        <ChartTitle/>
                                    </Grid>
                                    <Grid className="chartComponent" style={{ height: "55%" }} item >
                                        <ChartComponent socket={props.socket}/>
                                    </Grid>
                                    <Grid style={{ height: "30%" }} item>
                                        <Paper style={{ height: "100%" }} className={classes.paper}>xs={testXs}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>

                        </Grid>
                        <Grid className="bidChatGrid" item xs={rightSm}>
                            <Paper style={{ height: "100%" }} className={classes.paper}>
                                <Grid style={{ height: "100%" }} wrap="wrap" alignItems="stretch" container direction="column" justify="center"spacing={3}>
                                    <Grid style={{ height: "60%" }} item >
                                        <Paper style={{ height: "100%" }} className={classes.paper}>xs={testXs}
                                        </Paper>
                                    </Grid>
                                    <Grid style={{ height: "40%" }} item>
                                        <Paper style={{ height: "100%" }} className={classes.paper}>xs={testXs}
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </React.Fragment>
    );
}