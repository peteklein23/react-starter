import React from 'react';
import PropTypes from 'prop-types';

import './ToggleButton.css';
import RadioField from './RadioField';

const ToggleButton = ({ isSelected, ...props }) => {
  const defaultClass = 'toggle-button';
  const className = isSelected
    ? `${defaultClass} ${defaultClass}--selected`
    : defaultClass;

  return (
    <div className={className}>
      <RadioField {...props} />
    </div>
  );
};

ToggleButton.propTypes = {
  isSelected: PropTypes.bool
};

export default ToggleButton;
