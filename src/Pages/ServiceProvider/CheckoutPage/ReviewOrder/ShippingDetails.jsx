import React from 'react';
import { Typography, Grid } from '@material-ui/core';
// import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  // const classes = useStyles();
  const { firstName, lastName, username, email, contactNo  } = formValues;
  return (
    <div className='r_comfram_area'>
      <Grid item container direction="column" xs={12} sm={12}>
        <Grid container>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography gutterBottom> First Name :  {firstName}</Typography>
            </Grid>
          </React.Fragment>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography gutterBottom> Last Name :  {lastName}</Typography>
            </Grid>
          </React.Fragment>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography gutterBottom> User Name :  {username}</Typography>
            </Grid>
          </React.Fragment>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography gutterBottom> Email :  {email}</Typography>
            </Grid>
          </React.Fragment>
          <React.Fragment>
            <Grid item xs={12}>
              <Typography gutterBottom> Phone Number :  {contactNo}</Typography>
            </Grid>
          </React.Fragment>
          {/* <React.Fragment>
            <Grid item xs={12}>
              <Typography gutterBottom> Password :  {password}</Typography>
            </Grid>
          </React.Fragment> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentDetails;
