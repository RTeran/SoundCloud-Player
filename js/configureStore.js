
import { persistStore } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import devTools         from 'remote-redux-devtools';
import reducer          from './reducers';
import promise          from './promise';
import {
  createStore, applyMiddleware,
  compose
} from 'redux';

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(promise),
    devTools({
      name: 'SoundCloudPlayer', realtime: true,
    }),
  );

  // const store = createStore(reducer, enhancer);
  const store = createStore(enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
