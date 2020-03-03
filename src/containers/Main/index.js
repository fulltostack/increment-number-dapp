import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import { getContractState, incrementVar } from './reducer';
import Profile from '../../components/Profile'
import PropTypes from 'prop-types';

const Main = (props) => {
  const { user, contract } = props

  useEffect(() => {
    props.getContractState();
  }, []);

  return (
    <div>
      <Header user={user} />
      <Profile
        user={user}
        contract={contract}
        incrementVar={props.incrementVar}
        loading={props.loading}
      />
    </div>
  );
}

Main.propTypes = {
  user: PropTypes.object.isRequired,
  contract: PropTypes.object.isRequired,
};

const mapDispatchToProps = { getContractState, incrementVar };

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    contract: state.contract.state,
    loading: state.contract.loading,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
