import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import metamaskimg from "../../images/metamaskimg.svg";
import zoomicon from "../../images/zoomicon.svg";
import { METAMASK_CHROME_EXTENSTION, CHROME_INSTALLATION } from '../../utils/metamask';

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

const UserNotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.providerbg}>
      <img src={zoomicon} />
      <h2 className={classes.providerheading}>No providers detected</h2>
      <div className={classes.providerpara}>
        <p>To be able to use our services please use the <a href={CHROME_INSTALLATION}>Chrome browser</a> and
          installed the <a href={METAMASK_CHROME_EXTENSTION}>METAMASK</a> extension.</p>
        <p>After installation, please create an ethereum account and
            connect this to metamask.</p>
      </div>
      <a href={METAMASK_CHROME_EXTENSTION}>
        <img src={metamaskimg} />
      </a>
    </div>
  )
}

export default UserNotFound