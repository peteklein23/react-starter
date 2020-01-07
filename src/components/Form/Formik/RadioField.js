import React from 'react';

import FormField from './FormField';

const RadioField = ({ ...props }) => {
  return (
    <div className="radio-field">
      <FormField type="radio" {...props} />
    </div>
  );
};

export default RadioField;
