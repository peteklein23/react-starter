import React from 'react';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import { getIn } from 'formik';

const FlatpickrField = ({
  field: { onChange, ...field },
  form: { errors, touched, setFieldValue },
  options,
  ...props
}) => {
  return (
    <div className="flatpickr-field">
      <Flatpickr
        options={options}
        id={field.name}
        onChange={value => {
          setFieldValue(field.name, value);
        }}
        error={getIn(touched, field.name) && getIn(errors, field.name)}
        {...field}
        {...props}
      />
    </div>
  );
};

FlatpickrField.propTypes = {
  field: PropTypes.shape().isRequired,
  form: PropTypes.shape().isRequired,
  options: PropTypes.shape()
};

export default FlatpickrField;
