import React from 'react';
import { useFormikContext } from 'formik';
import { Grid } from '@material-ui/core';
// import ProductDetails from './ProductDetails';
import ShippingDetails from './ShippingDetails';
// import PaymentDetails from './PaymentDetails';

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      {/* <ProductDetails /> */}
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        {/* <PaymentDetails formValues={formValues} /> */}
      </Grid>
    </React.Fragment>
  );
}
