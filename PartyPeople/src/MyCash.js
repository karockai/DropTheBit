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
    const [myCash, setCash] = useState(0);
    const [diffCash, setDiffCash] = useState(0);

    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    let color = 'white';
    useEffect(() => {
        if (props.socket == null) {
        } else {
            props.socket.on('refreshWallet', (data) => {
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
            <span>보유 현금</span>
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2vw' }}>
                {ExpBySymbol(parseWonToStr(myCash))}
                {' 원'}
            </h5>
            <div
                id="diffCash"
                class="default"
                style={{ fontWeight: 'bold', fontSize: '1vw' }}
            >
                {' '}
                {showProfit('diffCash', diffCash)}
            </div>
        </Paper>
    );
}
