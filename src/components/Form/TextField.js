import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TextField = ({ name, children, ...props }) => {
  return (
    <div {...props}>
      <label htmlFor={name}>{children}</label>
      <Field name={name} type="text" />
      <ErrorMessage name={name} />
    </div>
  );
};

export default TextField;
