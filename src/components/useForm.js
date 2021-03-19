import { useState} from 'react';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
      organisation: '',
    username: '',
    mobile:'',
    email: '',
    message: '',
  
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    
  }
 
  };


  return { handleChange, handleSubmit, values, errors };
};

export default useForm;