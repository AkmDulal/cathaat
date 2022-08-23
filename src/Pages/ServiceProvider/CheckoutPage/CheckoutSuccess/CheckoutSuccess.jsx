import React from 'react';
import { Typography } from '@material-ui/core';

function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" align="center" gutterBottom>
      thank you for applying.
      </Typography>
      <Typography align="center" variant="subtitle1">
      Please check your email for a confirmation link…
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
