import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    useHistory,
} from 'react-router-dom';
import King_Conga from './audios/music/King_Conga.mp3';
import Mausoleum_Mash from './audios/music/Mausoleum_Mash.mp3';
import Deja_Vu from './audios/music/Deja_Vu.mp3';
import { useSound, playSound, getDuration } from './useSound';
import ThreeSecTimer from './ThreeSecTimer';
import LayoutGrid from './LayoutGrid';

let bgm_audio = new Audio('');

export default function LayoutGridEffect(props) {
    const location = useLocation();
    const gameTime = location.state.gameTime;
    const [timerTime, setTimerTime] = useState(gameTime);
    const [isStart, setIsStart] = useState(false);
    const musicList = {
        Deja_Vu: Deja_Vu,
        King_Conga: King_Conga,
        Mausoleum_Mash: Mausoleum_Mash,
    };
    const SpecificMusic = musicList[props.roomInfo['music'].split('.')[0]];
    const [threeSecTimerOpen, setThreeSecTimerOpen] = useState(true);

    useEffect(() => {
        props.socket.once('startGame_Real', (data) => {
            setThreeSecTimerOpen(false);
            setTimerTime(gameTime);
            setIsStart(true);
            bgm_audio = new Audio(SpecificMusic);
            if (bgm_audio.paused) bgm_audio.play();
            // sound.play();
            // sound.on('play', () => {
            //     const fadeouttime = 2000;
            //     setTimeout(() => sound.fade(0.7, 0, fadeouttime), (sound.duration() - sound.seek()) * 1000 - fadeouttime);
            // });
        });
    }, [timerTime]);
    return (
        <React.Fragment>
            <ThreeSecTimer
                SpecificMusic={SpecificMusic}
                open={threeSecTimerOpen}
            />
            <LayoutGrid
                socket={props.socket}
                requestSocket={props.requestSocket}
                roomID={props.roomID}
                roomInfo={props.roomInfo}
                gameTime={props.time}
            />
        </React.Fragment>
    );
}
