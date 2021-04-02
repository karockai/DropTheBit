import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';

import { ChartCanvas, Chart } from 'react-stockcharts';
import {
	PriceCoordinate
} from "react-stockcharts/lib/coordinates";
import { BarSeries, CandlestickSeries } from 'react-stockcharts/lib/series';
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
    wickStroke: '#ffffff',
    fill: function fill(d) {
        return d.close > d.open ? red[600] : blue[600];
    },
    stroke: '#000000',
    candleStrokeWidth: 1,
    widthRatio: 0.8,
    opacity: 1,
};

class StockChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: window.innerHeight * 0.3,
            width: window.innerWidth * 0.4,
        };

        this.dataHigh = 0
        this.dataLow = 99999999999
    }

    handleResize = () => {
        this.setState({
            height: window.innerHeight * 0.3,
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
        const end = xAccessor(data[Math.max(0, data.length - 100)]);
        const xExtents = [start, end];
        this.dataHigh = last(data).high > this.dataHigh ? last(data).high : this.dataHigh;
        this.dataLow = last(data).low < this.dataLow ? last(data).low : this.dataLow;
        return (
            <ChartCanvas
                height={this.state.height}
                ratio={ratio}
                width={width}
                margin={{ left: 55, right: 70, top: 10, bottom: 30 }}
                type={type}
                seriesName="MACD"
                data={data}
                xScale={xScale}
                xAccessor={xAccessor}
                displayXAccessor={displayXAccessor}
                xExtents={xExtents}
            >
                {/* <Chart id={1} yExtents={[(d) => [d.high + 0.5, d.low - 0.5]]}> */}
                <Chart id={1} yExtents={[this.dataHigh * 1.0005, this.dataLow * 0.9995]}>
                    <XAxis axisAt="bottom" orient="bottom" />
                    <YAxis axisAt="right" orient="right" ticks={5} />
                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format('.2f')}
                    />
                    <PriceCoordinate
                        at="right"
                        orient="right"
                        price={this.dataLow}
                        stroke="#3490DC"
                        strokeWidth={1}
                        fill="blue"
                        textFill="#ffffff"
                        arrowWidth={7}
                        strokeDasharray="ShortDash"
                        displayFormat={format('.2f')}
                    />

                    <PriceCoordinate
                        at="right"
                        orient="right"
                        price={this.dataHigh}
                        stroke="#3490DC"
                        strokeWidth={1}
                        fill="red"
                        textFill="#ffffff"
                        arrowWidth={7}
                        strokeDasharray="ShortDash"
                        displayFormat={format('.2f')}
                    />
                    <CandlestickSeries {...candlesAppearance} />
                    {/* <OHLCTooltip forChart={1} origin={[-40, 0]} /> */}
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
