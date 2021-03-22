import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';

import { ChartCanvas, Chart } from 'react-stockcharts';
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
    wickStroke: '#000000',
    fill: function fill(d) {
        return d.close > d.open ? red[500] : blue[500];
    },
    stroke: '#303030',
    candleStrokeWidth: 0.5,
    widthRatio: 0.6,
    opacity: 0.6,
};

class StockChart extends React.Component {
    render() {
        const { type, data: initialData, width, ratio } = this.props;

        const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
            (d) => d.date
        );
        const { data, xScale, xAccessor, displayXAccessor } = xScaleProvider(
            initialData
        );

        const start = xAccessor(last(data));
        const end = xAccessor(data[Math.max(0, data.length - 50)]);
        const xExtents = [start, end];

        return (
            <ChartCanvas
                height={235}
                ratio={ratio}
                width={width}
                margin={{ left: 55, right: 70, top: 10, bottom: 30 }}
                type={type}
                seriesName="MSFT"
                data={data}
                xScale={xScale}
                xAccessor={xAccessor}
                displayXAccessor={displayXAccessor}
                xExtents={xExtents}
            >
                <Chart id={1} yExtents={[(d) => [d.high + 0.5, d.low - 0.5]]}>
                    <XAxis axisAt="bottom" orient="bottom" />
                    <YAxis axisAt="right" orient="right" ticks={5} />
                    <MouseCoordinateY
                        at="right"
                        orient="right"
                        displayFormat={format('.2f')}
                    />
                    <CandlestickSeries />
                    <OHLCTooltip forChart={1} origin={[-40, 0]} />
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
