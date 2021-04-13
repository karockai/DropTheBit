import React, { useEffect, useState } from 'react';
import fiveSecLeft from './audios/effect/5secLeft.wav';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import './Timer.css';

const timeAudio = new Audio(fiveSecLeft);
let timerSwitch = false;

export default function Timer(props) {
    const [curTime, setCurTime] = useState(-1);
    const [timerSet, setTimerSet] = useState({
        timerSet: false,
        isPlaying: false,
        initGameTime: 0,
        gameTime: 0,
    });

    useEffect(() => {
        if (timerSwitch === false) {
            props.socket.emit('timerSet_Req');
        }
        props.socket.once('timerSet_Res', (timerSetData) => {
            setTimerSet(timerSetData);
            setCurTime(timerSetData['gameTime']);
            timerSwitch = true;
        });
    }, []);

    useEffect(() => {
        props.socket.once('restGameTime', (curTimeData) => {
            setCurTime(curTimeData);
        });
    });

    const renderTime = (remainingTime) => {
        if (0 <= remainingTime && remainingTime <= 5) {
            timeAudio.play();
        } else if (remainingTime < 0) {
            timerSwitch = false;
            return (
                <div
                    className="timer"
                    style={{ fontWeight: 'bold', fontSize: '1.5vw' }}
                >
                    게임 종료
                </div>
            );
        }

        return (
            <div className="timer">
                <div
                    className="text"
                    style={{
                        // fontWeight: 'bold',
                        margin: '1vh 0 0 0',
                        fontFamily: 'NEXON Lv1 Gothic OTF',
                        fontSize: '1.4vw',
                        color: 'white',
                    }}
                >
                    남은 시간
                </div>
                <div
                    className="value"
                    style={{
                        margin: '1vh 0',
                        fontWeight: 'bold',
                        fontFamily: 'NEXON Lv1 Gothic OTF',
                        fontSize: '2.7vw',
                    }}
                >
                    {remainingTime}
                </div>
            </div>
        );
    };

    const countdownTimer = (timerSet) => {
        return (
            <CountdownCircleTimer
                size={0.1 * window.innerWidth}
                isPlaying={timerSet['isPlaying']}
                duration={timerSet['initGameTime']}
                initialRemainingTime={timerSet['gameTime']}
                colors={[
                    ['#2478FF', 0.25],
                    ['#1DDB16', 0.25],
                    ['#FFF136', 0.25],
                    ['#FFBB00', 0.25],
                    ['#B70000'],
                ]}
            >
                {renderTime(curTime)}
            </CountdownCircleTimer>
        );
    };

    return (
        <div className="App">
            <div
                className="timer-wrapper"
                style={{ height: '100%', width: '100%' }}
            >
                {timerSet['timerSet'] ? countdownTimer(timerSet) : ''}
            </div>
        </div>
    );
}
