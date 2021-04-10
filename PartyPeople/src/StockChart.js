import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';

import { ChartCanvas, Chart } from 'react-stockcharts';
import { PriceCoordinate } from 'react-stockcharts/lib/coordinates';
import { BarSeries, CandlestickSeries,    LineSeries,
    ScatterSeries,
    CircleMarker,
    SquareMarker,
    TriangleMarker, } from 'react-stockcharts/lib/series';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import {
    CrossHairCursor,
    MouseCoordinateX,
    MouseCoordinateY,
} from 'react-stockcharts/lib/coordinates';

import { discontinuousTimeScaleProvider } from 'react-stockcharts/lib/scale';
import { OHLCTooltip } from 'react-stockcharts/lib/tooltip';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { last } from 'react-stockcharts/lib/utils';
import { blue, red } from '@material-ui/core/colors';

const candlesAppearance = {
    wickStroke: '#999999',
    fill: function fill(d) {
        return d.close > d.open ? red[600] : blue[600];
    },
    stroke: '#000000',
    candleStrokeWidth: 1,
    widthRatio: 0.8,
    opacity: 0.3,
};


class StockChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight * 0.5,
            width: window.innerWidth * 0.4,
        };

        this.dataHigh = 0;
        this.dataLow = 99999999999;
        this.currentBuy = 0;
        this.currentSell = 0;
        this.current = 0;
    }

    handleResize = () => { 
        this.setState({
            height: window.innerHeight * 0.5,
            width: window.innerWidth * 0.4,
        });
    };

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const { type, data: initialData, width, ratio } = this.props;

        const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
            (d) => d.date
        );
        const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
            initialData
        );

        const start = xAccessor(last(data));
        const close = last(data);
        const end = xAccessor(data[Math.max(0, data.length - 100)]);
        const xExtents = [start, end];
        this.dataHigh =
            last(data).high > this.dataHigh ? last(data).high : this.dataHigh;
        this.dataLow =
            last(data).low < this.dataLow ? last(data).low : this.dataLow;
        this.close =
            last(data).close < this.close ? last(data).close : this.close;
        this.currentSell = last(data).sell;
        this.currentBuy = last(data).buy;

        // chart 
        // 6가지의 소켓통신을 받도록해야함
        
        return (
            <ChartCanvas
                height={this.state.height}
                ratio={ratio}
                width={width}
                margin={{ left: 50, right: 100, top: 10, bottom: 50 }}
                type={type}
                seriesName="MACD"
                data={data}
                xScale={xScale}
                xAccessor={xAccessor}
                displayXAccessor={displayXAccessor}
                xExtents={xExtents}
            >
                {/* <Chart id={1} yExtents={[(d) => [d.high + 0.5, d.low - 0.5]]}> */}
                <Chart
                    id={1}
                    // yExtents={[this.dataHigh * 1.0005, this.dataLow * 0.9995]}
                    yExtents={d=> [d.high * 1.001, d.low * 0.999]}
                >
                    <XAxis axisAt="bottom" orient="bottom" />
                    <YAxis axisAt="right" orient="right" ticks={5} />
                    {/* <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format('.2f')}
                    /> */}

                    {/* <PriceCoordinate
                        at="left"
                        orient="left"
                        price={this.dataLow}
                        stroke="#3490DC"
                        // stroke="#fff"
                        strokeWidth={1}
                        fill="#ffffff"
                        textFill="#000"
                        arrowWidth={7}
                        lineStroke="#ffffff"
                        strokeDasharray="ShortDash"
                        displayFormat={format('.2f')}
                    />
                    <PriceCoordinate
                        at="left"
                        orient="left"
                        price={this.dataHigh}
                        stroke="#3490DC"
                        strokeWidth={1}
                        fill="#ffffff"
                        lineStroke="#ffffff"
                        textFill="#000"
                        arrowWidth={7}
                        strokeDasharray="ShortDash"
                        displayFormat={format('.2f')}
                    /> */}
                    <CandlestickSeries {...candlesAppearance} />
                    <PriceCoordinate
                    className="현재가격"
                    at="right"
                    orient="right"
                    price={last(data).close}
                    stroke="green"
                    fill="green"
                    textFill="#fff"
                    lineStroke="green"
                    strokeDasharray="ShortDot"
                
                    arrowWidth={3}
                    displayFormat={format('.2f')}
                    />
                    <PriceCoordinate
                        className="매수주문"
                        at="right"
                        orient="right"
                        price={this.props.currentBuy}
                        stroke="red"
                        strokeWidth={2}
                        fill="transperent"
                        lineStroke="red"
                        textFill="#fff"
                        arrowWidth={7}
                        strokeDasharray="Dot"
                        displayFormat={format('.2f')}
                    />
                        <PriceCoordinate
                        className="매도주문"
                        at="right"
                        orient="right"
                        price={this.props.currentSell}
                        stroke="#0088ff"
                        strokeWidth={2}
                        fill="transperent"
                        lineStroke="#0088ff"
                        textFill="#fff"
                        arrowWidth={7}
                        strokeDasharray="Dot"
                        displayFormat={format('.2f')}
                    />
                        <PriceCoordinate
                        className="매수체결"
                        at="right"
                        orient="right"
                        price={this.props.doneBuy}
                        stroke="white"
                        strokeWidth={2}
                        fill="red"
                        lineStroke="red"
                        textFill="#fff"
                        arrowWidth={7}
                        strokeDasharray="Solid"
                        displayFormat={format('.2f')}
                    />
                        <PriceCoordinate
                        className="매도체결"
                        at="right"
                        orient="right"
                        price={this.props.doneSell}
                        stroke="white"
                        strokeWidth={2}
                        fill="#0088ff"
                        lineStroke="#0088ff"
                        textFill="#fff"
                        arrowWidth={7}
                        strokeDasharray="Solid"
                        displayFormat={format('.2f')}
                    />


                        <PriceCoordinate
                        className="나의호가"
                        at="right"
                        orient="right"
                        price={this.props.bid}
                        stroke="#7974f2"
                        strokeWidth={1}
                        fill="#635ee7"
                        lineStroke="white"
                        textFill="#fff"
                        arrowWidth={6}
                        strokeDasharray="ShortDot"
                        displayFormat={format('.2f')}
                    />
                    
                    {/* <OHLCTooltip forChart={1} origin={[-40, 0]} /> */}
                    
                    <LineSeries
                        yAccessor={close => close.close}
                        stroke='#00ff00'
                        strokeWidth={1.5}
                        strokeDasharray="solid"
                    />
                    <ScatterSeries
                        yAccessor={close => close.close}
                        marker={SquareMarker}
                        markerProps={{
                            width: 3,
                            stroke: '#00ffff',
                            fill: '#00ffff',
                        }}
                    />
                </Chart>
                <CrossHairCursor />
            </ChartCanvas>
        );
    }
}

StockChart.propTypes = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    ratio: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['svg', 'hybrid']).isRequired,
};

StockChart.defaultProps = {
    type: 'svg',
};
StockChart = fitWidth(StockChart);

export default StockChart;