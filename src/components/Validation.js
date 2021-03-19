export default function validationInfo(values){
    let errors = {};


  if (!values.organisation) {
    errors.organisation = 'Organisation is required';
  }
  if (!values.username) {
    errors.username = 'Name is required';
  }

  if (!values.mobile) {
    errors.mobile = 'Mobile is required';
    
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 4) {
    errors.message = 'Message needs to be 4 characters or more';
  }

 
  return errors;
}
   