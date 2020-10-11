export const validate = (values, setErrors) => {
  let errors = {};
  if (!values.title) {
    errors.title = true;
  }
  if (!values.price || Number.parseInt(values.price) === 0) {
    errors.price = true;
  }
  setErrors(errors);
  return errors;
};
