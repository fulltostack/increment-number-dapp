import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import Profile from '../../components/Profile'
import PropTypes from 'prop-types';

const Main = (props) => {
  const { address, balance } = props
  return (
    <div>
      <Header />
      <Profile
        address={address}
        balance={balance}
      />
    </div>
  );
}

Main.propTypes = {
  address: PropTypes.string.isRequired,
  balance: PropTypes.string.isRequired,
};

const mapDispatchToProps = {};

const mapStateToProps = (state, props) => ({
  address: state.user.address,
  balance: state.user.balance,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
