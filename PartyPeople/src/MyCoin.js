import React, { useEffect, useState } from 'react';
import { Grid,Paper, makeStyles } from '@material-ui/core';
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
                // fontSize: '1vw',
                padding: '3% 3% 0 3%',
                border: 'solid',
                borderColor: '#2D4053',
            }}
        >
        <h6 style={{ paddingLeft: '1%', paddingTop: "1%", marginBottom:'0.5vh', marginBottom:'0'}}>코인</h6>
            {/* <h5 style={{ paddingRight: '1px', textAlign: 'left', fontWeight: 'bold', fontSize: '1.4vw', color:'white' }}>
                {SplitByThree(String(myCoin)) + ' 개'}
            </h5> */}
            <Grid container style={{margin: '1%'}} justify='center' alignItems='center'>
                <h5 style={{ paddingRight: '1%', textAlign: 'left', fontWeight: 'bold', fontSize: '1.4vw', color:'white', marginBottom:'0' }}>
                {SplitByThree(String(myCoin))}
                </h5>
                <h5 style={{fontWeight: 'bold', fontSize: '1.3vw', color:'white', marginBottom:'0' }}>
                    &nbsp;개
                </h5>
            </Grid>
            <h5
                id="diffCoin"
                class="default"
                style={{ paddingRight: '1px', fontWeight: 'bold', fontSize: '1vw' }}
                align='right'
            >
                {' '}
                {showProfit('diffCoin', diffCoin, setDiffCoin)}
            </h5>
        </Paper>
    );
}
