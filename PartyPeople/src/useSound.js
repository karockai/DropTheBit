import { useEffect } from 'react';
import { Howl } from 'howler';

// 배경음 재생
function useSound(src, volume = 1, fadeoutTime = 0, signal) {
    let sound = new Howl({ src });

    const soundStop = () => sound.stop();
    const soundPlay = (src) => {
        sound = new Howl({ src });
        sound.volume(volume);
        sound.play();
    };

    useEffect(() => {
        soundStop();
        if (signal) {
            soundPlay(src);
            console.log('useSound Played.')
            sound.on('play', () => {
                const fadeouttime = fadeoutTime;
                setTimeout(
                    () => sound.fade(volume, 0, fadeouttime),
                    (sound.duration() - sound.seek()) * 1000 - fadeouttime
                );
            });
            return soundStop;
        }
    }, [signal]);
}

// 효과음 재생
function playSound(src, volume = 1) {
    let sound;
    const soundInject = (src) => {
        sound = new Howl({ src });
        sound.volume(volume);
    };
    soundInject(src);
    return sound;
}

var getDuration = function (src) {
    var howl = new Howl({ src });
    return new Promise(function (resolve, reject) {
        howl.on('load', function () {
            let time = howl.duration();
            resolve(time);
        });
    });
};

export { useSound, playSound, getDuration };
