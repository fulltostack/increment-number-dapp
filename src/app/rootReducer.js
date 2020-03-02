import { combineReducers } from 'redux';
import configReducer from '../containers/Main/reducer';

export default combineReducers({ config: configReducer });
