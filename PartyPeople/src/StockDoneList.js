import { Grid, GridList } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';

// 효과음
import ExEnroll from './audios/effect/ExEnroll.wav';
import BuyDone from './audios/effect/BuyDone.wav';
import SellDone from './audios/effect/SellDone.wav';
import {
    ExpBySymbol,
    parseWonToStr,
    SplitByThree,
    showProfit,
} from './parseMoney';

const defaultTextStyle = {
    color: '#DCDCDC',
};
const highlightTextStyle = {
    color: 'white',
    fontWeight: 'bold',
};

export default function StockDoneList(props) {
    // socket ,  type (me , others), socket
    const [doneItem, setItem] = useState(null);
    const [doneList, setList] = useState([]);

    useEffect(() => {
        if (props.socket == null) {
            // props.requestSocket('StockDoneList', props.socket);
        } else {
            props.socket.on('buyDone_Room', (done) => {
                if (done['socketID'] === props.socket.id) {
                    let tmpAudio = new Audio(BuyDone);
                    tmpAudio.play();
                    tmpAudio.remove();
                }
                setItem(done);
            });
            props.socket.on('sellDone_Room', (done) => {
                if (done['socketID'] === props.socket.id) {
                    let tmpAudio = new Audio(SellDone);
                    tmpAudio.play();
                    tmpAudio.remove();
                }
                setItem(done);
            });
            props.socket.on('bidDone_Room', (done) => {
                if (done['socketID'] === props.socket.id) {
                    let tmpAudio = new Audio(ExEnroll);
                    tmpAudio.play();
                    tmpAudio.remove();
                }
                setItem(done);
            });
            props.socket.on('askDone_Room', (done) => {
                if (done['socketID'] === props.socket.id) {
                    let tmpAudio = new Audio(ExEnroll);
                    tmpAudio.play();
                    tmpAudio.remove();
                }
                setItem(done);
            });
        }
    }, []);

    useEffect(() => {
        if (doneList.length >= 5) doneList.shift();
        setList([...doneList, doneItem]);
    }, [doneItem]);

    return (
        <div style={{ height: '100%' }}>
            {doneList.map((done, idx) => {
                if (done === null) return <></>;
                let buySellColor = {
                    color:
                        done.type.substring(0, 2) === '매수'
                            ? done.type.substring(3, 5) === '완료' ||
                              done.type.substring(6, 8) === '체결'
                                ? red[500]
                                : red[300]
                            : done.type.substring(3, 5) === '완료' ||
                              done.type.substring(6, 8) === '체결'
                            ? blue[500]
                            : blue[300],
                    fontWeight:
                        done.type.substring(3, 5) === '완료' ||
                        done.type.substring(6, 8) === '체결'
                            ? 'bold'
                            : 'normal',
                };
                return (
                    <Grid style={{ fontSize: '1.05vw' }}>
                        <pre style={defaultTextStyle} key={idx}>
                            <span style={highlightTextStyle}>
                                {props.isMine ? ' ' : done.playerID + '님'}
                            </span>
                            {props.isMine ? '' : '이 '}
                            <span style={highlightTextStyle}>
                                {SplitByThree(String(done.price)) + '원'}
                            </span>
                            에{' '}
                            <span style={highlightTextStyle}>
                                {SplitByThree(String(done.vol)) + '개'}
                            </span>
                            를 <span style={buySellColor}>{done.type}.</span>
                        </pre>
                    </Grid>
                );
            })}
        </div>
    );
}
