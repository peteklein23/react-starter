import React from 'react';
import PropTypes from 'prop-types';

const FormLabel = ({ children }) => {
  return <div className="form-label">{children}</div>;
};

FormLabel.propTypes = {
  name: PropTypes.string.isRequired
};

export default FormLabel;
