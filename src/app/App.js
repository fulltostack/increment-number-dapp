import React from 'react';
import routes from '../routes';
import { startSaga } from './rootSaga';
import { connect } from 'react-redux';
import Snackbars from '../components/SnackBars';
import { setClose } from '../containers/Notifications/reducer';

const App = (props) => (
  <React.Fragment>
    <Snackbars { ...props.notifications} setClose={props.setClose} />
    {routes}
  </React.Fragment>
);

const matchDispatchToProps = {
  setClose,
};

const mapStateToProps = (state) => ({
  notifications: state.notifications,
});

const WrappedComponent = connect(mapStateToProps, matchDispatchToProps)(App);

export default () => {
  startSaga();
  return <WrappedComponent />
};
