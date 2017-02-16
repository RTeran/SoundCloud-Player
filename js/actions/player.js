import {
  PLAY_SONG,
  PAUSE_SONG
} from './const'


export const playSong = song => {
  return {
    type: PLAY_SONG,
    song
  }
}

export const pauseSong = () => {
  return {
    type: PLAY_SONG
  }
}
