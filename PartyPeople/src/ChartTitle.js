import { blue, red, grey } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core';
import { React, useState, useEffect } from 'react';
import { render } from 'react-dom';

//@ won -> string (4자리 단위로 ',' 끊어주기)
//@ isBullMarket에 따른 color 변경
//@ TimeChecker랑 병렬로 놓게 될 것 고려
//@ 수익률 계산후 문자열 파싱 -> ('+1.33%')
//@ useEffect socket 통신

function ChartTitle(props) {
    const subtit = '이전대비';
    const unit = 'KRW';
    const isBullMarket = true;
    const [textColor, setBullColor] = useState({
        color: isBullMarket ? red[600] : blue[600],
    });
    const [isBullIcon, SetBullIcon] = useState('▲');
    const [wonYield, SetYield] = useState('+' + 1.33 + '%');
    const [beforeWon, SetWonBefore] = useState();
    const [currentWon, SetWonCurrent] = useState(0);
    const [upDown, SetUpDown] = useState(0);

    useEffect(() => {
        return () => {
            const datas = props.data;
            const length = props.data.length;
            const before = datas[length - 2].curPrice;
            const current = datas[length - 1].curPrice;
            const sub = current - before;
            const yid =
                (sub >= 0 ? '+' : '') +
                ((sub / current) * 100).toFixed(2) +
                '%';
            const icon = sub >= 0 ? '▲' : '▼';
            const color = sub >= 0 ? red[600] : blue[600];
            SetWonBefore(before);
            SetWonCurrent(current);
            SetUpDown(sub);
            SetYield(yid);
            SetBullIcon(icon);
            setBullColor({ color: color });
            // console.log({
            //     before : beforeWon,
            //     current : currentWon,
            //     updown : upDown,
            //     icon : isBullIcon,
            //     textColor : textColor,
            // });
        };
    }, [props.data]);


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
        if (value.length >= 9) { // 199489230 -> 1억 9948만 9230
            ret += ( value.substring(0, value.length - 9 + 1)  + '억 ' ) // 1억
            value = value.substring(value.length - 9 + 1);
        }
        if (value.length >= 5) { // value 99489230
            ret += ( value.substring(0, value.length - 5 + 1)  + '만 ' )  // 9948만
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
            <div className="ChartTitle" style={textColor}>
                <span style={{ display: 'block' }}>
                <Grid container justify='space-between'>
                    <Grid>
                        <strong style={{ fontSize: '40px' }}>
                            {SplitByThree(parseWonToStr(currentWon))}
                            
                        </strong>
                        {' ' + unit}
                    </Grid>
                    {/* <Grid>
                        <span style={{ color: grey[900] ,}}>
                            {/* <ShowTime/> */}
                        {/* </span> */}
                    {/* </Grid> */}
                </Grid>
                </span>
                <span>
                    <p
                        style={{
                            fontSize: '12px',
                            color: '#000000',
                            display: 'inline-block',
                        }}
                    >
                        {subtit}
                    </p>
                    <strong>{'   ' + wonYield + '  '}</strong>
                    <strong style={{ display: 'inline' }}>
                        {' ' + isBullIcon + ' ' + parseWonToStr(upDown)}
                    </strong>

                </span>
            </div>
        </>
    );
}

export default ChartTitle;
