import { blue, red, grey } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
import { render } from 'react-dom';
import './blink.css';

import Order from './Order';
//@ won -> string (4자리 단위로 ',' 끊어주기)
//@ isBullMarket에 따른 color 변경
//@ TimeChecker랑 병렬로 놓게 될 것 고려
//@ 수익률 계산후 문자열 파싱 -> ('+1.33%')
//@ useEffect socket 통신

function ChartTitle(props) {
    const subtit = '이전대비';
    const unit = 'KRW';
    const datas = props.data;
    const length = props.data.length;
    const before = datas[length - 2].close;
    const current = datas[length - 1].close;
    const sub = current - before;
    const yid =
        (sub >= 0 ? '+' : '') + ((sub / current) * 100).toFixed(2) + '%';
    const icon = sub >= 0 ? '▲' : '▼';
    const color = { color: sub >= 0 ? red[600] : blue[600] };

    // useEffect(() => {
    //     return () => {
    //         SetWonBefore(before);
    //         SetWonCurrent(current);
    //         SetUpDown(sub);
    //         SetYield(yid);
    //         SetBullIcon(icon);
    //         setBullColor({ color: color });
    //     };
    // }, [props.data]);

    function SplitByThree(value) {
        if (value.length <= 3) return value;
        return (
            SplitByThree(value.substring(0, value.length - 3)) +
            ',' +
            value.substring(value.length - 3, value.length)
        );
    }

    function ExpBySymbol(value) {
        let ret = '';
        if (value.length >= 9) {
            // 199489230 -> 1억 9948만 9230
            ret += value.substring(0, value.length - 9 + 1) + '억 '; // 1억
            value = value.substring(value.length - 9 + 1);
        }
        if (value.length >= 5) {
            // value 99489230
            ret += value.substring(0, value.length - 5 + 1) + '만 '; // 9948만
            value = value.substring(value.length - 5 + 1);
        }
        ret += value;
        return ret;
    }

    const parseWonToStr = (won) => {
        if (typeof won == 'number') won = won.toString();
        return won;
    };

    return (
        <>
            <div className="ChartTitle" style={{ width: '100%' }}>
                {/* <span style={{ display: 'block' }}> */}
                {/* <Grid container direction={'row'} justify={'space-between'}> */}
                <Grid container direction={'row'} justify={'space-between'}>
                    <Grid item style={color}>
                        <strong style={{ fontSize: '3vw' }}>
                            {SplitByThree(
                                parseWonToStr(props.data[length - 1].close)
                            )}
                        </strong>
                        <span style={{ color: 'white', fontSize: '1vw' }}>
                            {' ' + unit}
                        </span>
                    </Grid>
                    <Grid item>
                        <Order socket={props.socket} />
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction={'row'}
                    justify={'space-between'}
                    alignItems={'flex-start'}
                >
                    <Grid>
                        <span>
                            <p
                                style={{
                                    fontSize: '0.8vw',
                                    color: '#ffffff',
                                    display: 'inline-block',
                                }}
                            >
                                {subtit}
                            </p>
                            <span style={color}>
                                <strong
                                    style={{
                                        fontSize: '1vw',
                                        display: 'inline',
                                    }}
                                >
                                    {'   ' + yid + '  '}
                                </strong>
                                <strong
                                    style={{
                                        fontSize: '1vw',
                                        display: 'inline',
                                    }}
                                >
                                    {' ' + icon + ' ' + parseWonToStr(sub)}
                                </strong>
                            </span>
                        </span>
                        <span>{/* {name} */}</span>
                    </Grid>
                    <Grid>
                        <span style={{ color: 'gray',fontSize: '1vw', }}>{props.date}</span>
                        <span style={{fontSize: '1vw',}}> {props.coinName}</span>
                    </Grid>
                </Grid>
                {/* </span> */}
            </div>
        </>
    );
}

export default ChartTitle;
