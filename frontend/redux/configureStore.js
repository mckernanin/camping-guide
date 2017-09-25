import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';
import IndexSagas from './sagas';

export default function (history) {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const router = routerMiddleware(history);
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, router)));
  sagaMiddleware.run(IndexSagas);

  return store;
}
