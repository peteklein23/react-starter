import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

const CrmSelect = ({ children, name, customCssClass }) => {
  return (
    <div className={`crm-select ${customCssClass}`}>
      <Field className="crm-select__select" name={name} as="select">
        {children}
      </Field>
    </div>
  );
};

export default CrmSelect;

CrmSelect.defaultProps = {
  customCssClass: ''
};

CrmSelect.propTypes = {
  customCssClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
