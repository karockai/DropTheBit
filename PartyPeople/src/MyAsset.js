import React, { useEffect, useState } from 'react';
import { Paper, makeStyles } from '@material-ui/core';
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
    const [myAsset, setAsset] = useState(0);
    const [diffAsset, setDiffAsset] = useState(0);

    const [isInit, setInit] = useState(false);
    if (!isInit) setInit(true);

    let color = 'white';
    useEffect(() => {
        if (props.socket == null) {
        } else {
            props.socket.on('refreshWallet', (data) => {
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
                fontSize: '1.5vw',
                padding: '0.3vh 0.3vw 0.3vh 0.3vw',
            }}
        >
            총 평가 자산
            <h2
                style={{
                    fontWeight: 'bold',
                    fontSize: '2.2vw',
                    color: color,
                }}
            >
                {ExpBySymbol(parseWonToStr(myAsset)) + ' 원'}
            </h2>
            <h2
                id="diffAsset"
                class="default"
                style={{
                    fontWeight: 'bold',
                    fontSize: '1.5vw',
                    color: color,
                }}
            >
                {' '}
                {showProfit('diffAsset', diffAsset)}
            </h2>
        </Paper>
    );
}
