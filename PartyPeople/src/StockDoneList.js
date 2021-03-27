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
            props.socket.on('buyDone', (done) => {
                console.log('매수가 체결되었습니다.');
                playSound(Check, 1).play();
                setItem(done);
            });
            props.socket.on('sellDone', (done) => {
                console.log('매도가 체결되었습니다.');
                playSound(Check, 1).play();
                setItem(done);
            });
            props.socket.on('bidDone', (done) => {
                console.log('등록된 호가에 매수가 체결되었습니다.');
                // playSound(Check, 1).play();
                setItem(done);
            });
            props.socket.on('askDone', (done) => {
                console.log('등록된 호가에 매도가 체결되었습니다.');
                // playSound(Check, 1).play();
                setItem(done);
            });
        }
    }, []);

    useEffect(() => {
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
                                        ? done.type.substring(3, 5) === '완료'
                                            ? red[500]
                                            : red[300]
                                        : done.type.substring(3, 5) === '완료'
                                        ? blue[500]
                                        : blue[300],
                                fontWeight:
                                    done.type.substring(3, 5) === '완료'
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
