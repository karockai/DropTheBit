import { blue, red } from '@material-ui/core/colors';
import { React, useState, useEffect } from 'react';
import { render } from 'react-dom';

//@ won -> string (4자리 단위로 ',' 끊어주기)
//@ isBullMarket에 따른 color 변경
//@ TimeChecker랑 병렬로 놓게 될 것 고려
//@ 수익률 계산후 문자열 파싱 -> ('+1.33%')
//@ useEffect socket 통신

function ChartTitle(props) {
    const subtit = '전일대비';
    const unit = 'KRW';
    const isBullMarket = true;
    const [textColor, setBullColor] = useState({
        color: isBullMarket ? red[600] : blue[600],
    });
    const [isBullIcon, SetBullIcon] = useState('▲')
    const [wonYield, SetYield] = useState('+'+1.33 +'%');
    const [beforeWon, SetWonBefore] = useState()
    const [currentWon, SetWonCurrent] = useState(68099000);
    const [upDown, SetUpDown] = useState(957000);

    useEffect(() => {
        return () => {
            const datas = props.data;
            const length = props.data.length;
            const before = parseInt(datas[length - 2].high * 10000);
            const current = parseInt(datas[length - 1].high * 10000);
            const sub = current - before;
            const yid = (sub >=0? '+' : '') + (sub / current * 100).toFixed(2) + '%';
            const icon = sub >= 0 ? '▲' : '▼';
            const color = sub >= 0 ? red[600] : blue[600];
            SetWonBefore(before);
            SetWonCurrent(current);
            SetUpDown(sub);
            SetYield(yid);
            SetBullIcon(icon)
            setBullColor({color: color});
            console.log({ 
                before : beforeWon,
                current : currentWon,
                updown : upDown,
                icon : isBullIcon,
                textColor : textColor,
            });
            console.log(isBullIcon);
            // console.log(props);
            // console.log(props.data.length);
        };
    }, [props.data]);
    
    function SplitByThree(value) {
        if(value.length <= 3) return value;
        return SplitByThree(value.substring(0,value.length - 3)) + ',' + value.substring(value.length - 3, value.length); 
    }

    const parseWonToStr = (won) => {
        if(typeof(won) == "number") won = won.toString();
        return SplitByThree(won);
    }
    console.log(props);
    
    return (
        <>
            <div className ="ChartTitle" style={textColor}>
                <span style={{display:'block'}}>
                    <strong style={{fontSize: '40px'}}>
                        {parseWonToStr(currentWon)}
                    </strong>
                    {' '+unit}
                </span>
                <span>
                    <p style={{fontSize: '12px', color:'#000000', display:'inline-block'}}>
                        {subtit}
                    </p>
                    <strong>
                        {'   '+ wonYield +'  '}
                    </strong>
                    <strong style={{display:'inline'}}>
                        {' '+ isBullIcon+' '+parseWonToStr(upDown)}
                    </strong>
                </span>
            </div>
        </>
    );
}

export default ChartTitle;