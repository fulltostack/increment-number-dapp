import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  descText: {
    display: 'flex',
    fontWeight: 'normal',
    justifyContent: 'space-between',
  },
  bottomWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Profile = ({ user, contract, incrementVar, loading }) => {
  const classes = useStyles();

  return (
    <Box m={4}>
      <Grid container justify="center">
        <Grid item md={8} xs={12}>
          <Card>
            <Box p={4} className={classes.wrapper}>
              <Grid container>
                <Grid item xs={12}>
                  <Hidden mdUp>
                    <Box pt={2} />
                  </Hidden>
                  <Typography variant="button" className={classes.descText}>
                    <b>Incremented Value:</b> {contract.incrementedValue}
                  </Typography>
                  <br />
                  <Typography variant="button" className={classes.descText}>
                    <b>Last Incrementer:</b> {contract.incrementer} ETh
                  </Typography>
                  <br />
                  <Box className={classes.bottomWrapper}>
                  {
                    (user.address === contract.incrementer) && (
                      <Typography variant="button" className={classes.descText}>
                        <b>You are the last incrementer!</b>
                      </Typography>
                    )
                  }
                  <br />
                  <Button 
                    variant="contained" 
                    disabled={loading} 
                    onClick={() => incrementVar()}
                  >
                    Increment
                  </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
