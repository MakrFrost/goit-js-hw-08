import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

//!
player.on('play', function (timeupdate) {
  let timePause = timeupdate.seconds;
  console.log(timePause);

  localStorage.setItem('videoplayer-current-time', timePause);
});

function onUpdatePage() {
  let savedTimePlayer = localStorage.getItem('videoplayer-current-time');
  player
    .setCurrentTime(savedTimePlayer)
    .then(function () {})
    .catch(function (error) {
      console.log(error);
    });
}

onUpdatePage();
