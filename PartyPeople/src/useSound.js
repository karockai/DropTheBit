import { useEffect } from 'react'
import { Howl } from 'howler';


function useSound(src, volume = 1, fadeoutTime = 0, signal) {
    let sound = new Howl({ src });;
    console.log(sound);

    const soundStop = () => sound.stop();
    const soundPlay = (src) => {
        sound = new Howl({ src });
        sound.volume(volume);
        sound.play();
    }

    useEffect(() => {
        soundStop();
        if (signal) {
          soundPlay(src);
          console.log('play22');
          sound.on('play', () => {
          console.log('play33');
            const fadeouttime = fadeoutTime;
            setTimeout(() => sound.fade(volume, 0, fadeouttime), (sound.duration() - sound.seek()) * 1000 - fadeouttime);
        });
        return soundStop;
      }
      }, [signal]);
}

function playSound(src, volume = 1) {
    let sound;
    const soundInject = (src) => {
      sound = new Howl({ src });
      sound.volume(volume);
    };
    soundInject(src);
    return sound;
  }

  var getDuration = function(src) {
    var howl = new Howl({ src });
    return new Promise(function(resolve, reject) {
      howl.on('load', function() {
        let time = howl.duration();
        resolve(time);
      });
    });
  }



  export { useSound, playSound, getDuration };