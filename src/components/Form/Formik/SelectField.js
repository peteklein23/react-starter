import React from 'react';

import FormField from './FormField';

const SelectField = ({ children, ...props }) => {
  return (
    <div className="select-field">
      <FormField as="select" {...props}>
        {children}
      </FormField>
    </div>
  );
};

export default SelectField;
