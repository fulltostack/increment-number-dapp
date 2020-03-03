import { call, put } from 'redux-saga/effects';
import { startUpdateAccount } from '../User/reducer';
import { updateMetaMask, updateNetworkId } from './reducer';
import { history } from '../../app/store'
import { isMetamaskInstalled, initializeWeb3, getNetworkId } from '../../utils/metamask';

function* startupSaga(action) {
   try {
      const isInstalled = isMetamaskInstalled();
      if(isInstalled) {
         yield put(updateMetaMask({ isAvailable: true }));
         yield call(initializeWeb3);
         const networkId = yield call(getNetworkId);
         yield put(updateNetworkId({ networkId }));
         yield put(startUpdateAccount());
      } else {
         history.push('/no-metamask')
      }
   } catch (e) {
      yield put(updateMetaMask({ isAvailable: false }));
   }
}

export default startupSaga;
