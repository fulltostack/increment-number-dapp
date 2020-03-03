import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import fetchConfigSaga from '../containers/Main/saga';
import startupSaga from '../containers/Startup/saga';
import userSaga from '../containers/User/saga';

function* rootSaga() {
  yield all(
    [ 
      fork(startupSaga),
      fork(userSaga),
      fork(fetchConfigSaga), 
    ]
  );
}

const sagaMiddleware = createSagaMiddleware()

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
}

export default sagaMiddleware;
