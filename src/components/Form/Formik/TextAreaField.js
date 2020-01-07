import React from 'react';

import FormField from './FormField';

const TextAreaField = ({ ...props }) => {
  return (
    <div className="text-area-field">
      <FormField as="textarea" {...props} />
    </div>
  );
};

export default TextAreaField;
