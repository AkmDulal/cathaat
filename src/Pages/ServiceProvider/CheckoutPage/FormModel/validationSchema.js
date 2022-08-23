import * as Yup from 'yup';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    username,
    email,
    contactNo,
    password,
    // nameOnCard,
    // cardNumber,
  }
} = checkoutFormModel;

// const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [username.name]: Yup.string().required(`${username.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [contactNo.name]: Yup.string().required(`${contactNo.requiredErrorMsg}`),
    [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),
  }),
  // Yup.object().shape({
  //   [nameOnCard?.name]: Yup.string().required(`${nameOnCard?.requiredErrorMsg}`),
  //   [cardNumber?.name]: Yup.string().required(`${cardNumber?.requiredErrorMsg}`),
  // })
];
