import { useState, useEffect, useCallback } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    password2: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // add values to apiData
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
