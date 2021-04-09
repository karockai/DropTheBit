import React, { useEffect, useState } from 'react';
import { Button, Grid, Paper, makeStyles } from '@material-ui/core';
import { PieChart } from 'react-minimal-pie-chart';
// import BidGraph from './BidGraph';
import HorizontalBarChart from './BidGraph';
import { TypeChooser } from "react-stockcharts/lib/helper";
import { getData } from "./utils"

export default function RefreshGraph(props) {
const [askPercent, setAskPercent] = useState(0);
const [bidPercent, setBidPercent] = useState(0);
const [data, setData] = useState(0);

getData().then(data => {
    setData(data);
})
props.socket.on('refreshExList', (exList) => {
    setAskPercent(exList.askPercent);
    setBidPercent(exList.bidPercent);
});
// const test ={...[{'x':askPercent, 'y':'매수'},{'x':bidPercent, 'y': '매도'}]};
const test =[{'x':askPercent, 'y':'매수'},{'x':bidPercent, 'y': '매도'}];

console.log(data);
// console.log(typeof(data));
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
        {data &&
            <HorizontalBarChart 
            data={[{x:askPercent, y:'매수'},{x:bidPercent, y: '매도'}]}
            />
    }
    </>
)
}