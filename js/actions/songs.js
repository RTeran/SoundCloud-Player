import {
  SEARCH_SONGS
} from './const'


export const searchSongs = text => {
  return {
    type: SEARCH_SONGS,
    text
  }
}
