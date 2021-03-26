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
            console.log('하늘소....하늘소.. 응답하라....');
            return;
        }
        data.date = new Date(data.date);
        if(!this.setAPI) {
            this.props.setAPIData(data);
            this.setAPI = true;
        }

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
                this.props.socket.on('chartData', (datas) =>{
                    console.log('게임 시작 이전의 차트 데이터(최대 50tick)가 로드되었습니다.');
                    datas.chartData.map((data) => {
                        this.addCandleData(data);
                    })
                });
                console.log('hihihihihihiihi');
                this.props.socket.on('chart', (data) => {
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
                <ChartTitle coinName ={this.props.APIdata.coinName} data={this.state.data} time={this.props.time} />
                <StockChart type={'hybrid'} data={this.state.data} />
            </>
        );
    }
}

export default ChartComponent;
