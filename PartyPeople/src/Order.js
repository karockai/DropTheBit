import React, { useEffect, useState } from 'react';
import { SplitByThree } from './parseMoney';
import './Order.css';

import Check from './audios/effect/Check.mp3';
import BuyDone from './audios/effect/BuyDone.wav';
import SellDone from './audios/effect/SellDone.wav';
import ExEnroll from './audios/effect/ExEnroll.wav';

const CancelAudio = new Audio(Check);
const BuyDoneAudio = new Audio(BuyDone);
const SellDoneAudio = new Audio(SellDone);
const ExEnrollAudio = new Audio(ExEnroll);

export default function Order(props) {
    const [orderReady, setReady] = useState(false);
    const [orderType, setType] = useState('');
    const [orderPrice, setPrice] = useState(null);
    const [classType,setClassType] = useState('buy_orderText');
    useEffect(() => {
        if (props.socket == null) {
            return;
        }

        props.socket.on('bidDone_Room', (data) => {
            setType('매수');
            setPrice(data.price);
            setReady(true);
            ExEnrollAudio.play();
        });

        props.socket.on('askDone_Room', (data) => {
            setType('매도');
            setPrice(data.price);
            setReady(true);
            ExEnrollAudio.play();
        });

        props.socket.on('buyDone_Room', (data) => {
            setType('');
            setReady(false);
            BuyDoneAudio.play();
        });

        props.socket.on('sellDone_Room', (data) => {
            setType('');
            setReady(false);
            SellDoneAudio.play();
        });

        props.socket.on('cancelBid_Res', () => {
            setType('');
            setReady(false);
            CancelAudio.play();
        });

        props.socket.on('cancelAsk_Res', () => {
            setType('');
            setReady(false);
            CancelAudio.play();
        });
    }, []);

    
    useEffect(()=>{
        let tmp = orderType === '매수' ? 'buy_orderText' : 'sell_orderText';
        setClassType(tmp);
    },[orderType]);
    
    if (orderReady) {
        return (
            <>
                <span
                    class={classType}
                    style={{fontSize: '2vw',}}
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
