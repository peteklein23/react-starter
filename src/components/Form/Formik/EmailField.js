import React from 'react';

import FormField from './FormField';

const EmailField = ({ ...props }) => {
  return (
    <div className="email-field">
      <FormField type="email" {...props} />
    </div>
  );
};

export default EmailField;
