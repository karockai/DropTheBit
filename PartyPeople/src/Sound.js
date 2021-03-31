// Music
import Tetris99 from './audios/music/Tetris99.mp3';
import Deja_Vu from './audios/music/Deja_Vu.mp3';
import Dont_Stop_Me_Now from './audios/music/Dont_Stop_Me_Now.mp3';
import Gong from './audios/music/GONG.mp3';
import King_Conga from './audios/music/King_Conga.mp3';
import Mausoleum_Mash from './audios/music/Mausoleum_Mash.mp3';
import Without_Me from './audios/music/Without_Me.mp3';
import StormRoad from './audios/music/질풍가도.mp3';
import Beethven_Virus from './audios/music/Beethven_Virus.mp3';
import The_Wight_to_Remain from './audios/music/The_Wight_to_Remain.mp3';

// Effect
import fiveLeft from './audios/effect/5secLeft.wav';
import AskDone from './audios/effect/AskDone.wav';
import AskTable from './audios/effect/AskTable.wav';
import BidDone from './audios/effect/BidDone.wav';
import BidTable from './audios/effect/BidTable.wav';
import Buy0 from './audios/effect/Buy0.wav';
import Buy50 from './audios/effect/Buy50.wav';
import Buy100 from './audios/effect/Buy100.wav';
import BuyConfirm from './audios/effect/BuyConfirm.wav';
import BuyDone from './audios/effect/BuyDone.wav';
import Cancel1 from './audios/effect/Cancel1.wav';
import Cancel2 from './audios/effect/Cancel2.wav';
import Cancel3 from './audios/effect/Cancel3.wav';
import Cancel4 from './audios/effect/Cancel4.wav';
import Cancel5 from './audios/effect/Cancel5.wav';
import Cancel6 from './audios/effect/Cancel6.wav';
import Cancel7 from './audios/effect/Cancel7.wav';
import Cancel8 from './audios/effect/Cancel8.wav';
import Check from './audios/effect/Check.mp3';
import CurPrice from './audios/effect/CurPrice.wav';
import Enter from './audios/effect/Enter.wav';
import Error_Sound from './audios/effect/Error.mp3';
import ExEnroll from './audios/effect/ExEnroll.wav';
import ExTable from './audios/effect/ExTable.wav';
import GameEnd from './audios/effect/GameEnd.mp3';
import Nope from './audios/effect/Nope.mp3';
import PriceDown from './audios/effect/PriceDown.wav';
import PriceUp from './audios/effect/PriceUp.wav';
import Result from './audios/effect/Result.mp3';
import Sell0 from './audios/effect/Sell0.wav';
import Sell50 from './audios/effect/Sell50.wav';
import Sell100 from './audios/effect/Sell100.wav';
import SellConfirm from './audios/effect/SellConfirm.wav';
import SellDone from './audios/effect/SellDone.wav';
import VolDown from './audios/effect/VolDown.wav';
import VolUp from './audios/effect/VolUp.wav';

// Module
import React, { useState } from 'react';

export default function Sound(props) {
    const [action, SetAction] = useState(props.action);
    const [type, SetType] = useState(props.soundType);
    const [name, SetName] = useState(props.soundName);
    const [volume, SetSoundVol] = useState(props.soundVol);
    const musicLink = {
        lobbyMusic: Tetris99,
        Deja_Vu: Deja_Vu,
        Dont_Stop_Me_Now: Dont_Stop_Me_Now,
        Gong: Gong,
        King_Conga: King_Conga,
        Mausoleum_Mash: Mausoleum_Mash,
        Without_Me: Without_Me,
        StormRoad: StormRoad,
        Beethven_Virus: Beethven_Virus,
        The_Wight_to_Remain: The_Wight_to_Remain,
        fiveLeft: fiveLeft,
        AskDone: AskDone,
        AskTable: AskTable,
        BidDone: BidDone,
        BidTable: BidTable,
        Buy0: Buy0,
        Buy50: Buy50,
        Buy100: Buy100,
        BuyConfirm: BuyConfirm,
        BuyDone: BuyDone,
        Cancel1: Cancel1,
        Cancel2: Cancel2,
        Cancel3: Cancel3,
        Cancel4: Cancel4,
        Cancel5: Cancel5,
        Cancel6: Cancel6,
        Cancel7: Cancel7,
        Cancel8: Cancel8,
        Check: Check,
        CurPrice: CurPrice,
        Enter: Enter,
        Error_Sound: Error_Sound,
        ExEnroll: ExEnroll,
        ExTable: ExTable,
        GameEnd: GameEnd,
        Nope: Nope,
        PriceDown: PriceDown,
        PriceUp: PriceUp,
        Result: Result,
        Sell0: Sell0,
        Sell50: Sell50,
        Sell100: Sell100,
        SellConfirm: SellConfirm,
        SellDone: SellDone,
        VolDown: VolDown,
        VolUp: VolUp,
    };
    console.log('action:', action);
    const [audio, SetAudio] = useState(new Audio(musicLink[name]));
    console.log(props);
    if (props.sendAudio) {
        props.sendAudio(audio);
    }

    function MusicPlay() {
        audio.play();
    }

    function EffectPlay() {
        audio.play();
    }

    function GetDuration() {
        return name;
    }

    // 볼륨 조절
    if (volume) {
        audio.volume = volume;
    }

    // 음악 재생
    if (action === 'play') {
        // 배경음인 경우, is play를 판단하고 재생한다.
        if (type === 'music' && audio.paused) {
            MusicPlay();
        } else if (type === 'effect') {
            EffectPlay();
        }
    }

    // 음악 길이 반환
    else if (action === 'duration') {
        GetDuration();
    }

    return <></>;
}
