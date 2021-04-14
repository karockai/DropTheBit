import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
// import BidGraph from './BidGraph';
import HorizontalBarChart from './BidGraph';
import { TypeChooser } from 'react-stockcharts/lib/helper';
import { getData } from './utils';
import { SplitByThree } from './parseMoney';

export default function RefreshGraph(props) {
    const [askPrice, setAskPrice] = useState('');
    const [bidPrice, setBidPrice] = useState('');
    const [askPercent, setAskPercent] = useState('');
    const [bidPercent, setBidPercent] = useState('');

    props.socket.on('refreshExList', (exList) => {
        if (exList.askPercent) {
            setAskPrice(SplitByThree(String(exList.askPrice)));
            setBidPrice(SplitByThree(String(exList.bidPrice)));
            setAskPercent(exList.askPercent);
            setBidPercent(exList.bidPercent);
        }
    });

    return (
        <>
            <h5 style={{fontSize: '1vw',}}>매수/매도 비율</h5>
            {askPercent && (
                <HorizontalBarChart
                    data={[
                        { x: bidPercent, y: bidPrice },
                        { x: askPercent, y: askPrice },
                    ]}
                    bidPrice={bidPrice}
                    askPrice={askPrice}
                />
            )}
        </>
    );
}
