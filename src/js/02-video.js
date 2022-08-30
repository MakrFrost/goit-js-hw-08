import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

//!
player.on('play', function (timeupdate) {
  const timePause = timeupdate.seconds;
  console.log(timePause);

  localStorage.setItem('videoplayer-current-time', timePause);

  player
    .setCurrentTime(timePause)
    .then(function (seconds) {
      player
        .play()
        .then(function () {
          console.log('the video was played');
        })
        .catch(function (error) {
          console.log(error);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
});
