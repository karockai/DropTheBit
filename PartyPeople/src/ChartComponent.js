import React from 'react';
import { render } from 'react-dom';
import { socket } from 'socket.io-client';
import StockChart from './StockChart';
import ChartTitle from './ChartTitle';
import { getData } from './utils';
import { tsvParse, csvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';
import { CircularProgress, Grid } from '@material-ui/core';
import Timer from './Timer';

class ChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            coinName : '',
        };
    }
    componentDidUpdate() {}
    componentWillMount() {
        if (this.props.socket === null) {
            this.props.requestSocket('ChartComponent');
        }
    }
    componentDidMount() {
        //@ 소켓 통신 대기
    }
    setup = true;
    setAPI = false;
    addCandleData = (data) => {
        if (data === null) {
            // console.log('하늘소....하늘소.. 응답하라....');
            return;
        }
        const coinName = data.coinName;
        // const date = data.date.split('.')[0];
        
        // let date = data.date;
        // console.log(date);
        // if (typeof(date)==='object') {
        //     JSON.stringify(data);
        //     // date = data.date.split('.');
        //     console.log(date);
        // }
        data.date = new Date(data.date);
        const tmp_date = JSON.stringify(data.date).split('"');
        // console.log(typeof(date));
        if (!this.setAPI) {
            this.props.setAPIData(data);
            this.setAPI = true;
        }
        if (this.state.data.length >= 150) this.state.data.shift();
        this.setState({ data: [...this.state.data, data],coinName: coinName, date: tmp_date[1]});
        // console.log(this.state.datas);
        // getData(this.state.datas).then(data => {
        // })
    };
    render() {
        const dataLength = this.state.data.length;

        if (this.setup) {
            //@ candle data callback
            if (this.props.socket == null) {
                // this.props.requestSocket('ChartComponent');
            }
            if (this.props.requestSocket == null) {
                // console.log('requestSocket is null');
            } else if (this.props.socket != null) {
                this.props.socket.emit('chartData_Req');
                this.props.socket.on('chartData_Res', (datas) => {
                    // console.log('게임 시작 이전의 차트 데이터(최대 100tick)가 로드되었습니다.');
                    
                    datas.chartData.map((data) => {
                        this.addCandleData(data);
                    });
                    this.props.socket.on('chart', (data) => {
                        this.addCandleData(data);
                        // console.log(data.coinName);
                    });
                });
                this.setup = false;
            }
        }

        if (this.props.socket == null || dataLength < 2) {
            return (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '30vh',
                    }}
                >
                    <CircularProgress />
                </div>
            );
        }
        // console.log(this.props.time);
        return (
            <>
                <Grid
                    container
                    // justify={'space-between'}
                    style={{ padding: '1vh', width:'100%' }}
                >
                    <ChartTitle 
                        data={this.state.data} 
                        coinName = {this.state.coinName} 
                        date={this.state.date}
                        time={this.props.time} 
                        isStart={this.props.isStart} 
                        socket={this.props.socket}
                    />
                    {/* {this.props.isStart && <Timer socket={this.props.socket} />} */}
                    {/* <h2>출처</h2> */}
                </Grid>
                <StockChart type={'hybrid'} data={this.state.data} />
            </>
        );
    }
}

export default ChartComponent;
