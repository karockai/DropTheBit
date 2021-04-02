import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    useHistory,
} from 'react-router-dom';

import { useSound, playSound, getDuration } from './useSound';
import ThreeSecTimer from './ThreeSecTimer';
import LayoutGrid from './LayoutGrid';
import Sound from './Sound';

export default function LayoutGridEffect(props) {
    const location = useLocation();
    const gameTime = location.state.gameTime;
    const [timerTime, setTimerTime] = useState(gameTime);
    const [isStart, setIsStart] = useState(false);
    const SpecificMusic = props.roomInfo['music'].split('.')[0];
    const [threeSecTimerOpen, setThreeSecTimerOpen] = useState(true);

    const [audio, SetAudio] = useState(null);
    const sendAudio = (audio) => {
        SetAudio(audio);
    };

    useEffect(() => {
        props.socket.once('startGame_Real', (data) => {
            setThreeSecTimerOpen(false);
            setTimerTime(gameTime);
            setIsStart(true);
        });
    }, [timerTime]);

    useEffect(() => {
        if (audio) {
            audio.play();
        }
    }, [isStart]);

    return (
        <>
            <Sound
                soundName={SpecificMusic}
                soundType={'music'}
                sendAudio={sendAudio}
            />
            <ThreeSecTimer open={threeSecTimerOpen} />
            <LayoutGrid
                socket={props.socket}
                requestSocket={props.requestSocket}
                roomID={props.roomID}
                roomInfo={props.roomInfo}
                gameTime={props.time}
                isStart={isStart}
            />
        </>
    );
}
