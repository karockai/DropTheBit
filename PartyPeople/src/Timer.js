import { red } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react';
import fiveSecLeft from './audios/effect/5secLeft.wav';

const timeAudio = new Audio(fiveSecLeft);

export default function Timer(props) {
    const [timerSound] = useState(timeAudio);
    const [time, setTime] = useState(-1);

    props.socket.on('restGameTime', (restGameTime) => {
        setTime(restGameTime);
    });

    const ShowTime = () => {
        if (0 <= time && time <= 5) {
            timerSound.play();
        }
        var minute = parseInt(time / 60);
        var second = time - minute * 60;
        minute = minute >= 10 ? String(minute) : '0' + String(minute);
        second = second >= 10 ? String(second) : '0' + String(second);
        if (time < 60) {
            if (time <= 0) {
                minute = '--';
                second = '--';
            }
            return (
                <h2
                    style={{
                        fontSize: '2.7vw',
                        color: 'red',
                        fontWeight: 'bold',
                    }}
                >
                    {minute + ' : ' + second}
                </h2>
            );
        } else {
            return <h2 style={{ fontSize: 40 }}>{minute + ' : ' + second}</h2>;
        }
    };

    return ShowTime();
}
