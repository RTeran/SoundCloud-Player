import {
  call, put,
  // takeLatest
} from 'redux-saga/effects';
import { takeLatest } from 'redux-saga'
import { search } from '../api';
import {
  SEARCH_SONGS,
  SEARCH_SONGS_FAILED,
  SEARCH_SONGS_SUCCEEDED,
} from '../actions/const';

function* fetchTracks(action) {
  try {
    const songs = yield call(search, action.text);
    yield put({ type: SEARCH_SONGS_SUCCEEDED, songs: songs.data });
  } catch (e) {
    yield put({ type: SEARCH_SONGS_FAILED, message: e });
  }
}

function* searchSongs() {
  yield* takeLatest(SEARCH_SONGS, fetchTracks);
}

export default searchSongs;
