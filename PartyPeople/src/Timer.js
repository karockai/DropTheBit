import { red } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react';
import fiveSecLeft from './audios/effect/5secLeft.wav';

import ReactDOM from 'react-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import './Timer.css';

const timeAudio = new Audio(fiveSecLeft);

export default function Timer(props) {
    const [timerSound] = useState(timeAudio);
    const [time, setTime] = useState(props.gameTime);
    console.log('@Timer // time:', time);

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
            return <div className="timer">게임 종료</div>;
        }

        return (
            <div className="timer">
                <div className="text">게임 종료까지</div>
                <div className="value">{time}</div>
            </div>
        );
    };

    return (
        <div className="App">
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    isPlaying
                    duration={props.gameTime}
                    colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
                    onComplete={() => [true, 1000]}
                >
                    {renderTime}
                </CountdownCircleTimer>
            </div>
            <p className="info">
                Change component properties in the code filed on the right to
                try difference functionalities
            </p>
        </div>
    );
}

// export default function Timer(props) {
//     const [timerSound] = useState(timeAudio);
//     const [time, setTime] = useState(-1);

//     props.socket.on('restGameTime', (restGameTime) => {
//         setTime(restGameTime);
//     });

//     const ShowTime = () => {
//         if (0 <= time && time <= 5) {
//             timerSound.play();
//         }
//         var minute = parseInt(time / 60);
//         var second = time - minute * 60;
//         minute = minute >= 10 ? String(minute) : '0' + String(minute);
//         second = second >= 10 ? String(second) : '0' + String(second);
//         if (time < 60) {
//             if (time <= 0) {
//                 minute = '--';
//                 second = '--';
//             }
//             return (
//                 <h2
//                     style={{
//                         fontSize: '4vw',
//                         color: 'red',
//                         fontWeight: 'bold',
//                     }}
//                 >
//                     {minute + ' : ' + second}
//                 </h2>
//             );
//         } else {
//             return (
//                 <h5 style={{ fontSize: '4vw' }}>{minute + ' : ' + second}</h5>
//             );
//         }
//     };

//     return ShowTime();
// }
