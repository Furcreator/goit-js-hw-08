import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

localStorageSetCurrentTime();

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);

function localStorageSetCurrentTime() {
  const currentTimeBeforeReload = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  if(currentTimeBeforeReload){
    player.setCurrentTime(currentTimeBeforeReload.seconds);
  }
}