import { useSound, playSound, getDuration } from './useSound';
import King_Conga from './audios/music/King_Conga.mp3';
import Mausoleum_Mash from './audios/music/Mausoleum_Mash.mp3';
import Deja_Vu from './audios/music/Deja_Vu.mp3';

export default function GameMusicStart(props) {

    const musicList = {
        Deja_Vu : Deja_Vu,
        King_Conga: King_Conga,
        Mausoleum_Mash :Mausoleum_Mash,
    };
    
    const SpecificMusic = musicList[props.roomInfo['music'].split('.')[0]];
    return(
        useSound(SpecificMusic, 0.7, 2000)
    );
} 
