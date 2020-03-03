import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import zoomicon from "../../images/zoomicon.svg";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  providerbg: {
    backgroundRepeat: 'no-repeat',
    height: '714px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundSize: '100% 100%',
    flexDirection: 'column'
  },
  providerheading: {
    color: '#5C5D66',
    fontSize: '30px',
    fontWeight: 'bold',
    padding: '15px 0',
  },
  providerpara: {
    width: '31%',
    textAlign: 'center',
  }

}));

const NoLogin = () => {
  const classes = useStyles();
  return (
    <div className={classes.providerbg}>
      <img src={zoomicon} />
      <h2 className={classes.providerheading}>No user detected</h2>
      <div className={classes.providerpara}>
        <p>Please login to continue.</p>
      </div>
    </div>
  )
}

export default NoLogin