import { call, put, takeEvery } from 'redux-saga/effects';
import { 
   getContractState, 
   successInGettingContractState, 
   errorInGettingContractState, 
   incrementVar,
   incrementVarSuccess,
   incrementVarError,
} from './reducer';
import IncrementContract from '../../contracts/increment'
import { setOpen } from '../Notifications/reducer';


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
      yield put(getContractState())
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
