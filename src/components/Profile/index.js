import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  profileImage: {
    width: '154px',
    height: '154px',
    margin: 'auto',
  },
  image: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  descText: {
    display: 'flex',
    fontWeight: 'normal',
    justifyContent: 'space-between',
  },
});

const Profile = (props) => {
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
                    <b>Address:</b> {props.address}
                  </Typography>
                  <br />
                  <Typography variant="button" className={classes.descText}>
                    <b>Balance:</b> {props.balance} ETh
                  </Typography>
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
