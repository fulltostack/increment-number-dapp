import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header'
// import { getConfig } from './reducer';
// import PropTypes from 'prop-types';

const Main = (props) => {
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
const mapDispatchToProps = { };

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
