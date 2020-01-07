import React from 'react';
import PropTypes from 'prop-types';
import 'flatpickr/dist/themes/material_green.css';

import FormField from './FormField';
import FlatpickrField from './FlatpickrField';

const defaultOptions = {
  altInput: true,
  altFormat: 'M J, Y',
  dateFormat: 'Y-m-d',
  minDate: 'today'
};

const DateField = ({ options, ...props }) => {
  const combinedOptions = options
    ? Object.assign(defaultOptions, options)
    : defaultOptions;

  return (
    <div className="date-field">
      <FormField
        component={FlatpickrField}
        options={combinedOptions}
        {...props}
      />
    </div>
  );
};

DateField.propTypes = {
  options: PropTypes.shape()
};

export default DateField;
