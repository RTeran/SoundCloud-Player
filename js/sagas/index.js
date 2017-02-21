import { takeEvery }  from 'redux-saga';
import searchSongs    from './songs'
import { player }     from './player'

export default function* rootSaga() {
  yield [
    searchSongs(),
    ...player
  ]
}
