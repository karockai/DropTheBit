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
    const textColor = {
        color: isBullMarket ? red[600] : blue[600],
    };
    const isBullIcon = isBullMarket ? '▲' : '▼';
    const currentYield = '+1.33%';
    const [currentWon, SetWon] = useState(68099000);
    const [upDown, SetUpDown] = useState(957000);

    useEffect(() => {

    });
    
    function SplitByThree(value) {
        if(value.length <= 3) return value;
        return SplitByThree(value.substring(0,value.length - 3)) + ',' + value.substring(value.length - 3, value.length); 
    }

    const parseWonToStr = (won) => {
        if(typeof(won) == "number") won = won.toString();
        return SplitByThree(won);
    }
    
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
                        {'   '+currentYield+'  '}
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