import React, { useEffect, useState, makeStyle, useLayoutEffect } from 'react';
import {
    Grid,
    Paper,
    makeStyles,
} from '@material-ui/core';
import { propTypes } from 'react-bootstrap/esm/Image';
// import {SplitByThree, ExpBySymbol, parseWonToStr} from './parseMoney';
import { ExpBySymbol, parseWonToStr, showProfit } from './parseMoney';

const useStyles = makeStyles((theme) => ({
    paper: {
        // padding: theme.spacing(1),
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
}));

export default function MyCash(props) {
    const classes = useStyles();
    const [myCash, setCash] = useState(100000000);
    const [diffCash, setDiffCash] = useState(0);

    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    let color = 'white';
    useEffect(() => {
        if (props.socket == null) {
        } else {
            props.socket.on('refreshCash', (data) => {
                const bfrCash = data.bfrWallet.cash;
                const curCash = data.refreshWallet.cash;
                const diffCash = curCash - bfrCash;

                setCash(curCash);
                setDiffCash(diffCash);
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
            <h6 style={{ paddingLeft: '1%', paddingTop: "1%", marginBottom:'0'}}>현금</h6>
            <Grid container style={{margin: '0' }} justify='center' alignItems='center'>
                <h5 style={{ paddingRight: '1%', textAlign: 'left', fontWeight: 'bold', fontSize: '1.4vw', color:'white', marginBottom:'0'}}>
                    {ExpBySymbol(parseWonToStr(myCash))}
                </h5>
                <h5 style={{fontWeight: 'bold', fontSize: '1.3vw', color:'white', marginBottom:'0' }}>
                    &nbsp;원
                </h5>
            </Grid>
            <h5
                id="diffCash"
                class="default"s
                style={{ paddingRight: '1%', fontWeight: 'bold', fontSize: '1vw' }}
                align="right"
            >
                {' '}
                {showProfit('diffCash', diffCash, setDiffCash)}
            </h5>
        </Paper>
    );
}
