import {
  ACTIVE_SONG,
  PLAY_SONG,
  PAUSE_SONG
} from '../actions/const'

const initialState = {
  song: null,
  playing: false,
  paused: false
};

function player(state = initialState, action) {
  switch (action.type) {

    case ACTIVE_SONG:
      return {
        ...state,
        song: action.song
      }

    case PLAY_SONG:
      return {
        ...state,
        playing: true,
        paused: false
      }

    case PAUSE_SONG:
      return {
        ...state,
        playing: false,
        paused: true
      }

    default:
      return state
  }
}

export default player
