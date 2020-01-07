import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage } from 'formik';

const FormError = ({ name }) => {
  return (
    <div className="form-error">
      <ErrorMessage name={name} />
    </div>
  );
};

FormError.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormError;
