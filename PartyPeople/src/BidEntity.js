import React, { useState, makeStyle, useLayoutEffect, useEffect } from 'react';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export default function BidEntity(props) {
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
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.primary,
        },
        score: {},
    }));

    const classes = useStyles(greenTheme);
    // const testXs = 12;
    // const [bidInfo, setInfo] = useState([]);
    // const [isInit, setInit] = useState(false);
    // if (!isInit) setInit(true);

    // useLayoutEffect(() => {
    //     let reqJson = {
    //         socketID: props.socket.id,
    //         roomID: props.roomID,
    //     };
    //     props.socket.emit('bidTable_Req', reqJson);

    //     if (props.socket == null) {
    //         props.requestSocket('makeTableEntity', props.socket);
    //         setInit(true);
    //     } else {
    //         props.socket.on('bidTable_Res', (bidTable) => {
    //             setTable(bidTable);
    //         });
    //     }
    // }, [isInit]);

    return (
        <Grid
            wrap="wrap"
            container
            direction="column"
            justify="center"
            alignItems="stretch"
            spacing={2}
        >
            <Paper style={{ height: '4vh' }} className={classes.paper}>
                <Grid container direction="row" alignItems="center">
                    <Grid
                        style={{ width: '50%', height: '4vh' }}
                        className="price"
                    >
                        {props.price}
                    </Grid>
                    <Grid
                        style={{ width: '50%', height: '4vh' }}
                        className="vol"
                    >
                        {props.vol}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    );
}
