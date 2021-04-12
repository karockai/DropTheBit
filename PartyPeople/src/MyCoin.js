import React, { useEffect, useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import { showProfit, SplitByThree } from './parseMoney';

const useStyles = makeStyles((theme) => ({
    paper: {
        // padding: theme.spacing(1),
        textAlign: 'left',
        color: '#CDD7E0',
        backgroundColor: '#0C151C',
    },
}));

export default function MyCoin(props) {
    const classes = useStyles();
    const [myCoin, setCoin] = useState(0);
    const [diffCoin, setDiffCoin] = useState(0);

    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    let color = 'white';
    useEffect(() => {
        if (props.socket == null) {
        } else {
            props.socket.on('refreshCoin', (data) => {
                const bfrCoin = data.bfrWallet.coinVol;
                const curCoin = data.refreshWallet.coinVol;
                const diffCoin = curCoin - bfrCoin;

                setCoin(curCoin);
                setDiffCoin(diffCoin);
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
            <h3 style={{fontSize: '1vw' }}>보유 코인 수</h3>
            <h5 style={{ fontWeight: 'bold', fontSize: '1.4vw' }}>
                {SplitByThree(String(myCoin)) + ' 개'}
            </h5>
            <h5
                id="diffCoin"
                class="default"
                style={{ fontWeight: 'bold', fontSize: '1vw' }}
                align='right'
            >
                {' '}
                {showProfit('diffCoin', diffCoin, setDiffCoin)}
            </h5>
        </Paper>
    );
}