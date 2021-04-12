import React, { useEffect, useState, makeStyle, useLayoutEffect } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
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
                fontSize: '1vw',
                padding: '0.3vh 0.3vw 0.3vh 0.3vw',
            }}
        >
            <h6 style={{ paddingLeft: '1px', paddingTop: "4px"}}>현금</h6>
            <h5 style={{ paddingRight: '1px', textAlign: 'left', fontWeight: 'bold', fontSize: '1.4vw' }}>
                {ExpBySymbol(parseWonToStr(myCash))}
                {' 원'}
            </h5>
            <h5
                id="diffCash"
                class="default"s
                style={{ paddingRight: '1px', fontWeight: 'bold', fontSize: '1vw' }}
                align="right"
            >
                {' '}
                {showProfit('diffCash', diffCash, setDiffCash)}
            </h5>
        </Paper>
    );
}
