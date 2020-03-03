import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import { getContractState, incrementVar } from './reducer';
import ContractCard from '../../components/ContractCard'
import PropTypes from 'prop-types';

const Main = (props) => {
  const { user, contract, getContractState } = props
  const { address } = user;

  useEffect(() => {
    if (address) {
      getContractState();
    }
  }, [address, getContractState]);

  return (
    <div>
      <Header user={user} />
      <ContractCard
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

const mapStateToProps = (state) => {
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
