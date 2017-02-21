import {
  INIT_PLAYER,
  PLAY_SONG,
  PAUSE_SONG
} from './const'

export const initPlayer = song => {
  return {
    type: INIT_PLAYER,
    song
  }
}

export const playSong = () => {
  return {
    type: PLAY_SONG
  }
}

export const pauseSong = () => {
  return {
    type: PAUSE_SONG
  }
}
