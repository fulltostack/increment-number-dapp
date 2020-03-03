import { call, put } from 'redux-saga/effects';
import { isMetamaskInstalled, initializeWeb3, isUserLoggedIn } from '../../utils/metamask';

import { startUpdateAccount } from '../User/reducer';
import { updateMetaMask, updateMetaMaskAccount } from './reducer';
import { history } from '../../app/store'

function* startupSaga(action) {
   try {
      const isInstalled = isMetamaskInstalled();
      if(isInstalled) {
         yield call(initializeWeb3);
         yield put(updateMetaMask({ isAvailable: true }));
         const accountsAvailable = yield call(isUserLoggedIn);

         console.log('accountsAvailable:  ', accountsAvailable);
         yield put(updateMetaMaskAccount({ accountsAvailable }))
         yield put(startUpdateAccount());
      } else {
         history.push('/no-metamask')
      }
   } catch (e) {
      yield put(updateMetaMask({ isAvailable: false }));
   }
}

export default startupSaga;
