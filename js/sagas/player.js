
import {
  call, put, fork
  // takeLatest
}                       from 'redux-saga/effects';
import { takeLatest }   from 'redux-saga'
import RNAudioStreamer  from 'react-native-audio-streamer'
import { search }       from '../api';
import {
    INIT_PLAYER,
	  ACTIVE_SONG,
  	PLAY_SONG,
  	PAUSE_SONG,
}                       from '../actions/const';


const CLIENT_ID = '80bdab0ecb2b65b57e1629f1b65cb3f1'

export const prepareUrl = url => `${url}?client_id=${CLIENT_ID}`


function* active(action, audio = RNAudioStreamer) {
    yield call( audio.setUrl, prepareUrl(action.song.stream_url) )
    yield put({ type: ACTIVE_SONG, song: action.song });
    yield put({ type: PLAY_SONG });
}


function* _play(action, audio = RNAudioStreamer) {
    const { play } = audio
    yield fork(play)
}


function* _pause(action, audio = RNAudioStreamer) {
    const { pause } = audio
    yield fork(pause)
}


function* initPlayer() {
    yield* takeLatest(INIT_PLAYER, active);
}

function* playSong() {
    yield* takeLatest(PLAY_SONG, _play);
}

function* pauseSong() {
    yield* takeLatest(PAUSE_SONG, _pause);
}

export const player = [
  fork(initPlayer),
  fork(playSong),
  fork(pauseSong)
]
