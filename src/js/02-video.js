import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const savePlayerTimer = function (time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
};
player.on('timeupdate', throttle(savePlayerTimer, 1000));
const currentVideoTime = localStorage.getItem('videoplayer-current-time');
if ((currentVideoTime !== null) & (currentVideoTime !== undefined)) {
  player.setCurrentTime(currentVideoTime);
}
