import React, { useEffect, useState } from 'react';

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
import Gaza from './audios/music/Gaza.mp3';
import Another_One_Bites_The_Dust from './audios/music/Another_One_Bites_The_Dust.mp3';
import Can_You_Dig_It from './audios/music/Can_You_Dig_It.mp3';
import Csikos_Post from './audios/music/Csikos_Post.mp3';
import Dont_Stop_Me from './audios/music/날_막지마.mp3';
import Zapaguri from './audios/music/짜파구리.mp3';

import TestMusic from './audios/music/TestMusic.mp3';

export default function GameMusic(props) {
    const [gameTime, setGameTime] = useState(null);
    const [gameAudio, setAudio] = useState(null);

    const musicList = {
        Deja_Vu: Deja_Vu,
        Dont_Stop_Me_Now: Dont_Stop_Me_Now,
        Gong: Gong,
        King_Conga: King_Conga,
        Mausoleum_Mash: Mausoleum_Mash,
        Without_Me: Without_Me,
        질풍가도: StormRoad,
        Beethven_Virus: Beethven_Virus,
        The_Wight_to_Remain: The_Wight_to_Remain,
        가즈아: Gaza,
        Another_One_Bites_The_Dust: Another_One_Bites_The_Dust,
        Can_You_Dig_It: Can_You_Dig_It,
        우편마차: Csikos_Post,
        날_막지마: Dont_Stop_Me,
        TestMusic: TestMusic,
        짜파구리: Zapaguri,
    };

    useEffect(() => {
        props.socket.once('startGame_Real', (dataForStart) => {
            setGameTime(dataForStart['gameTime']);
            setAudio(new Audio(musicList[dataForStart['musicName']]));
            // props.socket.off('startGame_Real');
        });
    }, []);

    useEffect(() => {
        if (gameAudio) {
            gameAudio.addEventListener('loadedmetadata', () => {
                gameAudio.currentTime = gameAudio.duration - gameTime;
                if (gameAudio.pause) {
                    gameAudio.play();
                }
            });
        }
    }, [gameAudio]);

    return <></>;
}
