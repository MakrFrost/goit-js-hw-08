import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('play', function (timeupdate) {
  console.log(timeupdate);
});

player.setCurrentTime(timeupdate).then(function (timeupdate) {});
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });
