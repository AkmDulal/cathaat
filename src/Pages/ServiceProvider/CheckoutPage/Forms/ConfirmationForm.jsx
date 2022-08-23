import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField } from '../../FormFields';
import { useFormikContext } from 'formik';
export default function ConfirmationForm(props) {
  const { formField: { firstName,
    lastName,
    username,
    email,
    contactNo,
    password,} } = props;
  const { values: formValues } = useFormikContext();
  console.log(formValues, "formValues formValuesformValues")
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Confirmation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={username.name} label={username.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={contactNo.name} label={contactNo.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField type="password" name={password.name} label={password.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
