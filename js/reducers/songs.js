import {
  SEARCHING_SONGS,
  SEARCH_SONGS_SUCCEEDED,
  SEARCH_SONGS_FAILED
} from '../actions/const'

const initialState = {
  items: [],
  queue: [],
  playing: null,
  isFetching: false
};

function songs(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SONGS_SUCCEEDED:
      return {
        ...state,
        items: action.items,
        isFetching: false
      }
    case SEARCH_SONGS_FAILED:
      return {
        ...state,
        message: action.message,
        isFetching: false
      }
    case SEARCHING_SONGS:
      return {
        ...state,
        isFetching: (state.items.length > 0) ? false : action.isFetching
      }
    default:
      return state
  }
}

export default songs
