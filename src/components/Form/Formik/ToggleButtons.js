import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import './ToggleButtons.css';

// toggle is a radio with bigger labels that hide the radio buttons
const ToggleButtons = ({ name, children }) => {
  const { values } = useFormikContext();
  const value = values[name];

  return (
    <div className="toggle-buttons">
      {children.map((child, i) => {
        const isSelected = value === child.props.value;

        return React.cloneElement(child, { name, isSelected, key: i });
      })}
    </div>
  );
};

ToggleButtons.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
};

export default ToggleButtons;
