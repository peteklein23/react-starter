import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

import FormLabel from './FormLabel';
import FormError from './FormError';

const FormField = ({ children, name, type, label, ...props }) => {
  return (
    <label className="form-field">
      {label && <FormLabel name={name}>{label}</FormLabel>}

      <Field name={name} type={type} {...props}>
        {children}
      </Field>

      <FormError name={name} />
    </label>
  );
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  type: PropTypes.string,
  as: PropTypes.oneOf(['input', 'textarea', 'select'])
};

export default FormField;
