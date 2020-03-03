import { configureStore } from "@reduxjs/toolkit";
import sagaMiddleware from './rootSaga';
import { createBrowserHistory } from 'history'
import createRootReducer from './rootReducer'

export const history = createBrowserHistory()

const rootReducer = createRootReducer(history)

const store = configureStore({
  middleware: [ sagaMiddleware ],
  reducer: rootReducer
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export default store
