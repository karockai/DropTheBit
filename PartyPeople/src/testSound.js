// import React, { useEffect } from 'react';
// import { Howl,Howler } from 'howler';

// function testSound(src) {
//     let volume = 0.7;
//     let sound = new Howl({ src });
//     console.log(sound);
//     const soundStop = () => sound.stop();
//     const soundPlay = (src) => {
//         sound = new Howl({ src });
//         sound.volume(0.7);
//         sound.play();
//     }
        
//     useEffect(() => {
//         soundStop();
//         soundPlay(src);
//         console.log('play22');
//         sound.on('play', () => {
//             console.log('play33');
//             const fadeouttime = 2000;
//             setTimeout(() => sound.fade(volume, 0, fadeouttime), (sound.duration() - sound.seek()) * 1000 - fadeouttime);
//         });
//         return soundStop;
//     }, []);
// }
// export {testSound};