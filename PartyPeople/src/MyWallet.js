import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import MyCash from './MyCash';
import MyCoin from './MyCoin';
import MyAsset from './MyAsset';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        '& > *': {
            width: '100%',
            justify: 'center',
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
        // padding: theme.spacing(1),
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
}));
export default function MyWallet(props) {
    let testXs = 12;
    const classes = useStyles();

    return (
        <>
            <Grid
                container
                item
                direction="row"
                alignItems="flex-start"
                wrap="wrap"
                justify="stretch"
                // display="flex"
                style={{
                    height: '40%',
                }}
            >
                <Grid
                    style={{
                        width: '60%',
                        height: '100%',
                        padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                    }}
                    item
                >
                    <MyCash socket={props.socket} />
                </Grid>
                <Grid
                    item
                    style={{
                        width: '40%',
                        height: '100%',
                        padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                    }}
                >
                    <MyCoin socket={props.socket} />
                </Grid>
            </Grid>
            <Grid
                container
                item
                justify="flex-start"
                wrap="wrap"
                alignItems="stretch"
                display="flex"
                style={{
                    height: '60%',
                }}
            >
                <Grid
                    item
                    style={{
                        width: '100%',
                        height: '100%',
                        padding: '0.3vh 0.3vw 0.3vh 0.3vw',
                    }}
                >
                    <MyAsset socket={props.socket} />
                </Grid>
            </Grid>
        </>
    );
}
