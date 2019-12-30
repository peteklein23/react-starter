import React from 'react';
import { Field, ErrorMessage } from 'formik';

const EmailField = ({ name, children, ...props }) => {
  return (
    <div {...props}>
      <label htmlFor={name}>{children}</label>
      <Field name={name} type="email" />
      <ErrorMessage name={name} />
    </div>
  );
};

export default EmailField;
