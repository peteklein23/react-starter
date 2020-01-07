import React from 'react';
import PropTypes from 'prop-types';
import 'flatpickr/dist/themes/material_green.css';

import FormField from './FormField';
import FlatpickrField from './FlatpickrField';

const defaultOptions = {
  altInput: true,
  enableTime: true,
  noCalendar: true,
  dateFormat: 'H:i:s',
  altFormat: 'h:i K'
};

const TimeField = ({ options, ...props }) => {
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

TimeField.propTypes = {
  options: PropTypes.shape()
};

export default TimeField;
