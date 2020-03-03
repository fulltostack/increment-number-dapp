import { combineReducers } from 'redux';
import metamask from '../containers/Startup/reducer';
import user from '../containers/User/reducer';
import contract from '../containers/Main/reducer';
import notifications from '../containers/Notifications/reducer';
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  metamask,
  user,
  notifications,
  contract,
})
export default createRootReducer
