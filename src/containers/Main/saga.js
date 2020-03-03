import { call, put, takeEvery, select } from 'redux-saga/effects';
import { 
   getContractState, 
   successInGettingContractState, 
   errorInGettingContractState, 
   incrementVar,
   incrementVarSuccess,
   incrementVarError,
} from './reducer';
import { setOpen } from '../Notifications/reducer';
import { startUpdateAccount } from '../User/reducer';
import IncrementContract from '../../contracts/increment'
import { incrementCountForAddress } from '../../utils/persistenceStorage';

const getAccount = (state) => state.user.address;

function* fetchContractState(action) {
   try {
      const incrementContract = new IncrementContract();
      const data = yield call(incrementContract.getState.bind(incrementContract));
      yield put(successInGettingContractState(data));
   } catch (e) {
      console.log('Error fetchContractState----------: ', e);
      yield put(errorInGettingContractState(e.message));
   }
}

function* updateIncrementVar(action) {
   try {
      const incrementContract = new IncrementContract();
      const data = yield call(incrementContract.incrementVar.bind(incrementContract));
      yield put(incrementVarSuccess(data));
      const address = yield select(getAccount);
      incrementCountForAddress(address);
      yield put(getContractState())
      yield put(startUpdateAccount())
      yield put(setOpen({ isSuccess: true, message: 'Value Incremented Successfully !' }))
   } catch (e) {
      console.log('Error updateIncrementVar----------: ', e);
      yield put(incrementVarError(e.message));
      yield put(setOpen({ isSuccess: false, message: e.message }))
   }
}

function* fetchContractStateSaga() {
  yield takeEvery(getContractState.type, fetchContractState);
  yield takeEvery(incrementVar.type, updateIncrementVar);
}

export default fetchContractStateSaga;
