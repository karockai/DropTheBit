import React, { useEffect, useState } from 'react';
import {     Grid,Paper, makeStyles } from '@material-ui/core';
import {
    showProfit,
    SplitByThree,
    parseWonToStr,
    ExpBySymbol,
} from './parseMoney';

const useStyles = makeStyles((theme) => ({
    paper: {
        // padding: theme.spacing(1),
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
}));

export default function MyAsset(props) {
    const classes = useStyles();
    const [myAsset, setAsset] = useState(100000000);
    const [diffAsset, setDiffAsset] = useState(0);

    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    let color = 'white';
    useEffect(() => {
        if (props.socket == null) {
        } else {
            props.socket.on('refreshAsset', (data) => {
                const bfrAsset = data.bfrWallet.asset;
                const curAsset = data.refreshWallet.asset;
                const diffAsset = curAsset - bfrAsset;

                setAsset(curAsset);
                setDiffAsset(diffAsset);
            });
        }
    }, [isInit]);

    return (
        <Paper
            className={classes.paper}
            style={{
                height: '100%',
                // fontSize: '1vw',
                padding: '2% 2% 0 2%',
                border: 'solid',
                borderColor: '#2D4053',
            }}
        >
            <h4 style={{ paddingLeft: '1px', paddingTop: "4px", marginBottom:'0'}}>자산</h4>
            {/* <h2
                style={{
                    paddingRight: '1px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: '2.2vw',
                    color: color,
                }}
            >
                {ExpBySymbol(parseWonToStr(myAsset)) + ' 원'}
            </h2> */}
            <Grid container style={{margin: '0' }} justify='center' alignItems='center'>
                <h5 style={{ paddingRight: '1%', paddingBottom: '0', textAlign: 'left', fontWeight: 'bold', fontSize: '2.2vw', color:'white', marginBottom:'0' }}>
                {ExpBySymbol(parseWonToStr(myAsset))}
                </h5>
                <h5 style={{fontWeight: 'bold', fontSize: '2vw', color:'white', marginBottom:'0' }}>
                    &nbsp;원
                </h5>
            </Grid>
            <h2
                id="diffAsset"
                class="default"
                style={{
                    paddingRight: '1px',
                    fontWeight: 'bold',
                    fontSize: '1.5vw',
                    color: color,
                    margin:'0',
                }}
                align="right"
            >
                {' '}
                {showProfit('diffAsset', diffAsset, setDiffAsset)}
            </h2>
        </Paper>
    );
}
