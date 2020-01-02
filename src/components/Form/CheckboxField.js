import React from 'react';

import FormField from './FormField';

const CheckboxField = ({ name, ...props }) => {
  return (
    <div className="checkbox-field">
      <FormField name={name} type="checkbox" {...props} />
    </div>
  );
};

export default CheckboxField;
