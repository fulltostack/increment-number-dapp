import { combineReducers } from 'redux';
import metamask from '../containers/Startup/reducer';
import user from '../containers/User/reducer';

export default combineReducers({ metamask, user });
