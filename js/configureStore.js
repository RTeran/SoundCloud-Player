
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import devTools         from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import reducers         from './reducers';
import sagas            from './sagas';
import {
  createStore, applyMiddleware,
  compose
} from 'redux';

export default function configureStore(onCompletion:()=>void):any {
  const sagaMiddleware = createSagaMiddleware();
  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    autoRehydrate(),
    devTools({
      name: 'SoundCloudPlayer', realtime: true,
    })
  );
  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(sagas);
  persistStore(store, { blacklist: ['songs'], storage: AsyncStorage }, onCompletion);

  return store;
}
