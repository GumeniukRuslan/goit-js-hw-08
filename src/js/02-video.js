import Player from "@vimeo/player";
import throttle from "lodash.throttle"

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const playerLastTime = localStorage.getItem('videoplayer-current-time');
const setPlayerTime = data => localStorage.setItem('videoplayer-current-time', data.seconds);;

if (playerLastTime) {
  player.setCurrentTime(playerLastTime)
}

player.on('timeupdate', throttle(setPlayerTime, 1000));
