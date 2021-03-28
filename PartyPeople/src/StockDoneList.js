import { Grid, GridList } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';
import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { useSound, playSound } from './useSound';
import Check from './audios/effect/check.mp3';
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
                    console.log('1 buyDone_Room');
                    setItem(done);
                });
                props.socket.on('sellDone_Room', (done) => {
                    console.log('2 sellDone_Room');
                    setItem(done);
                });
                props.socket.on('bidDone_Room', (done) => {
                    console.log('3 bidDone_Room');
                    setItem(done);
                });
                props.socket.on('askDone_Room', (done) => {
                    console.log('4 askDone_Room');
                    setItem(done);
                });
            }
            else {
                props.socket.on('buyDone', (done) => {
                    console.log('5 buyDone.');
                    playSound(Check, 1).play();
                    setItem(done);
                });
                props.socket.on('sellDone', (done) => {
                    console.log('6 sellDone');
                    playSound(Check, 1).play();
                    setItem(done);
                });
                props.socket.on('bidDone', (done) => {
                    console.log('7 bidDone');
                    // playSound(Check, 1).play();
                    setItem(done);
                });
                props.socket.on('askDone', (done) => {
                    console.log('8 askDone.');
                    // playSound(Check, 1).play();
                    setItem(done);
                });
            }   
        }
    }, []);

    useEffect(() => {
        if (doneList.length >= 10) doneList.shift();
        setList([...doneList, doneItem]);
    }, [doneItem]);

    useEffect(() => {
        scrollToBottom();
    });

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
                                <pre>
                                    <span style={{ fontWeight: 'bold' }}>
                                        {props.isMine ? '' : done.playerID}
                                    </span>
                                    {props.isMine ? '' : '님이 '}
                                    <span style={{ fontWeight: 'bold' }}>
                                        {done.price}
                                    </span>
                                    원에
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
                        style={{ float: 'left', clear: 'both' }}
                        ref={messagesEnd}
                    ></div>
                </Grid>
            }
        </GridList>
    );
}
