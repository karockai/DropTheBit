import { Howl } from 'howler';


  var getDuration = function(src) {
    var howl = new Howl({ src });
    return new Promise(function(resolve, reject) {
      howl.on('load', function() {
        let time = howl.duration();
        resolve(time);
      });
    });
  }


  export { getDuration };