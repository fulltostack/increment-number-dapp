import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header'
import { getContractState, incrementVar } from './reducer';
// import PropTypes from 'prop-types';

const Main = (props) => {
  useEffect(() => {
    props.getContractState();
    props.incrementVar();
  });
  return (
    <div>
      <Header />
    </div>
  );
}

// Main.propTypes = {
//   getConfig: PropTypes.func.isRequired,
//   location: PropTypes.string.isRequired,
//   config: PropTypes.object,
//   error: PropTypes.string,
// };


// const mapDispatchToProps = { getConfig };
const mapDispatchToProps = { getContractState, incrementVar };

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
