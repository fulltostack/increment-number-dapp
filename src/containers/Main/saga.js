import { call, put, takeEvery } from 'redux-saga/effects';
// import { getRequest } from '../../utils/api';
import { getContractState, successInGettingContractState, errorInGettingContractState } from './reducer';
// import { BASE_URL } from  '../../utils/constant';

function* fetchConfig(action) {
   try {
      // const data = yield call(getRequest, `${BASE_URL}${action.payload}.json`);
      const data = {};
      yield put({ type: successInGettingContractState.type, payload: { data, path: action.payload }});
   } catch (e) {
      yield put({ type: errorInGettingContractState.type, payload: e.message });
   }
}

function* fetchConfigSaga() {
  yield takeEvery(getContractState.type, fetchConfig);
}

export default fetchConfigSaga;
