import { call, put, takeEvery } from 'redux-saga/effects';
import { getAccounts, getBalance } from '../../utils/metamask';

import { updateAccount, startUpdateAccount, updateAccountFailure } from './reducer';

function* updateAccountSaga() {
   try {
      const accounts = yield call(getAccounts);
      const address = accounts[0];
      const balance = yield call(getBalance, address)
      yield put(updateAccount({ address, balance }));
   } catch (e) {
      yield put(updateAccountFailure(e.message));
   }
}

function* userSaga() {
  yield takeEvery(startUpdateAccount.type, updateAccountSaga);
}

export default userSaga;
