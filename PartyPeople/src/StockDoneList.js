import { Grid, GridList } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { useSound, playSound } from './useSound';
import Check from './audios/effect/check.mp3';
import BidSound from './audios/effect/bidSound.wav';
import AskSound from './audios/effect/askSound.wav';
export default function StockDoneList(props) {
    // socket ,  type (me , others), socket
    const [doneItem, setItem] = useState(null);
    const [doneList, setList] = useState([]);
    const messagesEnd = React.useRef(null);

    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (props.socket == null) {
            props.requestSocket('StockDoneList', props.socket);
        } else {
            if (!props.isMine) {
                props.socket.on('buyDone_Room', (done) => {
                    setItem(done);
                });
                props.socket.on('sellDone_Room', (done) => {
                    setItem(done);
                });
                props.socket.on('bidDone_Room', (done) => {
                    setItem(done);
                });
                props.socket.on('askDone_Room', (done) => {
                    setItem(done);
                });
            }
            else {
                props.socket.on('buyDone', (done) => {
                    if(done.type === "매수 완료") {
                        playSound(Check, 1).play();
                    }
                    else if(done.type === "매수 주문 체결"){
                        playSound(BidSound, 1).play();
                    }
                    setItem(done);
                });
                props.socket.on('sellDone', (done) => {
                    if(done.type === "매도 완료") {
                        playSound(Check, 1).play();
                    }
                    else if(done.type === "매도 주문 체결"){
                        playSound(AskSound, 1).play();
                    }
                    setItem(done);
                });
                props.socket.on('bidDone', (done) => {
                    setItem(done);
                });
                props.socket.on('askDone', (done) => {
                    setItem(done);
                });
            }   
        }
    }, []);

    useEffect(() => {
        if (doneList.length >= 10) doneList.shift();
        setList([...doneList, doneItem]);
        scrollToBottom();

    }, [doneItem]);

    return (
        <GridList
            spacing={0}
            wrap="wrap"
            style={{ width: '100%', height: '100%' }}
        >
            {
                <Grid style={{ width: '100%' }}>
                    <div>
                        {doneList.map((done, idx) => {
                            if (done === null) return;
                            let buySellColor = {
                                color:
                                    done.type.substring(0, 2) === '매수'
                                        ? done.type.substring(3, 5) === '완료' || done.type.substring(6, 8) === '체결'
                                            ? red[500]
                                            : red[300]
                                        : done.type.substring(3, 5) === '완료' || done.type.substring(6, 8) === '체결'
                                        ? blue[500]
                                        : blue[300],
                                fontWeight:
                                    done.type.substring(3, 5) === '완료' || done.type.substring(6, 8) === '체결'
                                        ? 'bold'
                                        : 'normal',
                            };
                            return (
                                <pre key = {idx}>
                                    <span style={{ fontWeight: 'bold' }}>
                                        {props.isMine ? '' : done.playerID}
                                    </span>
                                    {props.isMine ? '' : '님이 '}
                                    <span style={{ fontWeight: 'bold' }}>
                                        {done.price}
                                    </span>
                                    원에{' '}
                                    <span style={{ fontWeight: 'bold' }}>
                                        {done.vol}
                                    </span>
                                    개를{' '}
                                    <span style={buySellColor}>
                                        {done.type}.
                                    </span>
                                </pre>
                            );
                        })}
                    </div>
                    <div
                        style={{ float: 'left', clear: 'both',  height: "0%"  }}
                        ref={messagesEnd}
                    ></div>
                </Grid>
            }
        </GridList>
    );
}
