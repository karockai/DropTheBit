import React, { useEffect, useState } from 'react';
import { SplitByThree } from './parseMoney';
import './Order.css';
export default function Order(props) {
    const [orderReady, setReady] = useState(false);
    const [orderType, setType] = useState('');
    const [orderPrice, setPrice] = useState(null);

    useEffect(() => {
        if (props.socket == null) {
            return;
        }

        props.socket.on('bidDone_Room', (data) => {
            setType('매수');
            setPrice(data.price);
            setReady(true);
        });

        props.socket.on('askDone_Room', (data) => {
            setType('매도');
            setPrice(data.price);
            setReady(true);
        });

        props.socket.on('buyDone_Room', (data) => {
            setType('');
            setReady(false);
        });

        props.socket.on('sellDone_Room', (data) => {
            setType('');
            setReady(false);
        });

        props.socket.on('cancelBid_Res', () => {
            setType('');
            setReady(false);
        });

        props.socket.on('cancelAsk_Res', () => {
            setType('');
            setReady(false);
        });
    }, []);

    if (orderReady) {
        return (
            <>
                <span
                    class={'blinking'}
                    style={{ color: 'white', fontSize: '2vw' }}
                >
                    {orderType +
                        ' 주문가 : ' +
                        SplitByThree(String(orderPrice)) +
                        ' 원'}
                </span>
            </>
        );
    } else {
        return <></>;
    }
}
