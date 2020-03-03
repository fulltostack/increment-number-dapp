import { call, put } from 'redux-saga/effects';
import { isMetamaskInstalled, initializeWeb3 } from '../../utils/metamask';
import { startUpdateAccount } from '../User/reducer';
import { history } from '../../app/store'

function* startupSaga(action) {
   try {
      console.log('Starting UP: --');
      const isInstalled = isMetamaskInstalled();
      if (isInstalled) {
         // yield call(initializeWeb3);
         console.log('--Startinf Initialisation');
         yield call(initializeWeb3);
         console.log('--Ending Initialisation');
         yield put(startUpdateAccount())
         // const accounts = yield call(getAccounts);
         // console.log(accounts);
      } else {
         history.push('/no-metamask')
      }
   } catch (e) {
   }
}

// function* startupSaga() {
//   yield takeEvery(appStartingUp.type, startingUp);
// }

export default startupSaga;
