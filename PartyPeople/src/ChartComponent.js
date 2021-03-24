import React from 'react';
import { render } from 'react-dom';
import { socket } from 'socket.io-client';
import StockChart from './StockChart';
import ChartTitle from './ChartTitle';
import { getData } from './utils';
import { tsvParse, csvParse } from 'd3-dsv';
import { timeParse } from 'd3-time-format';
import CircularProgress from '@material-ui/core/CircularProgress';

class ChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }
    componentDidUpdate() {}
    componentWillMount() {
        console.log('[ componentWillMount ]', this.props.socket);
        if (this.props.socket === null) {
            this.props.requestSocket('ChartComponent');
        }
    }
    componentDidMount() {
        //@ 소켓 통신 대기
    }
    setup = true;
    day = 0;
    addCandleData = (data) => {
        if (data === null) {
            console.log('알수 없는 데이터가 서버로부터 받아짐..하늘소..');
            return;
        }
        data.date = new Date(data.date);

        this.setState({ data: [...this.state.data, data] });
        // console.log(this.state.datas);
        // getData(this.state.datas).then(data => {
        // })
    };
    render() {
        const dataLength = this.state.data.length;

        if (this.setup) {
            //@ candle data callback
            if (this.props.socket == null) {
                this.props.requestSocket('ChartComponent');
            }
            if (this.props.requestSocket == null) {
                console.log('requestSocket is null');
            } else if (this.props.socket != null) {
                // console.log('EMIT');
                // const chart = () => {
                //     this.props.socket.emit('chart', null);
                //     console.log(('request Data from CLIENT.'))
                // }
                // setInterval(chart, 200);
                this.props.socket.on('chartData', (datas) =>{
                    console.log(datas)
                    datas.chartData.map((data) => {
                        this.addCandleData(data);
                    })
                });
                this.props.socket.on('chart', (data) => {
                    // console.log(data);
                    this.addCandleData(data);
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
        return (
            <>
                <ChartTitle data={this.state.data} time={this.props.time} />
                <StockChart type={'hybrid'} data={this.state.data} />
            </>
        );
    }
}

export default ChartComponent;
