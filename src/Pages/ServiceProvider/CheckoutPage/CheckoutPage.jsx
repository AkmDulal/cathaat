import React, { useState, useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useParams } from 'react-router-dom'
import AddressForm from './Forms/AddressForm';
import ConfirmationForm from './Forms/ConfirmationForm';
import ReviewOrder from './ReviewOrder';
import CheckoutSuccess from './CheckoutSuccess';

import validationSchema from './FormModel/validationSchema';
import checkoutFormModel from './FormModel/checkoutFormModel';
import formInitialValues from './FormModel/formInitialValues';
import axios from "../../../Helper/Config";
import useStyles from './styles';
import { toast } from 'react-toastify';
const steps = ['Form Fill-Up', 'Confirmation', 'Success'];
const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm formField={formField} />;
    case 1:
      return <ConfirmationForm formField={formField} />;
    case 2:
      return <ReviewOrder />;
    default:
      return <div className='text-center'> Please Check Your From </div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const [sPackAgeId, SetPackAgeId] = useState([])
  const [ErrorPages, setErrorPages] = useState(false)
  const { id } = useParams();
  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    // alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }
  useEffect(() => {
    axios.get("/auth/active-packages")
      .then(res => {
        const foundData = res.data.data.packages.find(obj => obj.id === Number(id))
        SetPackAgeId(foundData.payment_types[0]?.package_id)
      })
  }, [])
  function _handleSubmit(values, actions) {
    if (isLastStep) {
      const obj = {
        phone_number: `${values.contactNo}`,
        first_name: `${values.firstName}`,
        last_name: `${values.lastName}`,
        username: `${values.username}`,
        email: `${values.email}`,
        password: `${values.password}`,
        package_id: sPackAgeId,
      }
      axios.post("/auth/service-center-registration", obj)
        .then(res => {
          console.log(res, "STATUS")
          if (res.data.code === 200) {
            toast.dark(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT
            });
            setErrorPages(true)
          } else {
            toast.error(res.data.message, {
              position: toast.POSITION.BOTTOM_RIGHT
            });
            setErrorPages(false)
          }
        })
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h6" variant="h4" align="center">
        Services Provider Registration From
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length && ErrorPages === true ? (
          <>
            <CheckoutSuccess />
          </>
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? 'Submit' : 'Next'}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
