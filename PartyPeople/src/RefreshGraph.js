import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
// import BidGraph from './BidGraph';
import HorizontalBarChart from './BidGraph';
import { TypeChooser } from "react-stockcharts/lib/helper";
import { getData } from "./utils"

export default function RefreshGraph(props) {
const [askPrice, setAskPrice] = useState('');
const [bidPrice, setBidPrice] = useState('');
const [askPercent, setAskPercent] = useState('');
const [bidPercent, setBidPercent] = useState('');

props.socket.on('refreshExList', (exList) => {
    console.log(exList);
    if(exList.askPercent) {
        setAskPrice(exList.askPrice);
        setBidPrice(exList.bidPrice);
        setAskPercent(exList.askPercent);
        setBidPercent(exList.bidPercent);
    }
});

return (
    <>
    <h5>호가 거래 비율</h5>
    {/* <PieChart
        data={[
            { title: '매도', value: bidPercent, color: '#1e88e5' },
            { title: '매수', value: askPercent, color: '#e53935' },
        ]}
        // label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
        label={({ dataEntry }) => dataEntry.title}
        /> */}
        {
            askPercent &&
            <HorizontalBarChart 
            // data={[{x:bidPercent, y: '매도'},{x:askPercent, y:'매수'}]}
            data={[{x:bidPercent, y: bidPrice},{x:askPercent, y:askPrice}]}
            bidPrice = {bidPrice}
            askPrice = {askPrice}
            />
    }
    </>
)
}