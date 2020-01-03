import React from 'react';
import PropTypes from 'prop-types';
import 'flatpickr/dist/themes/material_green.css';

import FormField from './FormField';
import FlatpickrField from './FlatpickrField';

const defaultOptions = {
  altInput: true,
  enableTime: true,
  dateFormat: 'Y-m-d H:i:s',
  altFormat: 'M J, Y @h:i K'
};

const DateTimeField = ({ options, ...props }) => {
  const combinedOptions = options
    ? Object.assign(defaultOptions, options)
    : defaultOptions;

  return (
    <div className="time-field">
      <FormField
        component={FlatpickrField}
        options={combinedOptions}
        {...props}
      />
    </div>
  );
};

DateTimeField.propTypes = {
  options: PropTypes.shape()
};

export default DateTimeField;
