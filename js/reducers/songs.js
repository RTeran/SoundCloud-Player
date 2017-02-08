import {
  SEARCH_SONGS_SUCCEEDED,
  SEARCH_SONGS_FAILED
} from '../actions/const'

const initialState = {
  songs: [],
  queue: [],
  playing: null,
};

function songs(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SONGS_SUCCEEDED:
      return {
        ...state,
        songs: action.songs,
      }
    case SEARCH_SONGS_FAILED:
      return {
        ...state,
        message: action.message,
      }
    default:
      return state
  }
}

export default songs
