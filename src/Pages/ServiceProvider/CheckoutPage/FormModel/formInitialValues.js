import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    username,
    email,
    contactNo,
    password,
    cardNumber,
  }
} = checkoutFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [username.name]: '',
  [email.name]: '',
  [contactNo.name]: '',
  [password.name]: '',
  [cardNumber.name]: '',
};
