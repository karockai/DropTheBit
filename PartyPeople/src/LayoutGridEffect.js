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

// Music
import Deja_Vu from './audios/music/Deja_Vu.mp3';
import Dont_Stop_Me_Now from './audios/music/Dont_Stop_Me_Now.mp3';
import Gong from './audios/music/GONG.mp3';
import King_Conga from './audios/music/King_Conga.mp3';
import Mausoleum_Mash from './audios/music/Mausoleum_Mash.mp3';
import Without_Me from './audios/music/Without_Me.mp3';
import StormRoad from './audios/music/질풍가도.mp3';
import Beethven_Virus from './audios/music/Beethven_Virus.mp3';
import The_Wight_to_Remain from './audios/music/The_Wight_to_Remain.mp3';
import GameMusicStart from './MusicStart';

let gameMusic = new Audio('');

export default function LayoutGridEffect(props) {
    const location = useLocation();
    const gameTime = location.state.gameTime;
    const musicName = location.state.musicName;
    const [timerTime, setTimerTime] = useState(gameTime);
    const [isStart, setIsStart] = useState(false);

    const musicList = {
        Deja_Vu: Deja_Vu,
        Dont_Stop_Me_Now: Dont_Stop_Me_Now,
        Gong: Gong,
        King_Conga: King_Conga,
        Mausoleum_Mash: Mausoleum_Mash,
        Without_Me: Without_Me,
        StormRoad: StormRoad,
        Beethven_Virus: Beethven_Virus,
        The_Wight_to_Remain: The_Wight_to_Remain,
    };

    const SpecificMusic = musicList[musicName];
    const [threeSecTimerOpen, setThreeSecTimerOpen] = useState(true);

    useEffect(() => {
        props.socket.once('startGame_Real', (data) => {
            setThreeSecTimerOpen(false);
            setTimerTime(gameTime);
            setIsStart(true);
            gameMusic = new Audio(SpecificMusic);
            if (gameMusic) gameMusic.play();
        });
    }, [timerTime]);

    return (
        <>
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
